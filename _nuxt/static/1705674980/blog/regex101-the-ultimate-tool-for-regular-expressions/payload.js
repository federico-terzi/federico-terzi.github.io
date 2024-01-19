__NUXT_JSONP__("/blog/regex101-the-ultimate-tool-for-regular-expressions", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){return {data:[{article:{slug:"2020-05-29-regex101-the-ultimate-tool-for-regular-expressions",description:"If you've been programming for a while, you will surely know how useful regular expressions can be when dealing with text.\nYou may want to validate a string (such as checking whether an email field is valid) or extract some information from formatted text. In both cases, building the right regex can take many attempts.",layout:"post",title:"Regex101 - The Ultimate Tool for Regular Expressions",author:"Federico Terzi",date:"2020-05-29T00:00:00.000Z",categories:"regex tutorial visual debugger regex101 regular expression",toc:[{id:y,depth:h,text:z},{id:A,depth:h,text:B},{id:C,depth:h,text:D},{id:E,depth:h,text:F},{id:G,depth:h,text:H}],body:{type:I,children:[{type:b,tag:d,props:{},children:[{type:a,value:J},{type:b,tag:K,props:{},children:[{type:a,value:L}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:N}]},{type:a,value:c},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Today I'm going to introduce you to an incredibly useful tool called "},{type:b,tag:e,props:{href:O,rel:[i,j,k],target:l},children:[{type:a,value:P}]},{type:a,value:", which makes working with Regexes a breeze."}]},{type:a,value:c},{type:b,tag:m,props:{id:y},children:[{type:b,tag:e,props:{href:"#validating-a-regex",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As an example, let's create a very simple regex to validate email addresses. Please note that this is only a toy example, as "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.regular-expressions.info\u002Femail.html",rel:[i,j,k],target:l},children:[{type:a,value:"validating email addresses is harder than it seems"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We consider the following 5 input strings:"}]},{type:a,value:c},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,w]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"example@example.com\nexample.com\nexample@\njohn@company.net\ninfo@example\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As you can already tell, only the first and fourth addresses are correct.\nA first attempt would be using the "},{type:b,tag:f,props:{},children:[{type:a,value:"[a-zA-Z]+\\@[a-zA-Z]+\\.[a-z]+"}]},{type:a,value:" Regex (which doesn't account for many things, but for this example is enough)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Open "},{type:b,tag:e,props:{href:O,rel:[i,j,k],target:l},children:[{type:a,value:P}]},{type:a,value:" and paste the input in the "},{type:b,tag:x,props:{},children:[{type:a,value:"TEST STRING"}]},{type:a,value:" field, then type the regex on the "},{type:b,tag:x,props:{},children:[{type:a,value:"REGULAR EXPRESSION"}]},{type:a,value:" field.\nAs a result, we will see:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"Validation Regex",src:"\u002Fposts\u002Fvalidation-regex.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Regex101 highlighted the lines that matched our regex, which makes experimenting with it a breeze! That said, this is just the tip of the iceberg."}]},{type:a,value:c},{type:b,tag:m,props:{id:A},children:[{type:b,tag:e,props:{href:"#extracting-data",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Another common task involves extracting a substring (group) from a formatted text and this is one of the areas in which Regex101 shines."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's start from another example, a simple CSV formatted list of entries:"}]},{type:a,value:c},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,w]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"John;Snow;5\nEddard;Stark;3\nTyrion;Lannister;6\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We now want to extract the name of each character,  and to do that we can use a simple regex:"}]},{type:a,value:c},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,w]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"^([a-zA-Z]+);\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Typing this regex on Regex101 along with the example produces the following result:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"Extracting Data Regex 1",src:"\u002Fposts\u002Fextracting-data-regex1.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As you can see, the names are highlighted. But the most important thing can be found on the right side:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"Extracting Data Regex 2",src:"\u002Fposts\u002Fextracting-data-regex2.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All the group contents are extracted and displayed in a very convenient way, making working with them a piece of cake!"}]},{type:a,value:c},{type:b,tag:m,props:{id:C},children:[{type:b,tag:e,props:{href:"#substitution",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You may even want to take it a step further, extracting the content of a group and "},{type:b,tag:x,props:{},children:[{type:a,value:"replacing"}]},{type:a,value:" it with something else. With Regex101 you can indeed do that by opening the "},{type:b,tag:x,props:{},children:[{type:a,value:Q}]},{type:a,value:" panel (on the bottom) and typing your replace string:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"Replace Regex 1",src:"\u002Fposts\u002Freplace-regex-1.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Moreover, if you use the "},{type:b,tag:f,props:{},children:[{type:a,value:"\\1"}]},{type:a,value:" operators, we can also restructure the lines completely. Change the original regex as follows:"}]},{type:a,value:c},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,w]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"^([a-zA-Z]+);.*\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Then, in the "},{type:b,tag:f,props:{},children:[{type:a,value:Q}]},{type:a,value:" field, type:"}]},{type:a,value:c},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,w]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Hello $1\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The result is:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"Substitution Regex 2",src:"\u002Fposts\u002Fsubstitution-regex-2.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You have no idea how many times this feature saved my day (which by the way is also available in most advanced text editors, such as Sublime Text)."}]},{type:a,value:c},{type:b,tag:m,props:{id:E},children:[{type:b,tag:e,props:{href:"#code-generation",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Another very useful feature is the automatic "},{type:b,tag:x,props:{},children:[{type:a,value:"code generation"}]},{type:a,value:", available for a ton of languages out of the box. By clicking on the "},{type:b,tag:f,props:{},children:[{type:a,value:"Code Generation"}]},{type:a,value:" tab, we can access a section that will generate the regex boilerplate for us, so that we can use it in our programs\u002Fscripts with minimal effort:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{alt:"Code Generator",src:"\u002Fposts\u002Fcode-generator-regex.png"},children:[]}]},{type:a,value:c},{type:b,tag:m,props:{id:G},children:[{type:b,tag:e,props:{href:"#conclusion",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This was just a quick introduction to Regex101, thank you for reading through!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you want to stay updated with those neat developer tricks and tools, follow me on "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fc\u002FFedericoTerzi",rel:[i,j,k],target:l},children:[{type:a,value:"Youtube"}]},{type:a,value:" or "},{type:b,tag:e,props:{href:"https:\u002F\u002Ftwitter.com\u002Fterzi_federico",rel:[i,j,k],target:l},children:[{type:a,value:"Twitter"}]},{type:a,value:"!"}]}]},excerpt:{type:I,children:[{type:b,tag:d,props:{},children:[{type:a,value:J},{type:b,tag:K,props:{},children:[{type:a,value:L}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:N}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2020-05-29-regex101-the-ultimate-tool-for-regular-expressions",extension:".md",createdAt:R,updatedAt:R},header:null}],fetch:{},mutations:void 0}}("text","element","\n","p","a","code","img",2,"nofollow","noopener","noreferrer","_blank","h2","true",-1,"span","icon","icon-link","div","nuxt-content-highlight","pre","language-text","line-numbers","em","validating-a-regex","Validating a Regex","extracting-data","Extracting data","substitution","Substitution","code-generation","Code generation","conclusion","Conclusion","root","If you've been programming for a while, you will surely know how useful ","strong","regular expressions"," can be when dealing with text.","You may want to validate a string (such as checking whether an email field is valid) or extract some information from formatted text. In both cases, building the right regex can take many attempts.","https:\u002F\u002Fregex101.com\u002F","Regex101","SUBSTITUTION","2024-01-19T14:35:25.548Z")));