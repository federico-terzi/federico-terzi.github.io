__NUXT_JSONP__("/blog/turn-telegram-into-a-static-web-server-with-tlgur", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{article:{slug:"2019-08-22-turn-telegram-into-a-static-web-server-with-tlgur",description:"Telegram is one of the most popular messaging apps and probably the most loved by developers. The reasons are many, but I think that it mostly boils down to their openness, which led many programmers to create unique and interesting projects around it. Today I want to share one of those: TLGUR.",layout:"post",title:"Turn Telegram into a Static Web Server with TLGUR",author:"Federico Terzi",date:"2019-08-22T00:00:00.000Z",categories:"telegram randomdevtricks",toc:[{id:p,depth:3,text:q}],body:{type:r,children:[{type:b,tag:h,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:s}]},{type:a,value:t},{type:b,tag:n,props:{},children:[{type:a,value:o}]},{type:a,value:u}]},{type:a,value:e},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:j,props:{href:v,rel:[w,x,y],target:z},children:[{type:a,value:o}]},{type:a,value:" is a very simple Telegram bot, originally designed to share files and images with people who don’t use Telegram. In a nutshell, "},{type:b,tag:n,props:{},children:[{type:a,value:"after sending a file to the bot you receive a URL"}]},{type:a,value:", that you can then share with everyone."}]},{type:a,value:e},{type:b,tag:"figure",props:{},children:[{type:a,value:"\n "},{type:b,tag:"video",props:{width:376,height:646,loop:A,autoPlay:A,style:"object-fit: cover"},children:[{type:a,value:"\n                                "},{type:b,tag:"source",props:{src:"\u002Fassets\u002Fvideos\u002Ftlgur.mp4",type:"video\u002Fmp4"},children:[]},{type:a,value:"\n                                Your browser does not support the video tag.\n                            "}]},{type:a,value:"\n  "},{type:b,tag:"figcaption",props:{},children:[{type:a,value:"Image from "},{type:b,tag:j,props:{href:v},children:[{type:a,value:"TLGUR Official Website"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This is already amazing, but for a developer, things can get even more interesting. Turns out that "},{type:b,tag:m,props:{},children:[{type:a,value:"the given link can be served as a static asset"}]},{type:a,value:" in a browser, such as a web page."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Let’s build a quick working example:"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Create a \"test.html\" file with the following content:"}]},{type:a,value:e},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-html","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:k}]},{type:a,value:B}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:i}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:k}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:l}]},{type:a,value:C}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:i}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:k}]},{type:a,value:D}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:i}]}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:k}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:i}]}]},{type:a,value:"TLGUR is amazing"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:l}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:i}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:l}]},{type:a,value:D}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:i}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:l}]},{type:a,value:B}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:i}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"And send it to the bot:"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:F,props:{alt:"Bot Response",src:"\u002Fposts\u002Ftelegrambot.png"},children:[]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Ftlgur.com\u002Fd\u002F89eJjoO8",rel:[w,x,y],target:z},children:[{type:a,value:"The result link"}]},{type:a,value:" can be visited with any web browser, and works as expected:"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:F,props:{alt:"Web Page",src:"\u002Fposts\u002Ftelegrambotpage.png"},children:[]}]},{type:a,value:e},{type:b,tag:"h3",props:{id:p},children:[{type:b,tag:j,props:{href:"#conclusion",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:c,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:q}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This opens a world of possibilities for quick experiments and, combined with the rest of Telegram APIs, could theoretically make it possible to host a full-blown website, possibly even a dynamic one. That said, this is not suited for production use and should not be abused."}]}]},excerpt:{type:r,children:[{type:b,tag:h,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:s}]},{type:a,value:t},{type:b,tag:n,props:{},children:[{type:a,value:o}]},{type:a,value:u}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2019-08-22-turn-telegram-into-a-static-web-server-with-tlgur",extension:".md",createdAt:G,updatedAt:G},header:null}],fetch:{},mutations:void 0}}("text","element","span","token","\n","tag","punctuation","p","\u003E","a","\u003C","\u003C\u002F","em","strong","TLGUR","conclusion","Conclusion","root","Telegram"," is one of the most popular messaging apps and probably the most loved by developers. The reasons are many, but I think that it mostly boils down to their openness, which led many programmers to create unique and interesting projects around it. Today I want to share one of those: ",".","https:\u002F\u002Ftlgur.com\u002F","nofollow","noopener","noreferrer","_blank",true,"html","head","body","h1","img","2024-09-09T15:43:40.270Z")));