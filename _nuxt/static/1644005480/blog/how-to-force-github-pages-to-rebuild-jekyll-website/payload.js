__NUXT_JSONP__("/blog/how-to-force-github-pages-to-rebuild-jekyll-website", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){return {data:[{article:{slug:"2019-08-23-how-to-force-github-pages-to-rebuild-jekyll-website",description:"A month ago I decided to rebuild my website using Jekyll for a couple of reasons: it’s the official tool used by Github Pages and it supports blogging. Considering also that Github Pages is free, this is pretty much one of the best ways to build a personal website nowadays and I'm very happy with the result.",layout:"post",title:"How to Force Github Pages to Rebuild Jekyll Website",author:"Federico Terzi",date:"2019-08-23T00:00:00.000Z",categories:"jekyll github pages",toc:[{id:w,depth:x,text:y},{id:z,depth:x,text:A}],body:{type:B,children:[{type:b,tag:f,props:{},children:[{type:a,value:C},{type:b,tag:i,props:{href:D,rel:[m,n,o],target:p},children:[{type:a,value:E}]},{type:a,value:F},{type:b,tag:G,props:{},children:[{type:a,value:H}]},{type:a,value:I},{type:b,tag:g,props:{},children:[{type:a,value:J}]},{type:a,value:K}]},{type:a,value:c},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"If you plan to deploy a Jekyll website on Github Pages the process is straightforward: you "},{type:b,tag:g,props:{},children:[{type:a,value:"push your website source on the correct branch"}]},{type:a,value:" ( "},{type:b,tag:h,props:{},children:[{type:a,value:"master"}]},{type:a,value:" for a personal website or "},{type:b,tag:h,props:{},children:[{type:a,value:"gh-pages"}]},{type:a,value:" for a project website ) and then the site gets compiled automatically by the Github Servers."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"While this works almost always correctly, "},{type:b,tag:g,props:{},children:[{type:a,value:"sometimes the servers don’t compile the source"}]},{type:a,value:", and the website gets stuck on the old version."}]},{type:a,value:c},{type:b,tag:L,props:{id:w},children:[{type:b,tag:i,props:{href:"#force-a-rebuild",ariaHidden:M,tabIndex:N},children:[{type:b,tag:d,props:{className:[O,P]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Luckily for us, we can force a website rebuild using the "},{type:b,tag:i,props:{href:"https:\u002F\u002Fdeveloper.github.com\u002Fv3\u002Frepos\u002Fpages\u002F#request-a-page-build",rel:[m,n,o],target:p},children:[{type:a,value:"Github API v3"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"We will use "},{type:b,tag:h,props:{},children:[{type:a,value:r}]},{type:a,value:" to make the request. If you’re using "},{type:b,tag:g,props:{},children:[{type:a,value:"Linux"}]},{type:a,value:" or "},{type:b,tag:g,props:{},children:[{type:a,value:"Mac OS"}]},{type:a,value:", it comes preinstalled with the system. If you’re using "},{type:b,tag:g,props:{},children:[{type:a,value:"Windows"}]},{type:a,value:", you can "},{type:b,tag:i,props:{href:"https:\u002F\u002Fcurl.haxx.se\u002Fwindows\u002F",rel:[m,n,o],target:p},children:[{type:a,value:"download curl here"}]},{type:a,value:" or use "},{type:b,tag:i,props:{href:"https:\u002F\u002Fwww.getpostman.com\u002F",rel:[m,n,o],target:p},children:[{type:a,value:"Postman"}]},{type:a,value:" to make the request."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Open a Terminal and paste the following code, replacing "},{type:b,tag:h,props:{},children:[{type:a,value:"USER"}]},{type:a,value:" with your Github username and "},{type:b,tag:h,props:{},children:[{type:a,value:"REPOSITORY"}]},{type:a,value:" with your repository name."}]},{type:a,value:c},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,Q]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,R]},children:[{type:a,value:r}]},{type:a,value:S},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:k}]},{type:a,value:T},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:U}]},{type:a,value:q},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:k}]},{type:a,value:V},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"\"USER\""}]},{type:a,value:q},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:k}]},{type:a,value:W},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"'https:\u002F\u002Fapi.github.com\u002Frepos\u002FUSER\u002FREPOSITORY\u002Fpages\u002Fbuilds'"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"The command will prompt for your Github password, type it and press enter. If everything was correct, you should see a response like:"}]},{type:a,value:c},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,"language-text"]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"{\n  \"url\": \"https:\u002F\u002Fapi.github.com\u002Frepos\u002Fgithub\u002Fdeveloper.github.com\u002Fpages\u002Fbuilds\u002Flatest\",\n  \"status\": \"queued\"\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:L,props:{id:z},children:[{type:b,tag:i,props:{href:"#example",ariaHidden:M,tabIndex:N},children:[{type:b,tag:d,props:{className:[O,P]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Let’s suppose my Github username is “bob” and therefore my personal website has a repository called “bob.github.io”. We use the command:"}]},{type:a,value:c},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,Q]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,R]},children:[{type:a,value:r}]},{type:a,value:S},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:k}]},{type:a,value:T},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:U}]},{type:a,value:q},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:k}]},{type:a,value:V},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"\"bob\""}]},{type:a,value:q},{type:b,tag:d,props:{className:[e,j]},children:[{type:a,value:k}]},{type:a,value:W},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"'https:\u002F\u002Fapi.github.com\u002Frepos\u002Fbob\u002Fbob.github.io\u002Fpages\u002Fbuilds'"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"And then type the password."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"If you encounter a 404 error"}]},{type:a,value:", double-check the URL and the credentials that you inserted, as they are probably incorrect."}]}]},excerpt:{type:B,children:[{type:b,tag:f,props:{},children:[{type:a,value:C},{type:b,tag:i,props:{href:D,rel:[m,n,o],target:p},children:[{type:a,value:E}]},{type:a,value:F},{type:b,tag:G,props:{},children:[{type:a,value:H}]},{type:a,value:I},{type:b,tag:g,props:{},children:[{type:a,value:J}]},{type:a,value:K}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2019-08-23-how-to-force-github-pages-to-rebuild-jekyll-website",extension:".md",createdAt:X,updatedAt:X}}],fetch:{},mutations:void 0}}("text","element","\n","span","token","p","strong","code","a","punctuation","\\","string","nofollow","noopener","noreferrer","_blank"," ","curl","div","nuxt-content-highlight","pre","line-numbers","force-a-rebuild",3,"Force a Rebuild","example","Example","root","A month ago I decided to rebuild my website using ","https:\u002F\u002Fjekyllrb.com","Jekyll"," for a couple of reasons: it’s the official tool used by ","em","Github Pages"," and it supports ","blogging",". Considering also that Github Pages is free, this is pretty much one of the best ways to build a personal website nowadays and I'm very happy with the result.","h3","true",-1,"icon","icon-link","language-bash","function"," -X POST ","\n    --header ","'Accept: application\u002Fvnd.github.mister-fantastic-preview+json'","\n    -u ","\n    ","2022-02-04T20:10:36.504Z")));