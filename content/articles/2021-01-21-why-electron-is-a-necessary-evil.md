---
layout: post
title:  "Why Electron is a Necessary Evil"
author: Federico Terzi
date:   2021-01-21
categories: electron cross-platform cross platform desktop application app wxwidgets qt alternative localhost server sciter
---
Unless you’ve been living under a rock for the past 5 years, chances are you have used an Electron-based application at least once in your life. For those (probably few) who don’t know what Electron is, it’s a cross-platform desktop app framework built on top of Chromium and NodeJS (which in turn is based on Chrome’s V8 engine). 
<!--more-->
This Chrome-ception allows developers to build complete desktop applications using web technologies, including HTML, CSS, JS, and the ~500 MB of node_modules we all know and love.

Jokes aside, Electron offers several benefits that made it the preferred choice for most desktop applications developed today, including:

*   Truly free and open source
*   Code once, deploy on Windows, macOS, and Linux
*   Unlimited flexibility when it comes to rich user interfaces
*   Vast adoption

That said, Electron often receives a great deal of criticism, especially among developers. Having worked on desktop development myself for a couple of years both professionally and for fun, I enjoy reading discussions about this topic and trying out different approaches. Over time, I developed the idea that Electron is a necessary evil, something that is (surprisingly) superior to the alternatives for many use-cases.

This article is all about discussing the different approaches you can use to create cross-platform applications, along with their pros and cons. Ultimately, you will have a basic understanding of the different alternatives and their ideal use-cases. Perhaps, in the end, you will agree with me: Electron is not that bad.

Before jumping to the various alternatives, we first need to define the main Electron’s downsides people usually complain about:

* **High RAM consumption**: Electron apps tend to use a minimum of 80 MB of RAM, with lightweight apps in the 130-250 MB range and monsters like Slack sometimes reaching multi-GB values.
* **Large storage footprint**: Shipping with a full Chromium runtime, you can expect most Electron apps to consume _at least_ 150 MB of storage.
* **Slow**: Some Electron apps are definitely slow, but that can depend on many factors. Overuse of animations, for example, can substantially increase the CPU usage and thus make the app feel slower. Did you notice that most desktop apps that feel snappy don’t include any animation? Just because you can with Electron, doesn’t mean you should.
* **Lack of native UI/UX**: Electron renders webpages and not native controls. On one hand, that gives complete freedom to designers, but on the other, the app looks different from the “native” ones. Unsurprisingly, this complaint usually comes from macOS users, where a single “native” framework exists: Cocoa. Due to the fragmentation of GUI frameworks on other platforms (especially Windows), non-macOS users are usually more tolerant of apps not sharing the same look and feel.
* **Worse security**: Compared to the average website running on your web browser, Electron apps are incredibly more powerful (and dangerous) thanks to the NodeJS integration. If not properly configured, web pages running inside Electron can gain access to the entire system, which is particularly dangerous when displaying third-party websites. Luckily, it doesn’t have to be that way, as Electron provides [Context Isolation](https://www.electronjs.org/docs/tutorial/context-isolation) to shield the renderer from NodeJS APIs. Moreover, some believe that the NPM ecosystem is less secure than other counterparts. 

With them in mind, let’s see how the other approaches compare with Electron.

### Cross-platform Core, Native UI

Often considered as the gold-standard of cross-platform development, this approach consists in extracting the application’s business logic in a library (usually written in low level and cross-platform languages such as C++ or Rust), and then write a separate GUI for each platform, leveraging on the native frameworks. The resulting applications are fast, light-weight, and have an authentic look and feel.

If the results are so good, why doesn’t everyone follow this approach? Well, turns out this approach is very expensive from a development perspective. Not only you have to implement N different UIs (which is already not trivial, as you have to learn 3 different native frameworks, along with their quirks), but the interoperability between these low-level languages and the UI one is not exactly enjoyable. In a nutshell:

*   Every feature that has an impact on the GUI, will take N times as much to implement
*   Interoperability with the low-level library is not always convenient, especially when you start dealing with strings or dynamically allocated memory. Who frees that memory? That’s a question you’ll ask yourself a lot. Moreover, the answer depends on the current platform, as some use garbage collection, some reference counting, and some manual management.

So… should we discard this option? No, not always. If most of your application’s complexity is related to the business logic and the UI is simple, this approach might be absolutely feasible (and arguably, even preferred). An example I came across is Backblaze’s client UI, which according to [this old article](https://www.backblaze.com/blog/10-rules-for-how-to-write-cross-platform-code/), uses this approach. This makes perfect sense, as the UI itself is rather simple, only composed of a few buttons and labels.

On the other hand, if the UI is substantially complex or contains custom components, choosing Electron is generally a good choice. Some will surely argue that you don’t “need” custom components, but what about code editors then? Do you think something as complex and flexible as VSCode would have been feasible with native controls? I honestly don’t think so.

### Bonus:

Starting from the same premise, an intermediate approach I personally like is wxWidgets, a mature library that enables developers to create cross-platform apps from a single C++ codebase. What I particularly like about wxWidgets is that it uses native widgets as much as possible. For **simple** UIs, the resulting apps are fast, lightweight, and look great. 

This is the approach I personally used for [modulo](https://github.com/federico-terzi/modulo), a lightweight graphical extension for [espanso](https://espanso.org/), for which I implemented the business logic in Rust and the UI code in C++.


![An example of wxWidgets interfaces in modulo](/posts/modulo.png)


Again, I would only consider this approach for simple UIs, as there is a substantial development overhead. Moreover, as the UI gets more complex, the resulting apps start to look increasingly “off” compared to native ones.


### QT

“Just use QT, it’s much better than Electron!”

If you browse discussions about newly-released Electron apps, that comment is guaranteed to be present. In a nutshell, QT is a cross-platform app development framework that was particularly popular a few years ago. With QT, you can support the 3 major platforms from a single C++ codebase, or if you don’t like the language, there is a strong possibility some bindings might exist for your favorite one (notably Python).

Apps made with QT are usually less resource hungry and faster (when using C++), but how much?

Taking as a reference my favorite QT-application, Telegram Desktop, we can see that:

*   It uses 130 MB of RAM
*   It occupies 70.8 MB of storage

For reference, these are the values from a comparable Electron application, Whatsapp Desktop:

*   254 MB of RAM
*   450 MB of storage (this is a lot, I know, but this is WhatsApp's fault rather than Electron’s. Many Electron apps I use daily, such as Bitwarden and Obsidian, use ~170 MB)

As you can see, the QT counterpart is usually consuming roughly half the resources. But is it worth it?

In a system with 8 GB of RAM, which is pretty common today, 250 MB of RAM represents roughly ~3% of the total. For short-running applications, arguably that number is pretty much insignificant. Of course, not everybody will agree on this point.

At the same time, choosing QT means accepting some less-than-ideal compromises, with the first and foremost being the license. QT is dual-licensed: you can either choose the open-source license or the commercial one (spoiler alert, be prepared to spend thousands of dollars on this one). If you are creating an open-source project, then you are in luck, QT is free to use as long as you release your code as GPL (although recently with some [controversies](https://news.ycombinator.com/item?id=22821050)). But what if you are a small software company looking to release commercial software? There might be a chance to dynamically link the LGPL version and avoid paying for the complete license, but that’s not always possible. I’m sure some people will disagree, but I think QT is a viable option only for open-source projects or large enterprises, everything in-between won’t be financially sustainable.

Moreover, although QT tries to resemble the platform’s look and feel, you can definitely tell something is wrong. Just check the [DB Browser for SQLite](https://sqlitebrowser.org/) macOS version (which I think is a great piece of software, I’m only pointing out how the “look and feel” is definitely off).

Keeping in mind that a well-written Electron application will use twice the resources of the equivalent QT counterpart, is it really worth it? Only you can answer this question, but I honestly don’t think the gains (or better, the resource savings) are significant enough to ditch Electron.


### Localhost server

For long-running processes, another common approach is to provide a web GUI in the user’s browser connected to a localhost-only HTTP server. This solution, currently used by [Syncthing](https://syncthing.net/) and [Jupyter Notebook](https://jupyter.org/) to name a few, shares many of Electron’s advantages regarding rich user interfaces, while being significantly light-weight (no need to bundle an entire Chromium runtime). That said, there are two major downsides:



*   Less-than-ideal integration with the OS, as the GUI will appear as a website rather than an application. This also means no menu bar, for example.
*   No control over the user’s browser, which means having to support widely different rendering behaviors. To be fair, as long as you are not committed to supporting IE or you need some fancy new features, this problem is becoming less and less relevant.

Although I consider this approach viable in a number of use-cases, I’m far from considering it the optimal one. I know this is highly subjective, but I really appreciate having a separate window for each application, along with good OS integrations such as native menu bars and dialogs.


### Embedding the system’s webview

One of the usual complaints against Electron is that every application ships with a separate Chromium runtime, wasting ~100/200 MB of storage per app. A natural question arises: _why isn’t this runtime extracted into a single, system-wide module that is then shared between all applications (similar to the JVM)?_ Actually, I’m going to take it even further: _given that most OSes ship with an embeddable webview component, why don’t we use it instead of a separate runtime?_

On paper, this approach sounds like the ideal solution: the resulting binary is very light-weight (few megabytes) and can still leverage web technologies to create rich and cross-platform user interfaces. Moreover, direct OS integration is also possible, as the resulting programs can access the native facilities (menu bars, dialogs, etc) from the “wrapper” code. Many projects are trying to overcome Electron’s drawbacks using this approach, such as [Electrino](https://github.com/pojala/electrino), [webview](https://github.com/webview/webview), [Tauri](https://github.com/tauri-apps/tauri), and many more.

For many months, I considered this approach superior to Electron, with development convenience being the only downside. You see, if you choose this approach, you will need to do a lot of “plumbing” yourself, as you don’t have access to any of the convenient APIs exposed by Electron. Do you want a menu bar? You have to write the low-level bindings yourself, often multiple times depending on the number of platforms you are looking to support.

At that time, I wanted to create a GUI for [espanso](https://espanso.org), and that seemed like the perfect opportunity to experiment with these technologies. I forked the original webview project (as I wanted to add a few features) and created a first, very alpha version for Windows:

![An example of Embeddable Webview GUI](/posts/espanso-gui.png)


As expected, implementing the business logic was trickier than Electron, having to manually glue together a mix of C++, Rust and JavaScript, but the application was very lightweight, with a consumption of ~2 MB of storage and ~70 MB of RAM. Sounds like a success right? Well, turns out I overlooked a crucial aspect: compatibility.

Imagine building an application that relies on a complex library to perform the core-functionality. This library is not really compatible with all the platforms you are trying to support, so you choose some local ports of this library, which are all roughly compliant with a common specification. The “only” downside is that you cannot control the library version. Turns out there is a bug in the Windows port of the library, what do you do? Even if a fix is shipped in the next library version, you can’t control the version used by users. As you might have understood, this “complex library” is nothing more than the embedded webview.

Last year, the situation was even worse, as Windows supported only subpar webviews. Besides the IE-based one, which I would only recommend to your greatest enemies, Windows offered the old-Edge-based one, which was “kind of” decent, but definitely worse than the WebKit-based ones included in macOS and Linux. Luckily, with the new Chromium-based Edge browser, Windows will also ship with a modern, embeddable webview called [WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/).

As we previously said, depending on a component that you can’t control is risky, as the version is locked and so are its bugs. That’s also part of why companies like Slack moved away from this approach (more on this [here](https://news.ycombinator.com/item?id=18761840)). 

Should we always discard this approach? Definitely not. But I would personally consider it only when the complexity of the application is relatively low, especially when it comes to styling. 


### Notable mentions

Another promising alternative is [Sciter](https://sciter.com/), which makes it possible to create very lightweight and cross-platform applications using HTML/CSS and any language that supports C bindings (most do). The biggest drawback is that the engine is not open-source, although it [might become in the future](https://www.kickstarter.com/projects/c-smile/open-source-sciter-engine). Don’t get me wrong, I totally understand the author’s desire to offer a commercial license to fund its development, but I tend to prefer open-source alternatives when possible.


### Conclusion

The goal of this article wasn’t to prove how Electron is always the best choice (it isn’t), but rather, to provide a broad overview of the areas in which it is best suited. For example, you shouldn’t use it for applications with simple UIs, or if you don’t need to go cross-platform. In such cases, choosing the native frameworks will most likely be the best choice. That said, if you need to go cross-platform and your application is sufficiently complex, then Electron is really not bad at all compared to the alternatives, especially when done right. Of course, there are some very bloated Electron apps out there and I don’t like them either, but that’s mostly due to careless developers, not Electron.

Finally, keep in mind that without Electron some developers might not be able to manage the burden of cross-platform development, and thus, some great apps might not even exist. That’s why I consider it a _necessary evil._

If you liked the article, follow me on [Twitter](https://twitter.com/terzi_federico) or [Youtube](https://www.youtube.com/c/FedericoTerzi)!