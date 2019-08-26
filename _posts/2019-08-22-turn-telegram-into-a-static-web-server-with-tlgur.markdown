---
layout: post
title:  "Turn Telegram into a Static Web Server with TLGUR"
author: Federico Terzi
image: /assets/images/tlgur.jpg
date:   2019-08-22
categories: telegram randomdevtricks
---
*Telegram* is one of the most popular messaging apps and probably the most loved by developers. The reasons are many, but I think that it mostly boils down to their openness, which led many programmers to create unique and interesting projects around it. Today I want to share one of those: **TLGUR**.

[TLGUR](https://tlgur.com/) is a very simple Telegram bot, originally designed to share files and images with people who don’t use Telegram. In a nutshell, **after sending a file to the bot you receive a URL**, that you can then share with everyone. 

<figure>
 <video width="376" height="646" loop autoplay style="object-fit: cover">
                                <source src="/assets/videos/tlgur.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
  <figcaption>Image from <a href="https://tlgur.com/">TLGUR Official Website</a></figcaption>
</figure>

This is already amazing, but for a developer, things can get even more interesting. Turns out that *the given link can be served as a static asset* in a browser, such as a web page.

Let’s build a quick working example:

Create a "test.html" file with the following content:

```html
<html>
<head></head>
<body>
	<h1>TLGUR is amazing</h1>
</body>
</html>
```

And send it to the bot:

![Bot Response](/assets/images/telegrambot.png)

[The result link](https://tlgur.com/d/89eJjoO8) can be visited with any web browser, and works as expected:

![Web Page](/assets/images/telegrambotpage.png)

### Conclusion

This opens a world of possibilities for quick experiments and, combined with the rest of Telegram APIs, could theoretically make it possible to host a full-blown website, possibly even a dynamic one. That said, this is not suited for production use and should not be abused.




