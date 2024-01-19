__NUXT_JSONP__("/blog/understanding-strings-in-rust", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak){return {data:[{article:{slug:"2021-01-01-understanding-strings-in-rust",description:"When I started learning Rust a couple of years ago, the first thing that really got me thinking was strings. You see, in Rust, there are 2 string types: the String and the &str types.",layout:"post",title:"Understanding Strings in Rust",author:"Federico Terzi",date:"2021-01-01T00:00:00.000Z",categories:"strings str rust tutorial guide understand understanding ownership",toc:[{id:Q,depth:2,text:y},{id:R,depth:E,text:S},{id:T,depth:E,text:U},{id:V,depth:E,text:W}],body:{type:X,children:[{type:b,tag:f,props:{},children:[{type:a,value:Y},{type:b,tag:g,props:{},children:[{type:a,value:z}]},{type:a,value:Z},{type:b,tag:g,props:{},children:[{type:a,value:n}]},{type:a,value:_}]},{type:a,value:e},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"As you go on with examples and tutorials, you see that both of them are thoroughly used, so my natural question was: when should I use one over the other?"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"In this article, we are going to explore the differences between the two, but first, we will need to discuss the way strings are kept in memory."}]},{type:a,value:e},{type:b,tag:"h2",props:{id:Q},children:[{type:b,tag:l,props:{href:"#memory-model",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:y}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Let's first start with a basic example (don’t pay attention to the language itself, the following considerations apply to Python, Go, Java, and many others). We want to create a string surrounded by spaces, such as:"}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,w]},children:[{type:b,tag:g,props:{},children:[{type:a,value:$},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:aa}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"From a memory standpoint, the situation is characterized by 2 memory entities:"}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:ab,props:{},children:[{type:a,value:"A memory region in the heap containing the actual string content"}]},{type:a,value:e},{type:b,tag:ab,props:{},children:[{type:a,value:"A string record on the stack containing the memory location of the first element in the heap (and generally, its length)"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:F,props:{alt:y,src:"\u002Fposts\u002Fstring1.JPEG"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Looking at our example, we can say that "},{type:b,tag:g,props:{},children:[{type:a,value:"s"}]},{type:a,value:" does not contain the actual string content, but instead, it is simply a reference to the memory region containing the content."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"This is in contrast with the other basic data types such as integers, for which their value is usually stored on the stack, due to their fixed size."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Let's say that we want to apply the "},{type:b,tag:g,props:{},children:[{type:a,value:ac}]},{type:a,value:" operation to the string (or "},{type:b,tag:g,props:{},children:[{type:a,value:"strip()"}]},{type:a,value:" in Python) to obtain its content, but without the surrounding spaces. We could do:"}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,w]},children:[{type:b,tag:g,props:{},children:[{type:a,value:$},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:aa}]},{type:a,value:"\nvar t "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:" s"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"In this case, the variable "},{type:b,tag:g,props:{},children:[{type:a,value:"t"}]},{type:a,value:" will hold the value "},{type:b,tag:g,props:{},children:[{type:a,value:H}]},{type:a,value:", without any surrounding space."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"In most garbage collected languages that operation causes a separate string being created, so you end-up with two memory blocks on the heap:"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:F,props:{alt:y,src:"\u002Fposts\u002Fstring2.JPEG"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"This is where Rust magic happens. If we assume that neither "},{type:b,tag:g,props:{},children:[{type:a,value:"T"}]},{type:a,value:" nor "},{type:b,tag:g,props:{},children:[{type:a,value:ad}]},{type:a,value:" will be modified (they are immutable), we can optimize the previous operation by simply creating another string record having the start index at the second cell of "},{type:b,tag:g,props:{},children:[{type:a,value:ad}]},{type:a,value:" and having a length of 5 instead of 7."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:b,tag:F,props:{alt:y,src:"\u002Fposts\u002Fstring3.JPEG"},children:[]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"From the user perspective, T will be a string with length 5 and with content \"hello\",  but no additional allocation will be necessary, greatly improving memory efficiency."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"In Rust, what we called \"string record\" is referred to as "},{type:b,tag:g,props:{},children:[{type:a,value:n}]},{type:a,value:" type, and represents a reference to a contiguous char array, along with its length. Technically, this is called a reference to a string slice."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Of course, this technique cannot be applied to every situation. For example, if we call the "},{type:b,tag:g,props:{},children:[{type:a,value:"to_uppercase()"}]},{type:a,value:" method, the resulting string will not be a different view of the same string, but instead, it will be an entirely different one. In this case, an additional allocation will be needed."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"The powerful aspect of &str types is that the location of the string content can vary based on the situation. It can reference a memory region on the heap, a location on the stack, or even a static portion of the executable itself."}]},{type:a,value:e},{type:b,tag:I,props:{id:R},children:[{type:b,tag:l,props:{href:"#string-literals",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:S}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"One thing that often confuses beginners are string literals. In particular, when you write the following code in Rust:"}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,w]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:a,value:" str1 "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:H}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"you are not allocating a string in the heap. Instead,  you're creating an immutable string literal, whose content is stored inside the binary itself. This is possible because its content is known at compile-time, which, on the other hand, is not the case with the following:"}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,w]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:a,value:" i "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"10"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:a,value:" str2 "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:" i"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"In this case, the string content is not known at compile-time, so it causes an allocation on the heap, creating the string “10”."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"If we now analyze the type of the two previous variables, we notice that "},{type:b,tag:g,props:{},children:[{type:a,value:"str1"}]},{type:a,value:af},{type:b,tag:g,props:{},children:[{type:a,value:n}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:"str2"}]},{type:a,value:af},{type:b,tag:g,props:{},children:[{type:a,value:z}]},{type:a,value:". This is because the first string does not allocate any memory on the heap, whereas the second one does. As a rule of thumb,  anytime you allocate new memory you will need to use the String type, whereas if you only need a different view of an existing string, the &str type will be more adequate."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Technically, the "},{type:b,tag:g,props:{},children:[{type:a,value:z}]},{type:a,value:" type is an "},{type:b,tag:"em",props:{},children:[{type:a,value:"owned"}]},{type:a,value:" type, whereas the "},{type:b,tag:g,props:{},children:[{type:a,value:n}]},{type:a,value:" type is not. To really understand the difference between the two, you will need to grasp the concepts of ownership and borrowing. If you need some help, "},{type:b,tag:l,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=N2SgcDO0QL4",rel:[J,K,L],target:M},children:[{type:a,value:"I made a video"}]},{type:a,value:" on the topic a few months ago."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"In a nutshell, when you allocate some memory on the heap, there must be a way to free it when not used anymore, otherwise, you’ll produce a memory leak. In Java or Go, that’s the responsibility of the garbage collector, but in Rust, the ownership system takes care of freeing the memory once the owner goes out of scope."}]},{type:a,value:e},{type:b,tag:I,props:{id:T},children:[{type:b,tag:l,props:{href:"#tips-for-beginners",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:U}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"Now that you know the basics, let me give you a couple of tips:"}]},{type:a,value:e},{type:b,tag:ag,props:{id:"convert-between-the-two"},children:[{type:b,tag:l,props:{href:"#convert-between-the-two",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:"Convert between the two"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"You can easily convert between the two by using the "},{type:b,tag:g,props:{},children:[{type:a,value:"to_string()"}]},{type:a,value:" method and the borrow operator (&), such as:"}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,w]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:"\u002F\u002F Start from a string literal &str"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:a,value:" foo "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:"\u002F\u002F Convert to a owned String"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:a,value:" bar "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:" foo"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,N]},children:[{type:a,value:"\u002F\u002F Get the string literal &str of bar"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:x}]},{type:a,value:" car "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:O}]},{type:a,value:"bar\n"}]}]}]},{type:a,value:e},{type:b,tag:ag,props:{id:"strings-in-function-signatures"},children:[{type:b,tag:l,props:{href:"#strings-in-function-signatures",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:"Strings in function signatures"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"When you are designing function signatures, keep in mind that generally, strings are passed as "},{type:b,tag:g,props:{},children:[{type:a,value:n}]},{type:a,value:" slices and returned as owned Strings, such as:"}]},{type:a,value:e},{type:b,tag:s,props:{className:[t]},children:[{type:b,tag:u,props:{className:[v,w]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"fn"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"function-definition",D]},children:[{type:a,value:"concatenate_strings"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:B}]},{type:a,value:"s1"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ah}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:P}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ah}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"-\u003E"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"class-name"]},children:[{type:a,value:z}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"{"}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"return"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"macro","property"]},children:[{type:a,value:"format!"}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\"{}{}\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:P}]},{type:a,value:" s1"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:P}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:";"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"}"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"This prevents unnecessary copies when passing the parameters, but also guarantees that the output string will live long enough to be received by the calling code. Moreover, it allows the function to accept both string slices and owned Strings. Of course, there are many exceptions to this rule, but for most cases, and most importantly until you really understand ownership and borrowing, this approach will serve you well."}]},{type:a,value:e},{type:b,tag:I,props:{id:V},children:[{type:b,tag:l,props:{href:"#conclusion",ariaHidden:o,tabIndex:p},children:[{type:b,tag:c,props:{className:[q,r]},children:[]}]},{type:a,value:W}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"This was just a quick introduction to Rust strings, thank you for reading!"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"If you liked the article, follow me on "},{type:b,tag:l,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fc\u002FFedericoTerzi",rel:[J,K,L],target:M},children:[{type:a,value:"Youtube"}]},{type:a,value:" or "},{type:b,tag:l,props:{href:"https:\u002F\u002Ftwitter.com\u002Fterzi_federico",rel:[J,K,L],target:M},children:[{type:a,value:"Twitter"}]},{type:a,value:"!"}]}]},excerpt:{type:X,children:[{type:b,tag:f,props:{},children:[{type:a,value:Y},{type:b,tag:g,props:{},children:[{type:a,value:z}]},{type:a,value:Z},{type:b,tag:g,props:{},children:[{type:a,value:n}]},{type:a,value:_}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2021-01-01-understanding-strings-in-rust",extension:".md",createdAt:ak,updatedAt:ak},header:null}],fetch:{},mutations:void 0}}("text","element","span","token","\n","p","code","punctuation"," ","operator","keyword","a","=","&str","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","language-rust","line-numbers","let","Memory model","String","string","(",")","function",3,"img",".","\"hello\"","h3","nofollow","noopener","noreferrer","_blank","comment","&",",","memory-model","string-literals","String literals","tips-for-beginners","Tips for beginners","conclusion","Conclusion","root","When I started learning Rust a couple of years ago, the first thing that really got me thinking was strings. You see, in Rust, there are 2 string types: the "," and the "," types.","var s ","\" hello \"","li","trim","S","to_string"," is of type ","h4",":","str"," s2","2024-01-19T14:35:25.548Z")));