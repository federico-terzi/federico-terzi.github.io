__NUXT_JSONP__("/blog/3-great-python-tricks-you-may-not-know", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH){return {data:[{article:{slug:"2019-09-03-3-great-python-tricks-you-may-not-know",description:"Python is a wonderful language. Other than being simple to learn and fast to write, it’s also very powerful thanks to its huge ecosystem. In fact, it has so many features that it’s easy to miss some good ones. In this article I’m going to show you 3 great Python tricks you may have missed:",layout:"post",title:"3 Great Python Tricks You May Not Know",author:"Federico Terzi",date:"2019-09-03T00:00:00.000Z",categories:"python tricks randomdevtricks development",toc:[{id:E,depth:M,text:E},{id:B,depth:M,text:B},{id:ah,depth:M,text:ai},{id:aj,depth:M,text:ak}],body:{type:al,children:[{type:b,tag:h,props:{},children:[{type:a,value:am},{type:b,tag:H,props:{},children:[{type:a,value:an}]},{type:a,value:ao},{type:b,tag:C,props:{},children:[{type:a,value:ap}]},{type:a,value:aq}]},{type:a,value:f},{type:a,value:f},{type:b,tag:N,props:{id:E},children:[{type:b,tag:F,props:{href:"#tqdm",ariaHidden:O,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:E}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"If you ever use Python to do some sort of elaboration, chances are you find yourself writing a for loop, iterating through a list of items to process each one them. For example:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:D}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:$}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aa}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"But how could you track the status of the process if the code took more than a few seconds to complete? You probably would start adding some prints:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:D}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"Processing:\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:","}]},{type:a,value:" item"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:$}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"Done!\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"While this is a working solution, a smarter approach would be using tqdm."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:C,props:{},children:[{type:a,value:E}]},{type:a,value:" is a Python library that makes it easy to show a smart progress bar for almost any kind of loop processing. Let’s see an example:"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"The first thing to do is installing the package using pip:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,ac]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"pip install tqdm\n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Then we can use it in our code by simply wrapping the iterable inside the "},{type:b,tag:m,props:{},children:[{type:a,value:"tqdm()"}]},{type:a,value:" call:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:" tqdm "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:U}]},{type:a,value:" tqdm\n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:D}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:" tqdm"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:$}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aa}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Now if you execute this code, you will see a nice progress bar appear in your terminal."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:"img",props:{alt:"tqdm Progress Bar",src:"\u002Fposts\u002Ftqdmanimated.gif"},children:[]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"As you can see, besides the progress, it also shows the speed and the expected remaining time. The great thing is that you can use "},{type:b,tag:C,props:{},children:[{type:a,value:E}]},{type:a,value:" with any iterable, making it trivial to improve your existing scripts!"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"This library has many more features, so if you haven’t already, check out the"},{type:b,tag:F,props:{href:"https:\u002F\u002Ftqdm.github.io\u002F",rel:[ar,as,at],target:au},children:[{type:a,value:" official documentation"}]},{type:a,value:w}]},{type:a,value:f},{type:b,tag:N,props:{id:B},children:[{type:b,tag:F,props:{href:"#defaultdict",ariaHidden:O,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:B}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"One of the best things about Python is its simplicity. Once you know the basic structures of the language, you can immediately start writing code with it. While being a great aspect, it sometimes causes people to miss some neat data structures, such as "},{type:b,tag:m,props:{},children:[{type:a,value:B}]},{type:a,value:". Let’s see where it can be useful with an example:"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Given a text, you want to group words by their initials. The structure we’re looking for here is a "},{type:b,tag:C,props:{},children:[{type:a,value:"dictionary of lists"}]},{type:a,value:", having the initials as key and a list of words as value, something like this:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,ac]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"{\n    \"a\": [\"all\", \"although\", \"average\"],\n    \"b\": [\"best\", \"both\"],\n    ...\n}\n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"So you start writing code, and you come up with something like this:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:m,props:{},children:[{type:a,value:av},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"a long text but very interesting and fun\""}]},{type:a,value:"\ndata "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ax}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:ad}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:D}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"But then you get the following error:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,ac]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"Traceback (most recent call last):\n  File \"main.py\", line 5, in \u003Cmodule\u003E\n    data[word[0]].append(word)\nKeyError: 'a'\n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Of course, the first time you see an initial, the associated list is not initialized. Easy to fix, we must first check if the key is present and, if not, initialize the list:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:m,props:{},children:[{type:a,value:av},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aA}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ax}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:ad}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:D}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"if"}]},{type:a,value:" word"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:" data"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"else"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"And now it is working, but the code became bloated with the check. "},{type:b,tag:C,props:{},children:[{type:a,value:B}]},{type:a,value:" is meant to solve that problem. In particular, we can specify the "},{type:b,tag:H,props:{},children:[{type:a,value:"default value"}]},{type:a,value:" of a key that has never been accessed, such as an empty list. The code now becomes:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:U}]},{type:a,value:" defaultdict\ntext "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aA}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:" defaultdict"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:ad}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:D}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"As you can see, we completely removed the check, and the code is still working! This is possible because we replaced the dictionary with a "},{type:b,tag:H,props:{},children:[{type:a,value:"defaultdict,"}]},{type:a,value:" specifying "},{type:b,tag:H,props:{},children:[{type:a,value:aD}]},{type:a,value:" as the default value ( meaning an empty list )."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"A similar problem arises when we want to count the number of occurrences of each word in a text. While we could use a "},{type:b,tag:C,props:{},children:[{type:a,value:B}]},{type:a,value:" with 0 as the default value, there’s a class made exactly for that purpose:"}]},{type:a,value:f},{type:b,tag:N,props:{id:ah},children:[{type:b,tag:F,props:{href:"#counter",ariaHidden:O,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:ai}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"The Counter class was specifically made to solve those kinds of problems, adding also a couple of extra goodies to the mix. For example:"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"We want to count the number of occurrences of each word in a text. With the Counter class, this is easily accomplished:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:U}]},{type:a,value:" Counter\ntext "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aE}]},{type:a,value:"\n\nc "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:D}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:"\n  c"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"+="}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"1"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Actually we can do even better using the Counter’s constructor:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:T}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:U}]},{type:a,value:" Counter\n\ntext "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aE}]},{type:a,value:"\nc "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:n}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:a},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"At this point, we can use some neat features such as the "},{type:b,tag:m,props:{},children:[{type:a,value:aG}]},{type:a,value:" method:"}]},{type:a,value:f},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:"# Print the 3 most common words, along with their count"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"3"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:N,props:{id:aj},children:[{type:b,tag:F,props:{href:"#conclusion",ariaHidden:O,tabIndex:P},children:[{type:b,tag:c,props:{className:[Q,R]},children:[]}]},{type:a,value:ak}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"There are many other great tools hidden under the surface and I recommend you to check out the "},{type:b,tag:F,props:{href:"https:\u002F\u002Fdocs.python.org\u002F3\u002Flibrary\u002Fcollections.html",rel:[ar,as,at],target:au},children:[{type:a,value:"official documentation of the collections package"}]},{type:a,value:" to see many more."}]}]},excerpt:{type:al,children:[{type:b,tag:h,props:{},children:[{type:a,value:am},{type:b,tag:H,props:{},children:[{type:a,value:an}]},{type:a,value:ao},{type:b,tag:C,props:{},children:[{type:a,value:ap}]},{type:a,value:aq}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2019-09-03-3-great-python-tricks-you-may-not-know",extension:".md",createdAt:aH,updatedAt:aH}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n","keyword","p","(",")","operator"," ","code","=","number","div","nuxt-content-highlight","pre","line-numbers","string","[","]",".","language-python",":","word","in","defaultdict","strong","for","tqdm","a"," item ","em","print","split","\" \"","0",2,"h2","true",-1,"icon","icon-link","builtin","from","import","comment"," word "," text","range","10000000","\n    result ","*","2","\n    ","language-text","# Cycle through each word, appending it to the correct list","append"," collections ","c","counter","Counter","conclusion","Conclusion","root","Python is a ","wonderful"," language. Other than being simple to learn and fast to write, it’s also very powerful thanks to its ","huge ecosystem",". In fact, it has so many features that it’s easy to miss some good ones. In this article I’m going to show you 3 great Python tricks you may have missed:","nofollow","noopener","noreferrer","_blank","text ","{","}","\n\n","\n    data","'a long text but very interesting and fun'","\n\ndata ","\n        data","list","'and another long text but interesting and fun'"," Counter","most_common","2022-02-04T20:10:36.504Z")));