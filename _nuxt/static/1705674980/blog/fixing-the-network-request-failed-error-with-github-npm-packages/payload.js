__NUXT_JSONP__("/blog/fixing-the-network-request-failed-error-with-github-npm-packages", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:[{article:{slug:"2024-01-15-fixing-the-network-request-failed-error-with-github-npm-packages",description:"The other day, I encountered this error while running npm install on a private repository:",layout:"post",title:v,author:"Federico Terzi",date:"2024-01-15T00:00:00.000Z",categories:"github npm install package network request failed",social_title:v,toc:[],body:{type:w,children:[{type:b,tag:j,props:{},children:[{type:a,value:x},{type:b,tag:q,props:{},children:[{type:a,value:y}]},{type:a,value:z}]},{type:a,value:g},{type:a,value:g},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-javascript","line-numbers"]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"npm "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" code "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" syscall connect\nnpm "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" errno "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" network request to https"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,"regex"]},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,"regex-source","language-regex"]},children:[{type:a,value:"pkg-npm"},{type:b,tag:c,props:{className:[d,B,C]},children:[{type:a,value:k}]},{type:a,value:"githubusercontent"},{type:b,tag:c,props:{className:[d,B,C]},children:[{type:a,value:k}]},{type:a,value:"com"}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:t}]}]},{type:b,tag:c,props:{className:[d,D,e]},children:[{type:a,value:E}]},{type:a,value:" failed"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:F}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,"literal-property","property"]},children:[{type:a,value:"reason"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" connect "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"443"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"This"}]},{type:a,value:" is a problem related to network connectivity"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:G}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"In"}]},{type:a,value:" most cases you are behind a proxy or have bad network settings"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:G}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" network \nnpm "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"If"}]},{type:a,value:" you are behind a proxy"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:F}]},{type:a,value:" please make sure that the\nnpm "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"'proxy'"}]},{type:a,value:" config is "},{type:b,tag:c,props:{className:[d,"keyword"]},children:[{type:a,value:"set"}]},{type:a,value:" properly"},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:k}]},{type:a,value:"  "},{type:b,tag:c,props:{className:[d,u]},children:[{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"See"}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"'npm help config'"}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:j,props:{},children:[{type:a,value:"This project uses GitHub’s private NPM registry to host some packages."}]},{type:a,value:g},{type:b,tag:j,props:{},children:[{type:a,value:"After trying multiple approaches (eg. making sure that the GitHub tokens were not expired) the fix turned out to be more interesting than expected: "},{type:b,tag:"strong",props:{},children:[{type:a,value:"disabling and re-enabling the WiFi on my Macbook Pro."}]}]},{type:a,value:g},{type:b,tag:j,props:{},children:[{type:a,value:"My theory is that a system agent got into an inconsistent state, and restarting the internet connection was enough to unblock the situation."}]},{type:a,value:g},{type:b,tag:j,props:{},children:[{type:a,value:"This is a humbling reminder of the effectiveness of restarting: one of the most underrated yet powerful troubleshooting techniques."}]}]},excerpt:{type:w,children:[{type:b,tag:j,props:{},children:[{type:a,value:x},{type:b,tag:q,props:{},children:[{type:a,value:y}]},{type:a,value:z}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2024-01-15-fixing-the-network-request-failed-error-with-github-npm-packages",extension:".md",createdAt:I,updatedAt:I},header:null}],fetch:{},mutations:void 0}}("text","element","span","token","operator","constant","\n","ERR","!","p",".","punctuation"," ",":"," network ","maybe-class-name","code","ETIMEDOUT","\nnpm ","\u002F","property-access","Fixing the “network request failed” error with GitHub NPM packages","root","The other day, I encountered this error while running ","npm install"," on a private repository:","regex-delimiter","char-set","class-name","spread","...",",","npm","string","2024-01-19T14:35:25.548Z")));