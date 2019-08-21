---
name: O(sarracino)
priority: 85
image: /assets/images/osarracino.png
github: https://github.com/federico-terzi/osarracino/
playonline: https://federicoterzi.com/webTablut/
---
*O(sarracino)* is a Tablut Engine written in **C++** with a strong focus on performance. 
It was written by me and Massimo Schembri for the 2019 [yearly challenge](http://ai.unibo.it/games/boardgamecompetition/1819) 
hosted by Prof. Mello for the Fundamentals of AI course. O(sarracino) got the 2nd place out of 22 participants.

In order to achive the best performance, O(sarracino) took advantage of:

* Multi-threading
* Bit operations
* CPU intrinsics (native processor instructions)

The engine is capable to evaluate ( on my Intel i5-8400 machine ) about 35 million possibile moves each second.