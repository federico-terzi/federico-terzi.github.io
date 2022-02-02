---
name: RAJI
priority: 190
image: /projects/raji.png
keywords: ["TypeScript", "Parser", "Async", "JSON"]
github: https://github.com/federico-terzi/raji
website: https://federicoterzi.com/raji/
---
_Really Async JSON Interface_: a **non-blocking** alternative to `JSON.parse` to keep web UIs responsive.

In a nutshell:

* **RAJI guarantees that JSON parsing won't freeze your UI, especially on slower mobile devices.**
* It does so by dividing the parsing work in chunks.
* It's extremely easy to integrate with web apps, you just need to change the `JSON.parse(payload)` calls to `await parse(payload)` calls.
* RAJI chunks the work only when necessary. If the payload is small enough, it invokes `JSON.parse` synchronously under the hoods so you won't pay an additional overhead.
* RAJI is extremely lightweight, only 1.71kB gzipped.

More info on the Github page: