__NUXT_JSONP__("/blog/how-to-publish-your-rust-project-on-homebrew", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay){return {data:[{article:{slug:"2019-10-06-how-to-publish-your-rust-project-on-homebrew",description:"Last week I finally released the first version of espanso, a cross-platform, system-wide Text Expander written in Rust.",layout:"post",title:"How to Publish your Rust project on Homebrew",author:"Federico Terzi",date:"2019-10-06T00:00:00.000Z",categories:"rust homebrew macos publish project cli app github manager",toc:[{id:N,depth:w,text:O},{id:P,depth:w,text:Q},{id:R,depth:w,text:S},{id:T,depth:w,text:U},{id:V,depth:w,text:W},{id:X,depth:w,text:Y}],body:{type:Z,children:[{type:b,tag:g,props:{},children:[{type:a,value:_},{type:b,tag:h,props:{href:G,rel:[m,n,o],target:p},children:[{type:a,value:E}]},{type:a,value:$},{type:b,tag:F,props:{},children:[{type:a,value:aa}]},{type:a,value:ab}]},{type:a,value:c},{type:a,value:c},{type:b,tag:"figure",props:{},children:[{type:a,value:H},{type:b,tag:ac,props:{src:"\u002Fassets\u002Fimages\u002Fespanso.gif"},children:[]},{type:a,value:H},{type:b,tag:"figcaption",props:{},children:[{type:a,value:"Example of espanso in action."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"I've built many projects in my life, but this time I wanted to create something people would actually use. Therefore, one of the key aspects to consider was the installation process: "},{type:b,tag:t,props:{},children:[{type:a,value:"it has to be easy"}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Being a cross-platform tool, I had to consider the best installation method for each platform and when it comes to "},{type:b,tag:t,props:{},children:[{type:a,value:"macOS"}]},{type:a,value:", the de-facto way to install a cli tool is by using "},{type:b,tag:h,props:{href:"https:\u002F\u002Fbrew.sh\u002F",rel:[m,n,o],target:p},children:[{type:a,value:"Homebrew"}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"In this article I will show you the publishing process I used for my tool,  "},{type:b,tag:h,props:{href:G,rel:[m,n,o],target:p},children:[{type:a,value:E}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:y,props:{id:N},children:[{type:b,tag:h,props:{href:"#preparing-the-binary",ariaHidden:z,tabIndex:A},children:[{type:b,tag:d,props:{className:[B,C]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"In order to create an Homebrew package, you have to provide a "},{type:b,tag:t,props:{},children:[{type:a,value:"binary executable"}]},{type:a,value:". Luckly for us, Rust makes it super easy.  In your project directory, the following command will create an optimized, release-ready, version of your tool:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"cargo build --release\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You will now have a binary executable in the "},{type:b,tag:f,props:{},children:[{type:a,value:"target\u002Frelease\u002F"}]},{type:a,value:" directory, in my case:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"target\u002Frelease\u002Fespanso\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Homebrew expects a "},{type:b,tag:t,props:{},children:[{type:a,value:"TAR archive"}]},{type:a,value:", and it's easy to create one using the commands:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"cd target\u002Frelease\ntar -czf espanso-mac.tar.gz espanso\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"At this point, you should have the "},{type:b,tag:f,props:{},children:[{type:a,value:I}]},{type:a,value:" archive in your "},{type:b,tag:f,props:{},children:[{type:a,value:"target\u002Frelease"}]},{type:a,value:" directory."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"We will later need the "},{type:b,tag:t,props:{},children:[{type:a,value:"SHA256 hash"}]},{type:a,value:" of the archive, so let's calculate it using:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"shasum -a 256 espanso-mac.tar.gz\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:ad}]},{type:a,value:c},{type:b,tag:y,props:{id:P},children:[{type:b,tag:h,props:{href:"#uploading-to-github-releases",ariaHidden:z,tabIndex:A},children:[{type:b,tag:d,props:{className:[B,C]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Homebrew requires a "},{type:b,tag:t,props:{},children:[{type:a,value:"URL to download your binary"}]},{type:a,value:". There are plenty of ways to host your executable, but for my project I used "},{type:b,tag:h,props:{href:"https:\u002F\u002Fhelp.github.com\u002Fen\u002Farticles\u002Fcreating-releases",rel:[m,n,o],target:p},children:[{type:a,value:"GitHub Releases"}]},{type:a,value:", mainly because it's free and easy to use."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Open your project's GitHub page, navigate to the "},{type:b,tag:F,props:{},children:[{type:a,value:"Releases"}]},{type:a,value:" section and then click on "},{type:b,tag:F,props:{},children:[{type:a,value:"Create a new release"}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Insert a "},{type:b,tag:F,props:{},children:[{type:a,value:"tag version"}]},{type:a,value:", such as "},{type:b,tag:f,props:{},children:[{type:a,value:"v0.1.0"}]},{type:a,value:", a title and then drag the previously created archive ( in my case "},{type:b,tag:f,props:{},children:[{type:a,value:I}]},{type:a,value:" ) into the upload section. You should have something like this:"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:ac,props:{alt:"Github Release",src:"\u002Fposts\u002Fgithubrelease.png"},children:[]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Now click "},{type:b,tag:f,props:{},children:[{type:a,value:"Publish release"}]},{type:a,value:"   to complete the process."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"In the Release page, you'll need to grab the archive URL. Expand the "},{type:b,tag:f,props:{},children:[{type:a,value:"Assets"}]},{type:a,value:" section and copy the url of the "},{type:b,tag:f,props:{},children:[{type:a,value:I}]},{type:a,value:" archive you've just uploaded. In my case:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"https:\u002F\u002Fgithub.com\u002Ffederico-terzi\u002Fespanso\u002Freleases\u002Fdownload\u002Fv0.1.0\u002Fespanso-mac.tar.gz\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:ad}]},{type:a,value:c},{type:b,tag:y,props:{id:R},children:[{type:b,tag:h,props:{href:"#preparing-the-github-repository",ariaHidden:z,tabIndex:A},children:[{type:b,tag:d,props:{className:[B,C]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Homebrew offers a way to create third-party repositories, "},{type:b,tag:h,props:{href:"https:\u002F\u002Fdocs.brew.sh\u002FTaps",rel:[m,n,o],target:p},children:[{type:a,value:"Taps"}]},{type:a,value:".  In a nutshell, "},{type:b,tag:t,props:{},children:[{type:a,value:"Taps are just GitHub repositories"}]},{type:a,value:" with specific names and a few configuration files."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"We will need to create one to host our project. Go ahead and create a new "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fnew",rel:[m,n,o],target:p},children:[{type:a,value:"GitHub repository"}]},{type:a,value:", having the following name:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"homebrew-\u003Cprojectname\u003E\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:ae},{type:b,tag:f,props:{},children:[{type:a,value:"\u003Cprojectname\u003E"}]},{type:a,value:" is the name of your project. In my case:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"homebrew-espanso\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"After cloning your brand new repository on your local machine, you are ready for the next step."}]},{type:a,value:c},{type:b,tag:y,props:{id:T},children:[{type:b,tag:h,props:{href:"#preparing-the-formula",ariaHidden:z,tabIndex:A},children:[{type:b,tag:d,props:{className:[B,C]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You'll now need to create a  "},{type:b,tag:h,props:{href:"https:\u002F\u002Fdocs.brew.sh\u002FFormula-Cookbook",rel:[m,n,o],target:p},children:[{type:a,value:af}]},{type:a,value:" for your project, a very simple "},{type:b,tag:h,props:{href:"https:\u002F\u002Fwww.ruby-lang.org\u002Fen\u002F",rel:[m,n,o],target:p},children:[{type:a,value:"Ruby"}]},{type:a,value:" file containing the instructions to install your binary on the user computers. In fact, Ruby knowledge is "},{type:b,tag:t,props:{},children:[{type:a,value:"not"}]},{type:a,value:" required."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"In the cloned "},{type:b,tag:f,props:{},children:[{type:a,value:J}]},{type:a,value:" directory, we will need the following file structure:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"- Formula\u002F\n    - espanso.rb\n- README.md\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"So go ahead and create the "},{type:b,tag:f,props:{},children:[{type:a,value:af}]},{type:a,value:" directory, containing the "},{type:b,tag:f,props:{},children:[{type:a,value:ag}]},{type:a,value:" file ( using the name of your project )."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:ah},{type:b,tag:f,props:{},children:[{type:a,value:ag}]},{type:a,value:" file, paste the following content:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,u]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,K]},children:[{type:a,value:"# Documentation: https:\u002F\u002Fdocs.brew.sh\u002FFormula-Cookbook"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,K]},children:[{type:a,value:"#                https:\u002F\u002Frubydoc.brew.sh\u002FFormula"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,K]},children:[{type:a,value:"# PLEASE REMOVE ALL GENERATED COMMENTS BEFORE SUBMITTING YOUR PULL REQUEST!"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,v]},children:[{type:a,value:ai}]},{type:a,value:D},{type:b,tag:d,props:{className:[e,aj]},children:[{type:a,value:L}]},{type:a,value:D},{type:b,tag:d,props:{className:[e,ak]},children:[{type:a,value:al}]},{type:a,value:" Formula\n  desc "},{type:b,tag:d,props:{className:[e,r]},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:am}]}]},{type:a,value:"\n  homepage "},{type:b,tag:d,props:{className:[e,r]},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:an}]}]},{type:a,value:"\n  url "},{type:b,tag:d,props:{className:[e,r]},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:ao}]}]},{type:a,value:"\n  sha256 "},{type:b,tag:d,props:{className:[e,r]},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:ap}]}]},{type:a,value:"\n  version "},{type:b,tag:d,props:{className:[e,r]},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:aq}]}]},{type:a,value:"\n\n  "},{type:b,tag:d,props:{className:[e,v]},children:[{type:a,value:ar}]},{type:a,value:D},{type:b,tag:d,props:{className:[e,as]},children:[{type:b,tag:d,props:{className:[e,at]},children:[{type:a,value:au}]}]},{type:a,value:av},{type:b,tag:d,props:{className:[e,aw]},children:[{type:a,value:x}]},{type:a,value:ax},{type:b,tag:d,props:{className:[e,r]},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:ay}]}]},{type:a,value:H},{type:b,tag:d,props:{className:[e,v]},children:[{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,v]},children:[{type:a,value:M}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Let's analyze it step by step. In the first line you have to change "},{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:" with your projects name ( without spaces ):"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,u]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,v]},children:[{type:a,value:ai}]},{type:a,value:D},{type:b,tag:d,props:{className:[e,aj]},children:[{type:a,value:L}]},{type:a,value:D},{type:b,tag:d,props:{className:[e,ak]},children:[{type:a,value:al}]},{type:a,value:" Formula\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Then add a short description for your project:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,u]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"desc "},{type:b,tag:d,props:{className:[e,r]},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:am}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Then insert your project repository or website:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,u]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"homepage "},{type:b,tag:d,props:{className:[e,r]},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:an}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:ah},{type:b,tag:f,props:{},children:[{type:a,value:"url"}]},{type:a,value:" field insert the archive URL we obtained in the second section:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,u]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"url "},{type:b,tag:d,props:{className:[e,r]},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:ao}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"And then the archive SHA256 hash we calculated earlier:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,u]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"sha256 "},{type:b,tag:d,props:{className:[e,r]},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:ap}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Then insert your project version ( the same you used in the release tag ):"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,u]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"version "},{type:b,tag:d,props:{className:[e,r]},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:aq}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"And finally, change "},{type:b,tag:f,props:{},children:[{type:a,value:E}]},{type:a,value:" with your "},{type:b,tag:t,props:{},children:[{type:a,value:"binary executable filename"}]},{type:a,value:", obtained from the first section:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,u]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,v]},children:[{type:a,value:ar}]},{type:a,value:D},{type:b,tag:d,props:{className:[e,as]},children:[{type:b,tag:d,props:{className:[e,at]},children:[{type:a,value:au}]}]},{type:a,value:av},{type:b,tag:d,props:{className:[e,aw]},children:[{type:a,value:x}]},{type:a,value:ax},{type:b,tag:d,props:{className:[e,r]},children:[{type:b,tag:d,props:{className:[e,s]},children:[{type:a,value:ay}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,v]},children:[{type:a,value:M}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The last step is to "},{type:b,tag:t,props:{},children:[{type:a,value:"push"}]},{type:a,value:" the "},{type:b,tag:f,props:{},children:[{type:a,value:J}]},{type:a,value:" repo to GitHub:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"git add -A\ngit commit -m \"First release\"\ngit push\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Here you can check the "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Ffederico-terzi\u002Fhomebrew-espanso",rel:[m,n,o],target:p},children:[{type:a,value:J}]},{type:a,value:" repository."}]},{type:a,value:c},{type:b,tag:y,props:{id:V},children:[{type:b,tag:h,props:{href:"#installing-the-package",ariaHidden:z,tabIndex:A},children:[{type:b,tag:d,props:{className:[B,C]},children:[]}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"All right, if you followed me until here, your users are ready to install the package using Homebrew:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"brew tap federico-terzi\u002Fespanso\nbrew install espanso\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:ae},{type:b,tag:f,props:{},children:[{type:a,value:"federico-terzi\u002Fespanso"}]},{type:a,value:" is your GitHub username combined with the project name."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"As an example, let's say your username is "},{type:b,tag:f,props:{},children:[{type:a,value:"jon-snow"}]},{type:a,value:", your project is called "},{type:b,tag:f,props:{},children:[{type:a,value:"wolf"}]},{type:a,value:" and your "},{type:b,tag:f,props:{},children:[{type:a,value:"homebrew-wolf"}]},{type:a,value:" repository url is:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"https:\u002F\u002Fgithub.com\u002Fjon-snow\u002Fhomebrew-wolf\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"the users will install your package using:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"brew tap jon-snow\u002Fwolf\nbrew install wolf\n"}]}]}]},{type:a,value:c},{type:b,tag:y,props:{id:X},children:[{type:b,tag:h,props:{href:"#conclusion",ariaHidden:z,tabIndex:A},children:[{type:b,tag:d,props:{className:[B,C]},children:[]}]},{type:a,value:Y}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"This was a basic way to publish your package on Homebrew, but things can get much better. In fact, on "},{type:b,tag:h,props:{href:G,rel:[m,n,o],target:p},children:[{type:a,value:E}]},{type:a,value:" I "},{type:b,tag:t,props:{},children:[{type:a,value:"automated the whole process"}]},{type:a,value:" using "},{type:b,tag:h,props:{href:"https:\u002F\u002Fazure.microsoft.com\u002Fen-us\u002Fservices\u002Fdevops\u002Fpipelines\u002F",rel:[m,n,o],target:p},children:[{type:a,value:"Azure Pipelines"}]},{type:a,value:" so that everytime I push an update to the "},{type:b,tag:f,props:{},children:[{type:a,value:"master"}]},{type:a,value:" branch on GitHub, my project is automatically built, tested and published on Homebrew. Let me know if you're interested to know more about that :)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If you liked the article and want to stay up to date, follow me on "},{type:b,tag:h,props:{href:"https:\u002F\u002Ftwitter.com\u002Fterzi_federico",rel:[m,n,o],target:p},children:[{type:a,value:"Twitter"}]},{type:a,value:" or "},{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Ffederico-terzi",rel:[m,n,o],target:p},children:[{type:a,value:"GitHub"}]},{type:a,value:" :)"}]}]},excerpt:{type:Z,children:[{type:b,tag:g,props:{},children:[{type:a,value:_},{type:b,tag:h,props:{href:G,rel:[m,n,o],target:p},children:[{type:a,value:E}]},{type:a,value:$},{type:b,tag:F,props:{},children:[{type:a,value:aa}]},{type:a,value:ab}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2019-10-06-how-to-publish-your-rust-project-on-homebrew",extension:".md",createdAt:"2022-12-06T10:41:26.209Z",updatedAt:"2022-12-06T10:41:26.213Z"}}],fetch:{},mutations:void 0}}("text","element","\n","span","token","code","p","a","div","nuxt-content-highlight","pre","line-numbers","nofollow","noopener","noreferrer","_blank","language-text","string-literal","string","strong","language-ruby","keyword",3,".","h3","true",-1,"icon","icon-link"," ","espanso","em","https:\u002F\u002Fespanso.org","\n  ","espanso-mac.tar.gz","homebrew-espanso","comment","Espanso","end","preparing-the-binary","Preparing the binary","uploading-to-github-releases","Uploading to Github Releases","preparing-the-github-repository","Preparing the Github Repository","preparing-the-formula","Preparing the Formula","installing-the-package","Installing the Package","conclusion","Conclusion","root","Last week I finally released the first version of ",", a cross-platform, system-wide ","Text Expander"," written in Rust.","img","Save it somewhere, we will need it later.","Where ","Formula","espanso.rb","In the ","class","class-name","operator","\u003C","\"Cross-platform Text Expander written in Rust\"","\"https:\u002F\u002Fgithub.com\u002Ffederico-terzi\u002Fespanso\"","\"https:\u002F\u002Fgithub.com\u002Ffederico-terzi\u002Fespanso\u002Freleases\u002Flatest\u002Fdownload\u002Fespanso-mac.tar.gz\"","\"2473866b99eef9ea983200b7aac91592b938404ffaa1fb8c72beacb2ebd3203a\"","\"0.1.0\"","def","method-definition","function","install","\n    bin","punctuation","install ","\"espanso\"")));