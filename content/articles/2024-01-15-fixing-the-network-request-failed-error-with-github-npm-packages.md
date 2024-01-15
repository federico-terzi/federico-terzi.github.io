---
layout: post
title: Fixing the “network request failed” error with GitHub NPM packages
author: Federico Terzi
date: 2024-01-15
categories: github npm install package network request failed
social_title: Fixing the “network request failed” error with GitHub NPM packages

---

The other day, I encountered this error while running `npm install` on a private repository:

<!--more-->

```javascript
npm ERR! code ETIMEDOUT
npm ERR! syscall connect
npm ERR! errno ETIMEDOUT
npm ERR! network request to https://pkg-npm.githubusercontent.com/... failed, reason: connect ETIMEDOUT ...:443
npm ERR! network This is a problem related to network connectivity.
npm ERR! network In most cases you are behind a proxy or have bad network settings.
npm ERR! network 
npm ERR! network If you are behind a proxy, please make sure that the
npm ERR! network 'proxy' config is set properly.  See: 'npm help config'
```


This project uses GitHub’s private NPM registry to host some packages.


After trying multiple approaches (eg. making sure that the GitHub tokens were not expired) the fix turned out to be more interesting than expected: **disabling and re-enabling the WiFi on my Macbook Pro.**


My theory is that a system agent got into an inconsistent state, and restarting the internet connection was enough to unblock the situation.


This is a humbling reminder of the effectiveness of restarting: one of the most underrated yet powerful troubleshooting techniques.


