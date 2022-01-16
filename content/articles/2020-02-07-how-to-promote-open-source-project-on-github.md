---
layout: post
title:  "How to Promote Your Open Source Project"
author: Federico Terzi
date:   2020-02-07
categories: github project promotion opensource how to tutorial
---
As a developer myself, I know how hard it can be to promote a project. You spent weeks, months, or even years, developing your idea, only to find out later that nobody is noticing it.

Turns out that promotion, probably the least favourable thing for a programmer, is important as well.

In this article I’m going to summarize the things I learned with [espanso](https://github.com/federico-terzi/espanso), my latest open-source project which, by the time I’m writing this article, reached more than 500 GitHub stars in about 4 months. 

# #1: First impressions matter

Later in the article we’ll talk about _how_ to actually reach people, but first, it’s crucial to setup a nice landing page. For the majority of projects, a nicely written Readme on GitHub will serve the purpose just fine. The important things to include are:

*   A screenshot of the project, or even better, an animated GIF
*   A general description, explaining the project goal and the features
*   A getting started section, explaining the _minimum_ amount of steps required to use your project

If you want to take it a step further, building an actual website is a good idea. Nowadays, building project websites is pretty easy (as well as free), thanks to modern tools and services such as Jekyll and GitHub Pages. I personally took this approach with espanso by building the [website](https://espanso.org/), which has proven to be an effective way to attract users.

# #2: Make users’ life easy

I’ll never stress this enough. How many times have you enountered a super interesting project and wanted to try it out, just to later find out that to run it you need a 3gb compiler as well as all the required libraries. This problem is especially painful in languages such as Java, Golang, C or Rust, in which the compilation process can be far from trivial.

There are many possible solutions, ranging from the easy to the complex ones. If you are using a compiled language, the bare minimum I would recommend is creating prebuilt binaries for the OS you are targeting, so that users can try out your project without installing the whole build system.

A more complex step could be integrating with package managers, so that the installation becomes just a couple of commands in the terminal. The situation here really depends on your target. For example, getting a package in PIP or Homebrew is super easy, whereas publishing on APT (the official Ubuntu/Debian manager) is an enormous task.

Another important detail which is often overlooked is documentation. Unless your project is super trivial, you should write instructions on how to use/configure it, even just a section in the Readme. Ideally, users should never have to read the sources to understand the basic functionality, because most often than not, they won't even try and will leave the project instead.

# #3: Reddit is your friend and enemy

When it comes to promotion, social networks are usually the first place to go in order to reach potential users. Of course, every social network has its quirks, and some are more versed to software than others. From my experience, I can tell Reddit is the most powerful one, as well as the most dangerous. In particular, promotion there has to be done **very** carefully, as a spammy behavior will trigger waves of haters against your project.

The easiest way to get some early feedback is to post your GitHub page on [r/coolgithubprojects](https://www.reddit.com/r/coolgithubprojects/) and [r/opensource](https://www.reddit.com/r/opensource). Then things get a bit tricky, as posting on other subreddits would usually result in a ghost ban. To overcome this problem, the key is to provide value. Does your project solve some interesting technical challenges? If the answer is yes, it may be a good idea to write an **article** and posting it on a related subreddit. Inside the article, you can **mention** your project, so that new people get to know it, without looking spammy. For example, because I couldn’t find any resource about publishing a Rust project on Homebrew when working on espanso, I decided to [write an article](https://federicoterzi.com/blog/how-to-publish-your-rust-project-on-homebrew/) about the process and then I published it on [r/rust](https://www.reddit.com/r/Rust). In this way, you are providing value to the user without being spammy.

# #4: Other sources

Beside Reddit, there are other viable alternatives to promote a project. If you are lucky enough to get featured in the homepage of **Hackernews**, your GitHub page will generally experience a ton of traffic. Personally, I never had any success posting espanso there, getting almost no traction at all. That said, last weekend something pretty interesting happened: someone posted the espanso's GitHub page on HN and, for about a couple of hours, it remained in the front page. The results were astonishing: 200 stars and more than a thousand user visits.

![Star history of the project](/assets/images/stargazers.png)

Another powerful website is YouTube. In particular, getting featured in the right video can drive a significant amount of traffic to your project. The key here is to find YouTubers interested in the problems you are trying to solve, and ask them if they could be interested in covering your project. Most won't even respond, but with some luck you may get good results.

# #0: Build something interesting/useful

This may sound overly simplicistic, but it’s actually the most important concept. Perhaps  you have built something technically remarkable, but if it’s not interesting or useful to someone, then it’s unlikely to generate a following. Don’t get me wrong, it doesn’t have to target a wide audience, niche projects are fine. In fact, they are often more successful than general ones, solving the needs of a relatively small group of users. 

I fell in this trap many times in my life, and in the beginning it’s easy to get hurt. After all, spending weeks in something that doesn’t generate any interest it’s pretty frustrating. In the end, the only reasonable thing to do is being realistic: it’s totally fine to build something just for yourself, but don’t expect a ton of users if you build the next todo app :)

# #Bonus: Be nice

Open Source is one of the greatest things happening in our planet, and we must preserve it. It's very important to remember that at the other side of the screen there are humans, with a busy life and emotions as everybody else. For this reason, when interacting with a user asking for help or a project maintainer, remember to be nice.