__NUXT_JSONP__("/blog/why-electron-is-a-necessary-evil", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M){return {data:[{article:{slug:"2021-01-21-why-electron-is-a-necessary-evil",description:u,layout:"post",title:"Why Electron is a Necessary Evil",author:"Federico Terzi",date:"2021-01-21T00:00:00.000Z",categories:"electron cross-platform cross platform desktop application app wxwidgets qt alternative localhost server sciter",toc:[{id:v,depth:k,text:w},{id:x,depth:k,text:y},{id:z,depth:k,text:A},{id:B,depth:k,text:C},{id:D,depth:k,text:E},{id:F,depth:k,text:G},{id:H,depth:k,text:I}],body:{type:J,children:[{type:b,tag:d,props:{},children:[{type:a,value:u}]},{type:a,value:c},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This Chrome-ception allows developers to build complete desktop applications using web technologies, including HTML, CSS, JS, and the ~500 MB of node_modules we all know and love."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Jokes aside, Electron offers several benefits that made it the preferred choice for most desktop applications developed today, including:"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Truly free and open source"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Code once, deploy on Windows, macOS, and Linux"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Unlimited flexibility when it comes to rich user interfaces"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Vast adoption"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That said, Electron often receives a great deal of criticism, especially among developers. Having worked on desktop development myself for a couple of years both professionally and for fun, I enjoy reading discussions about this topic and trying out different approaches. Over time, I developed the idea that Electron is a necessary evil, something that is (surprisingly) superior to the alternatives for many use-cases."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This article is all about discussing the different approaches you can use to create cross-platform applications, along with their pros and cons. Ultimately, you will have a basic understanding of the different alternatives and their ideal use-cases. Perhaps, in the end, you will agree with me: Electron is not that bad."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Before jumping to the various alternatives, we first need to define the main Electron’s downsides people usually complain about:"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"High RAM consumption"}]},{type:a,value:": Electron apps tend to use a minimum of 80 MB of RAM, with lightweight apps in the 130-250 MB range and monsters like Slack sometimes reaching multi-GB values."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"Large storage footprint"}]},{type:a,value:": Shipping with a full Chromium runtime, you can expect most Electron apps to consume "},{type:b,tag:t,props:{},children:[{type:a,value:"at least"}]},{type:a,value:" 150 MB of storage."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"Slow"}]},{type:a,value:": Some Electron apps are definitely slow, but that can depend on many factors. Overuse of animations, for example, can substantially increase the CPU usage and thus make the app feel slower. Did you notice that most desktop apps that feel snappy don’t include any animation? Just because you can with Electron, doesn’t mean you should."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"Lack of native UI\u002FUX"}]},{type:a,value:": Electron renders webpages and not native controls. On one hand, that gives complete freedom to designers, but on the other, the app looks different from the “native” ones. Unsurprisingly, this complaint usually comes from macOS users, where a single “native” framework exists: Cocoa. Due to the fragmentation of GUI frameworks on other platforms (especially Windows), non-macOS users are usually more tolerant of apps not sharing the same look and feel."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"Worse security"}]},{type:a,value:": Compared to the average website running on your web browser, Electron apps are incredibly more powerful (and dangerous) thanks to the NodeJS integration. If not properly configured, web pages running inside Electron can gain access to the entire system, which is particularly dangerous when displaying third-party websites. Luckily, it doesn’t have to be that way, as Electron provides "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.electronjs.org\u002Fdocs\u002Ftutorial\u002Fcontext-isolation",rel:[f,g,h],target:i},children:[{type:a,value:"Context Isolation"}]},{type:a,value:" to shield the renderer from NodeJS APIs. Moreover, some believe that the NPM ecosystem is less secure than other counterparts."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With them in mind, let’s see how the other approaches compare with Electron."}]},{type:a,value:c},{type:b,tag:l,props:{id:v},children:[{type:b,tag:e,props:{href:"#cross-platform-core-native-ui",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Often considered as the gold-standard of cross-platform development, this approach consists in extracting the application’s business logic in a library (usually written in low level and cross-platform languages such as C++ or Rust), and then write a separate GUI for each platform, leveraging on the native frameworks. The resulting applications are fast, light-weight, and have an authentic look and feel."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If the results are so good, why doesn’t everyone follow this approach? Well, turns out this approach is very expensive from a development perspective. Not only you have to implement N different UIs (which is already not trivial, as you have to learn 3 different native frameworks, along with their quirks), but the interoperability between these low-level languages and the UI one is not exactly enjoyable. In a nutshell:"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Every feature that has an impact on the GUI, will take N times as much to implement"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Interoperability with the low-level library is not always convenient, especially when you start dealing with strings or dynamically allocated memory. Who frees that memory? That’s a question you’ll ask yourself a lot. Moreover, the answer depends on the current platform, as some use garbage collection, some reference counting, and some manual management."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So… should we discard this option? No, not always. If most of your application’s complexity is related to the business logic and the UI is simple, this approach might be absolutely feasible (and arguably, even preferred). An example I came across is Backblaze’s client UI, which according to "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.backblaze.com\u002Fblog\u002F10-rules-for-how-to-write-cross-platform-code\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"this old article"}]},{type:a,value:", uses this approach. This makes perfect sense, as the UI itself is rather simple, only composed of a few buttons and labels."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On the other hand, if the UI is substantially complex or contains custom components, choosing Electron is generally a good choice. Some will surely argue that you don’t “need” custom components, but what about code editors then? Do you think something as complex and flexible as VSCode would have been feasible with native controls? I honestly don’t think so."}]},{type:a,value:c},{type:b,tag:l,props:{id:x},children:[{type:b,tag:e,props:{href:"#bonus",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Starting from the same premise, an intermediate approach I personally like is wxWidgets, a mature library that enables developers to create cross-platform apps from a single C++ codebase. What I particularly like about wxWidgets is that it uses native widgets as much as possible. For "},{type:b,tag:s,props:{},children:[{type:a,value:"simple"}]},{type:a,value:" UIs, the resulting apps are fast, lightweight, and look great."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is the approach I personally used for "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Ffederico-terzi\u002Fmodulo",rel:[f,g,h],target:i},children:[{type:a,value:"modulo"}]},{type:a,value:", a lightweight graphical extension for "},{type:b,tag:e,props:{href:"https:\u002F\u002Fespanso.org\u002F",rel:[f,g,h],target:i},children:[{type:a,value:K}]},{type:a,value:", for which I implemented the business logic in Rust and the UI code in C++."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:L,props:{alt:"An example of wxWidgets interfaces in modulo",src:"\u002Fposts\u002Fmodulo.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Again, I would only consider this approach for simple UIs, as there is a substantial development overhead. Moreover, as the UI gets more complex, the resulting apps start to look increasingly “off” compared to native ones."}]},{type:a,value:c},{type:b,tag:l,props:{id:z},children:[{type:b,tag:e,props:{href:"#qt",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"“Just use QT, it’s much better than Electron!”"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you browse discussions about newly-released Electron apps, that comment is guaranteed to be present. In a nutshell, QT is a cross-platform app development framework that was particularly popular a few years ago. With QT, you can support the 3 major platforms from a single C++ codebase, or if you don’t like the language, there is a strong possibility some bindings might exist for your favorite one (notably Python)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Apps made with QT are usually less resource hungry and faster (when using C++), but how much?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Taking as a reference my favorite QT-application, Telegram Desktop, we can see that:"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"It uses 130 MB of RAM"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"It occupies 70.8 MB of storage"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For reference, these are the values from a comparable Electron application, Whatsapp Desktop:"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"254 MB of RAM"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"450 MB of storage (this is a lot, I know, but this is WhatsApp's fault rather than Electron’s. Many Electron apps I use daily, such as Bitwarden and Obsidian, use ~170 MB)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As you can see, the QT counterpart is usually consuming roughly half the resources. But is it worth it?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In a system with 8 GB of RAM, which is pretty common today, 250 MB of RAM represents roughly ~3% of the total. For short-running applications, arguably that number is pretty much insignificant. Of course, not everybody will agree on this point."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"At the same time, choosing QT means accepting some less-than-ideal compromises, with the first and foremost being the license. QT is dual-licensed: you can either choose the open-source license or the commercial one (spoiler alert, be prepared to spend thousands of dollars on this one). If you are creating an open-source project, then you are in luck, QT is free to use as long as you release your code as GPL (although recently with some "},{type:b,tag:e,props:{href:"https:\u002F\u002Fnews.ycombinator.com\u002Fitem?id=22821050",rel:[f,g,h],target:i},children:[{type:a,value:"controversies"}]},{type:a,value:"). But what if you are a small software company looking to release commercial software? There might be a chance to dynamically link the LGPL version and avoid paying for the complete license, but that’s not always possible. I’m sure some people will disagree, but I think QT is a viable option only for open-source projects or large enterprises, everything in-between won’t be financially sustainable."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Moreover, although QT tries to resemble the platform’s look and feel, you can definitely tell something is wrong. Just check the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fsqlitebrowser.org\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"DB Browser for SQLite"}]},{type:a,value:" macOS version (which I think is a great piece of software, I’m only pointing out how the “look and feel” is definitely off)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Keeping in mind that a well-written Electron application will use twice the resources of the equivalent QT counterpart, is it really worth it? Only you can answer this question, but I honestly don’t think the gains (or better, the resource savings) are significant enough to ditch Electron."}]},{type:a,value:c},{type:b,tag:l,props:{id:B},children:[{type:b,tag:e,props:{href:"#localhost-server",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For long-running processes, another common approach is to provide a web GUI in the user’s browser connected to a localhost-only HTTP server. This solution, currently used by "},{type:b,tag:e,props:{href:"https:\u002F\u002Fsyncthing.net\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Syncthing"}]},{type:a,value:" and "},{type:b,tag:e,props:{href:"https:\u002F\u002Fjupyter.org\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Jupyter Notebook"}]},{type:a,value:" to name a few, shares many of Electron’s advantages regarding rich user interfaces, while being significantly light-weight (no need to bundle an entire Chromium runtime). That said, there are two major downsides:"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Less-than-ideal integration with the OS, as the GUI will appear as a website rather than an application. This also means no menu bar, for example."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"No control over the user’s browser, which means having to support widely different rendering behaviors. To be fair, as long as you are not committed to supporting IE or you need some fancy new features, this problem is becoming less and less relevant."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Although I consider this approach viable in a number of use-cases, I’m far from considering it the optimal one. I know this is highly subjective, but I really appreciate having a separate window for each application, along with good OS integrations such as native menu bars and dialogs."}]},{type:a,value:c},{type:b,tag:l,props:{id:D},children:[{type:b,tag:e,props:{href:"#embedding-the-systems-webview",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"One of the usual complaints against Electron is that every application ships with a separate Chromium runtime, wasting ~100\u002F200 MB of storage per app. A natural question arises: "},{type:b,tag:t,props:{},children:[{type:a,value:"why isn’t this runtime extracted into a single, system-wide module that is then shared between all applications (similar to the JVM)?"}]},{type:a,value:" Actually, I’m going to take it even further: "},{type:b,tag:t,props:{},children:[{type:a,value:"given that most OSes ship with an embeddable webview component, why don’t we use it instead of a separate runtime?"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On paper, this approach sounds like the ideal solution: the resulting binary is very light-weight (few megabytes) and can still leverage web technologies to create rich and cross-platform user interfaces. Moreover, direct OS integration is also possible, as the resulting programs can access the native facilities (menu bars, dialogs, etc) from the “wrapper” code. Many projects are trying to overcome Electron’s drawbacks using this approach, such as "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fpojala\u002Felectrino",rel:[f,g,h],target:i},children:[{type:a,value:"Electrino"}]},{type:a,value:M},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fwebview\u002Fwebview",rel:[f,g,h],target:i},children:[{type:a,value:"webview"}]},{type:a,value:M},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Ftauri-apps\u002Ftauri",rel:[f,g,h],target:i},children:[{type:a,value:"Tauri"}]},{type:a,value:", and many more."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For many months, I considered this approach superior to Electron, with development convenience being the only downside. You see, if you choose this approach, you will need to do a lot of “plumbing” yourself, as you don’t have access to any of the convenient APIs exposed by Electron. Do you want a menu bar? You have to write the low-level bindings yourself, often multiple times depending on the number of platforms you are looking to support."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"At that time, I wanted to create a GUI for "},{type:b,tag:e,props:{href:"https:\u002F\u002Fespanso.org",rel:[f,g,h],target:i},children:[{type:a,value:K}]},{type:a,value:", and that seemed like the perfect opportunity to experiment with these technologies. I forked the original webview project (as I wanted to add a few features) and created a first, very alpha version for Windows:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:L,props:{alt:"An example of Embeddable Webview GUI",src:"\u002Fposts\u002Fespanso-gui.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As expected, implementing the business logic was trickier than Electron, having to manually glue together a mix of C++, Rust and JavaScript, but the application was very lightweight, with a consumption of ~2 MB of storage and ~70 MB of RAM. Sounds like a success right? Well, turns out I overlooked a crucial aspect: compatibility."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Imagine building an application that relies on a complex library to perform the core-functionality. This library is not really compatible with all the platforms you are trying to support, so you choose some local ports of this library, which are all roughly compliant with a common specification. The “only” downside is that you cannot control the library version. Turns out there is a bug in the Windows port of the library, what do you do? Even if a fix is shipped in the next library version, you can’t control the version used by users. As you might have understood, this “complex library” is nothing more than the embedded webview."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Last year, the situation was even worse, as Windows supported only subpar webviews. Besides the IE-based one, which I would only recommend to your greatest enemies, Windows offered the old-Edge-based one, which was “kind of” decent, but definitely worse than the WebKit-based ones included in macOS and Linux. Luckily, with the new Chromium-based Edge browser, Windows will also ship with a modern, embeddable webview called "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdeveloper.microsoft.com\u002Fen-us\u002Fmicrosoft-edge\u002Fwebview2\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"WebView2"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As we previously said, depending on a component that you can’t control is risky, as the version is locked and so are its bugs. That’s also part of why companies like Slack moved away from this approach (more on this "},{type:b,tag:e,props:{href:"https:\u002F\u002Fnews.ycombinator.com\u002Fitem?id=18761840",rel:[f,g,h],target:i},children:[{type:a,value:"here"}]},{type:a,value:")."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Should we always discard this approach? Definitely not. But I would personally consider it only when the complexity of the application is relatively low, especially when it comes to styling."}]},{type:a,value:c},{type:b,tag:l,props:{id:F},children:[{type:b,tag:e,props:{href:"#notable-mentions",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Another promising alternative is "},{type:b,tag:e,props:{href:"https:\u002F\u002Fsciter.com\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Sciter"}]},{type:a,value:", which makes it possible to create very lightweight and cross-platform applications using HTML\u002FCSS and any language that supports C bindings (most do). The biggest drawback is that the engine is not open-source, although it "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.kickstarter.com\u002Fprojects\u002Fc-smile\u002Fopen-source-sciter-engine",rel:[f,g,h],target:i},children:[{type:a,value:"might become in the future"}]},{type:a,value:". Don’t get me wrong, I totally understand the author’s desire to offer a commercial license to fund its development, but I tend to prefer open-source alternatives when possible."}]},{type:a,value:c},{type:b,tag:l,props:{id:H},children:[{type:b,tag:e,props:{href:"#conclusion",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The goal of this article wasn’t to prove how Electron is always the best choice (it isn’t), but rather, to provide a broad overview of the areas in which it is best suited. For example, you shouldn’t use it for applications with simple UIs, or if you don’t need to go cross-platform. In such cases, choosing the native frameworks will most likely be the best choice. That said, if you need to go cross-platform and your application is sufficiently complex, then Electron is really not bad at all compared to the alternatives, especially when done right. Of course, there are some very bloated Electron apps out there and I don’t like them either, but that’s mostly due to careless developers, not Electron."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Finally, keep in mind that without Electron some developers might not be able to manage the burden of cross-platform development, and thus, some great apps might not even exist. That’s why I consider it a "},{type:b,tag:t,props:{},children:[{type:a,value:"necessary evil."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you liked the article, follow me on "},{type:b,tag:e,props:{href:"https:\u002F\u002Ftwitter.com\u002Fterzi_federico",rel:[f,g,h],target:i},children:[{type:a,value:"Twitter"}]},{type:a,value:" or "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fc\u002FFedericoTerzi",rel:[f,g,h],target:i},children:[{type:a,value:"Youtube"}]},{type:a,value:"!"}]}]},excerpt:{type:J,children:[{type:b,tag:d,props:{},children:[{type:a,value:u}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2021-01-21-why-electron-is-a-necessary-evil",extension:".md",createdAt:"2022-09-21T19:26:19.099Z",updatedAt:"2022-09-21T19:26:19.103Z"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","nofollow","noopener","noreferrer","_blank","li",3,"h3","true",-1,"span","icon","icon-link","ul","strong","em","Unless you’ve been living under a rock for the past 5 years, chances are you have used an Electron-based application at least once in your life. For those (probably few) who don’t know what Electron is, it’s a cross-platform desktop app framework built on top of Chromium and NodeJS (which in turn is based on Chrome’s V8 engine).","cross-platform-core-native-ui","Cross-platform Core, Native UI","bonus","Bonus:","qt","QT","localhost-server","Localhost server","embedding-the-systems-webview","Embedding the system’s webview","notable-mentions","Notable mentions","conclusion","Conclusion","root","espanso","img",", ")));