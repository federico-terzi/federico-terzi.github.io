---
layout: post
title: Solving GitHub Status stuck on Pending with CircleCI’s Approvals
author: Federico Terzi
date: 2022-10-17
categories: circle ci circleci github status pending stuck approval
social_title: Solving GitHub Status stuck on Pending with CircleCI’s Approvals

---

At [Anima](https://www.animaapp.com/), we are always looking for new ways to automate our workflows. One of these efforts involved creating a new [CircleCI](https://circleci.com/) pipeline to automatically deploy some NPM packages, removing the need for tedious manual work. The plan was straightforward: once started, the pipeline would bump the version of our packages (using Lerna), build them and finally publish them on our NPM registry. 

<!--more-->

Given that we didn’t want to create a new release for every change pushed on `main`, we decided to use CircleCI’s manual approvals as “deployment gates”. The idea was to have the project owner decide when to perform a release by _approving_ it through the CircleCI UI.


In practice, this can be easily implemented by using CircleCI’s job dependencies. For example, starting from a workflow in which we always run the deploy, such as:


```yaml
    jobs:
      - build
      - deploy:
          requires:
            - build
```


We could decide to only run the deploy after a manual approval with:


```yaml
    jobs:
      - build
      - deploy-approval:
          type: approval
          requires:
            - build
      - deploy:
          requires:
            - build
            - deploy-approval
```


With this configuration, the `deploy` job would only be started if both the `build` succeeded and the `deploy-approval` job was manually approved.


## The problem: GitHub status gets stuck on “Pending” for unapproved workflows


This approach worked flawlessly for our use-case, except for a small (but really annoying) problem: **approval jobs would always appear as “pending” on GitHub statuses unless manually approved.** Although this was not a blocker, we lost the ability to understand at a glance which commits passed all CI checks.


![](/posts/2022-10-17-solving-github-status-stuck-on-pending-with-circlecis-approvals/image0.png)


After a bit of digging, I realized we weren’t the only ones struggling with this issue, as it was [one of the most requested features on CircleCI’s feedback channels](https://circleci.canny.io/cloud-feature-requests/p/show-overall-all-checks-have-passed-status-in-github-even-on-builds-with-incompl). Unfortunately, the thread didn’t offer any useful information or workaround, so we were stuck with this sub-optimal solution.


## The workaround: overriding GitHub Commit Statuses manually


Fast forward a few weeks, and I find myself developing a new CI integration. While going through the GitHub API documentation, I stumble upon the [GitHub’s Commit Status API](https://docs.github.com/en/rest/commits/statuses), which allows users to programmatically access commit statuses. 


Among other things, you can _create_ a new commit status with this HTTP request:


```yaml
curl \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <YOUR-TOKEN>" \
  https://api.github.com/repos/OWNER/REPO/statuses/SHA \
  -d '{"state":"success","target_url":"https://example.com/build/status","description":"The build succeeded!","context":"continuous-integration/jenkins"}'
```


What captures my attention is the `context` field, which acts as a sort of _id_ for the commit status. While experimenting, I ask myself: what happens if you specify a `context` value of an existing status? I was expecting the `context` to be specific to a given GitHub’s access token, but that turned out to be an incorrect assumption. As it turns out, **specifying the same** **`context`** **of an existing status overrides the status, regardless of the entity that created it… Bingo!**


We finally got a possible workaround: we could wait for CircleCI’s approval status to appear on GitHub’s commit statuses, and then override it using the above request to appear as successful.


## The solution: a bash script to patch Commit statuses


I spent the following 20 minutes putting together a script that would:

1. Wait for the approval status to appear on the GitHub commit statuses
2. Override it with a “success” state

Here it is (make sure to replace the values at the top with the correct ones):


```yaml
#!/bin/bash

set -e

# Note that the CIRCLECI_JOB_NAME should also include the workflow name
CIRCLECI_JOB_NAME="your-workflow/deploy-approval"
REPO_NAME="your-repo-name"
REPO_OWNER="your-github-account"
# Note: you should also set a valid GitHub token in the GITHUB_ACCESS_TOKEN variable

echo "Patching approval job named: $CIRCLECI_JOB_NAME"

for i in {1..10}
do
  echo "waiting for status to appear..."

  sleep 10

  curl --request GET \
    --url "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/statuses/$CIRCLE_SHA1" \
    --header 'Accept: application/vnd.github.v3+json' \
    --header "Authorization: Bearer $GITHUB_ACCESS_TOKEN" > commit-statuses.json

  cat commit-statuses.json
  cat commit-statuses.json | jq -r '.[].context' > commit-statuses.txt

  if grep -q "ci/circleci: $CIRCLECI_JOB_NAME" "commit-statuses.txt"; then
    echo "status appeared, patching the pending state"
    URL=$(cat commit-statuses.json| jq -r --arg name "$CIRCLECI_JOB_NAME" -c 'map(select(.context | contains($name))) | .[].target_url' | head -1)

    curl --request POST \
      --url "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/statuses/$CIRCLE_SHA1" \
      --header 'Accept: application/vnd.github.v3+json' \
      --header "Authorization: Bearer $GITHUB_ACCESS_TOKEN" \
      --header 'Content-Type: application/json' \
      --data '{
        "state": "success",
        "target_url": "'"$URL"'",
        "description": "Patched pending state, please visit circleCI to start the approval.",
        "context": "ci/circleci: '"$CIRCLECI_JOB_NAME"'"
      }'

    exit 0
  fi
done

echo "Could not patch CircleCI approval, timed out"
```


In order for it to work, it has to be spawned roughly at the same time as the approval job, so having the same job dependencies is important. For example, starting from the case described at the top of our article, we could refactor the pipeline to:


```yaml
    jobs:
      - build
      - deploy-approval:
          type: approval
          requires:
            - build
      - patch-deploy-approval-status
          requires:
            - build # same dependency as approval, so that they are triggered at the same time
      - deploy:
          requires:
            - build
            - deploy-approval

...

jobs:
  patch-deploy-approval-status:
    steps:
      - run: "Patch deploy approval status"
        command: |
          ... the code of the script above
```


### Notes

- You will need to have `jq` and `curl` installed for the script to work
- You will need to store a GitHub token (a personal access token could work as well) in a CircleCI environment variable for the API request to work

## Conclusion


After more than a month of endless pending states, we finally got our green checks back! 

![](/posts/2022-10-17-solving-github-status-stuck-on-pending-with-circlecis-approvals/image1.png)

Hopefully, CircleCI will fix this behavior soon, but in the meantime, this workaround should work well for our purposes.


