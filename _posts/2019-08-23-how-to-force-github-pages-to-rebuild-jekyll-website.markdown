---
layout: post
title:  "How to Force Github Pages to Rebuild Jekyll Website"
author: Federico Terzi
image: /assets/images/githubpagesrebuild.jpg
date:   2019-08-23
categories: jekyll github pages
---
A month ago I decided to rebuild my website using [Jekyll](https://jekyllrb.com) for a couple of reasons: it’s the official tool used by *Github Pages* and it supports **blogging**. Considering also that Github Pages is free, this is pretty much one of the best ways to build a personal website nowadays and I'm very happy with the result.

If you plan to deploy a Jekyll website on Github Pages the process is straightforward: you **push your website source on the correct branch** ( `master` for a personal website or `gh-pages` for a project website ) and then the site gets compiled automatically by the Github Servers.

While this works almost always correctly, **sometimes the servers don’t compile the source**, and the website gets stuck to the old version.

### Force a Rebuild

Luckily for us, we can force a website rebuild using the [Github API v3](https://developer.github.com/v3/repos/pages/#request-a-page-build).

We will use `curl` to make the request. If you’re using **Linux** or **Mac OS**, it comes preinstalled with the system. If you’re using **Windows**, you can [download curl here](https://curl.haxx.se/windows/) or use [Postman](https://www.getpostman.com/) to make the request.

Open a Terminal and paste the following code, replacing `USER` with your Github username and `REPOSITORY` with your repository name.

```bash
curl -X POST \
    --header 'Accept: application/vnd.github.mister-fantastic-preview+json' \
    -u "USER" \
    'https://api.github.com/repos/USER/REPOSITORY/pages/builds'
```

The command will prompt for your Github password, type it and press enter. If everything was correct, you should see a response like:

```
{
  "url": "https://api.github.com/repos/github/developer.github.com/pages/builds/latest",
  "status": "queued"
}
```

### Example

Let’s suppose my Github username is “bob” and therefore my personal website has a repository called “bob.github.io”. We use the command:
```bash
curl -X POST \
    --header 'Accept: application/vnd.github.mister-fantastic-preview+json' \
    -u "bob" \
    'https://api.github.com/repos/bob/bob.github.io/pages/builds'
```

And then type the password.

**If you encounter a 404 error**, double-check the URL and the credentials that you inserted, as they are probably incorrect.



