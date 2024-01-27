__NUXT_JSONP__("/blog/automatic-code-signing-and-notarization-for-macos-apps-using-github-actions", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD){return {data:[{article:{slug:"2022-08-15-automatic-code-signing-and-notarization-for-macos-apps-using-github-actions",description:"After almost 3 years, we finally took the necessary steps to code-sign Espanso. This article covers the step I’ve taken to integrate the code-signing and notarization steps in our automatic CI flow. This process is built with GitHub Actions in mind, but you can easily port it to your CI provider of choice.",layout:"post",title:"Automatic Code-signing and Notarization for macOS apps using GitHub Actions",author:"Federico Terzi",date:"2022-08-15T00:00:00.000Z",categories:"ci github actions macos code sign signing notarize notarization automatic certificate",social_title:"Automatic Code-signing and Notarization for macOS apps",social_subtitle:"using GitHub Actions",toc:[{id:R,depth:C,text:S},{id:T,depth:C,text:U},{id:V,depth:C,text:W},{id:X,depth:C,text:Y},{id:Z,depth:C,text:_},{id:$,depth:C,text:aa},{id:ab,depth:C,text:ac}],body:{type:ad,children:[{type:b,tag:h,props:{},children:[{type:a,value:ae},{type:b,tag:k,props:{href:af,rel:[o,p,q],target:r},children:[{type:a,value:ag}]},{type:a,value:ah}]},{type:a,value:e},{type:a,value:e},{type:b,tag:H,props:{id:"prerequisites"},children:[{type:b,tag:k,props:{href:"#prerequisites",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:"Prerequisites"}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Having a paid "},{type:b,tag:k,props:{href:"https:\u002F\u002Fdeveloper.apple.com\u002Fprograms\u002F",rel:[o,p,q],target:r},children:[{type:a,value:"Apple Developer Program"}]},{type:a,value:" subscription. This costs about ~$99 per year depending on your country and is necessary to generate the required certificates."}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Having a CI that builds your final App bundle. This bundle can be generated in a lot of different ways, just keep in mind we’ll need the final "},{type:b,tag:i,props:{},children:[{type:a,value:"bundle.app"}]},{type:a,value:" inside the CI to perform the signing and notarization. This article won't cover the bundle generation, so please take care of that beforehand if you haven't already."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:H,props:{id:"generating-the-certificate"},children:[{type:b,tag:k,props:{href:"#generating-the-certificate",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:"Generating the Certificate"}]},{type:a,value:e},{type:b,tag:"blockquote",props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"If you have already generated a certificate for your app, feel free to skip this section"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"In order to sign the app, we need a valid certificate issued from Apple. You can issue one following these steps:"}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Navigate to the Apple Developer portal into the "},{type:b,tag:k,props:{href:"https:\u002F\u002Fdeveloper.apple.com\u002Faccount\u002Fresources\u002Fcertificates\u002Flist",rel:[o,p,q],target:r},children:[{type:a,value:"Certificates, Identifiers & Profiles section"}]},{type:a,value:" and select “Create a New Profile”"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"You’ll be asked to choose a certificate type, select “Developer ID Application” from the options and then continue"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:B,props:{alt:ai,src:"\u002Fposts\u002Fmacos-code-sign\u002FUntitled.png"},children:[]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:ai}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"For the “Developer ID Certificate Intermediary” choose "},{type:b,tag:i,props:{},children:[{type:a,value:"G2 Sub-CA (Xcode 11.4.1 or later)"}]},{type:a,value:" and keep this webpage open, we’ll get back to it later"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:B,props:{alt:"Certificate Intermediary selection",src:"\u002Fposts\u002Fmacos-code-sign\u002FUntitled%201.png"},children:[]}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Then, we need to generate a "},{type:b,tag:"em",props:{},children:[{type:a,value:"Certificate Signing Request (CSR)."}]},{type:a,value:" We can do so by opening the “Keychain Access” app on macOS, selecting "},{type:b,tag:i,props:{},children:[{type:a,value:"Certificate Assistant \u003E Request a Certificate From a Certificate Authority..."}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:B,props:{alt:"Generate a CSR",src:"\u002Fposts\u002Fmacos-code-sign\u002FUntitled%202.png"},children:[]}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"You’ll be prompted for some information, make sure to specify the same email you used for your paid Apple Developer subscription, then check the "},{type:b,tag:i,props:{},children:[{type:a,value:"Save to Disk"}]},{type:a,value:" option, and click "},{type:b,tag:i,props:{},children:[{type:a,value:"Continue"}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:B,props:{alt:"Certificate information",src:"\u002Fposts\u002Fmacos-code-sign\u002FScreenshot_2022-08-15_at_11.26.54.png"},children:[]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This will create a "},{type:b,tag:i,props:{},children:[{type:a,value:"CertificateSigningRequest.certSigningRequest"}]},{type:a,value:" file in your location of choice. Go back to the “Create a New Certificate” webpage we opened earlier and click on “Choose File”, selecting the certificate request file we just created. Finally, click “Continue”"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"On the Apple Developer portal, you should now see your new certificate. Download it and open it using the "},{type:b,tag:i,props:{},children:[{type:a,value:aj}]},{type:a,value:" app on your mac. It should look like this:"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:B,props:{alt:"Final certificate inside Keychain Access",src:"\u002Fposts\u002Fmacos-code-sign\u002FScreenshot_2022-08-15_at_11.39.43.png"},children:[]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Please note down the full name of the certificate (such as "},{type:b,tag:i,props:{},children:[{type:a,value:"Developer ID Application: Your Name (K1234)"}]},{type:a,value:", as we will need it later)"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This certificate is ready to be used locally, but we want to export it in a format that is usable inside an automated (and headless) CI environment. For this reason, we are going to use the same trick from "},{type:b,tag:k,props:{href:ak,rel:[o,p,q],target:r},children:[{type:a,value:"this great article"}]},{type:a,value:" by Localazy, exporting the certificate file and then encoding it as base64."}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Select both the certificate (Developer ID Application: …) and the private key (the item below), then right click and choose “Export 2 items…”"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"In the panel that opens up, select a target location for the certificate file and choose "},{type:b,tag:i,props:{},children:[{type:a,value:"Personal Information Exchange (.p12)"}]},{type:a,value:" format."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"You’ll be asked for a password, generate a strong one using your tool of choice and note it down, as we’ll need it in the upcoming steps"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Open a terminal, "},{type:b,tag:i,props:{},children:[{type:a,value:"cd"}]},{type:a,value:" into the directory in which you created the certificate file, and convert it into base64 using this command:"}]},{type:a,value:e},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,"language-bash"]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"base64 Certificates "},{type:b,tag:c,props:{className:[d,"operator"]},children:[{type:a,value:M}]},{type:a,value:" Certificates.base64\n"}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This command will create a new "},{type:b,tag:i,props:{},children:[{type:a,value:al}]},{type:a,value:" file with the certificate encoded as base64 string. Keep this file around, as we’ll need it when populating the GitHub Actions secrets."}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:H,props:{id:"gathering-the-notarization-information"},children:[{type:b,tag:k,props:{href:"#gathering-the-notarization-information",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:"Gathering the Notarization information"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Before diving into the GitHub Actions setup, we need to gather some more information for the notarization step:"}]},{type:a,value:e},{type:b,tag:D,props:{id:R},children:[{type:b,tag:k,props:{href:"#generating-an-app-specific-password",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:S}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"We need to generate an Apple’s "},{type:b,tag:k,props:{href:"https:\u002F\u002Fsupport.apple.com\u002Fen-us\u002FHT204397",rel:[o,p,q],target:r},children:[{type:a,value:"app-specific password"}]},{type:a,value:" for the notarization step:"}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Navigate and sign in to "},{type:b,tag:k,props:{href:"https:\u002F\u002Fappleid.apple.com\u002Faccount\u002Fhome",rel:[o,p,q],target:r},children:[{type:a,value:"appleid.apple.com"}]},{type:a,value:" using the same account as your paid Apple Developer subscription"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"On the "},{type:b,tag:k,props:{href:"https:\u002F\u002Fappleid.apple.com\u002Faccount\u002Fmanage",rel:[o,p,q],target:r},children:[{type:a,value:"Sign-in and Security page"}]},{type:a,value:", select “App-Specific Passwords”"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:B,props:{alt:"App-specific password",src:"\u002Fposts\u002Fmacos-code-sign\u002FUntitled%203.png"},children:[]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Then select “Generate App-Specific Password”, and give it a meaningful name, such as “Project CI Notarization”"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Then, enter your account password and finally “Continue”"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"You should now see a generated password, please note it down as we’ll need it later."}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:D,props:{id:T},children:[{type:b,tag:k,props:{href:"#getting-your-team-id",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:U}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Head over to the "},{type:b,tag:k,props:{href:"https:\u002F\u002Fdeveloper.apple.com\u002Faccount\u002F#!\u002Fmembership",rel:[o,p,q],target:r},children:[{type:a,value:"membership page"}]},{type:a,value:", logging in if necessary"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Inside the page, you should see a "},{type:b,tag:i,props:{},children:[{type:a,value:am}]},{type:a,value:" field. Note it down, as we will need it later"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:H,props:{id:"setting-up-the-github-actions-pipeline"},children:[{type:b,tag:k,props:{href:"#setting-up-the-github-actions-pipeline",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:"Setting up the GitHub Actions pipeline"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Now that we gathered all the necessary information, it’s time to set up the GitHub Actions steps that will code-sign and notarize our app."}]},{type:a,value:e},{type:b,tag:D,props:{id:V},children:[{type:b,tag:k,props:{href:"#setting-up-the-secrets",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:W}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Navigate to your GitHub project Settings \u003E Security \u003E Secrets \u003E Actions. Here we’ll need to register several secrets for the process to work correctly, so let’s start:"}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"PROD_MACOS_CERTIFICATE"}]},{type:a,value:" should contain the base64 of the certificate we generated earlier. In particular, you should paste the content of the "},{type:b,tag:i,props:{},children:[{type:a,value:al}]},{type:a,value:" file here"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"PROD_MACOS_CERTIFICATE_NAME"}]},{type:a,value:" should contain the full certificate name, such as "},{type:b,tag:i,props:{},children:[{type:a,value:"Developer ID Application: Your Name (K1234567)"}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"PROD_MACOS_CERTIFICATE_PWD"}]},{type:a,value:" should contain the password you choose when exporting the certificate from the "},{type:b,tag:i,props:{},children:[{type:a,value:aj}]},{type:a,value:" app"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:an}]},{type:a,value:" should contain your apple developer email, the same you use for the Apple Developer subscription"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:ao}]},{type:a,value:" should contain the app-specific password we generated earlier"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:ap}]},{type:a,value:" should contain the "},{type:b,tag:i,props:{},children:[{type:a,value:am}]},{type:a,value:" we got earlier from the membership page"}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"PROD_MACOS_CI_KEYCHAIN_PWD"}]},{type:a,value:" should contain a strong, randomly generated password. Feel free to use your tool of choice for this."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"If you did everything right, you should end up with these 7 secrets in your GitHub Actions:"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:B,props:{alt:"Github Secrets",src:"\u002Fposts\u002Fmacos-code-sign\u002FUntitled%204.png"},children:[]}]},{type:a,value:e},{type:b,tag:D,props:{id:X},children:[{type:b,tag:k,props:{href:"#defining-the-code-signing-step",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:Y}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Now that we have all our secrets in place, we are ready to define the code-signing step. For the sake of these examples, we assume that the app bundle will be placed in the "},{type:b,tag:i,props:{},children:[{type:a,value:aq}]},{type:a,value:" path inside the CI environment. Make sure to replace it with the appropriate location of your app."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This is what the GitHub Actions step should look like in the end, with comments explaining the various sections:"}]},{type:a,value:e},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,N]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:" Codesign app bundle\n  "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:as}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:" \n    "},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"MACOS_CERTIFICATE"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:" secrets.PROD_MACOS_CERTIFICATE "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"MACOS_CERTIFICATE_PWD"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:" secrets.PROD_MACOS_CERTIFICATE_PWD "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"MACOS_CERTIFICATE_NAME"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:" secrets.PROD_MACOS_CERTIFICATE_NAME "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"MACOS_CI_KEYCHAIN_PWD"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:" secrets.PROD_MACOS_CI_KEYCHAIN_PWD "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,av,P]},children:[{type:a,value:"\n    # Turn our base64-encoded certificate back to a regular .p12 file"}]},{type:a,value:"\n    \n    echo $MACOS_CERTIFICATE "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:" base64 "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"decode "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:" certificate.p12\n\n    "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# We need to create a new keychain, otherwise using the certificate will prompt"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# with a UI dialog asking for the certificate password, which we can't"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# use in a headless CI environment"}]},{type:a,value:"\n    \n    security create"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"p \"$MACOS_CI_KEYCHAIN_PWD\" build.keychain \n    security default"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"s build.keychain\n    security unlock"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"p \"$MACOS_CI_KEYCHAIN_PWD\" build.keychain\n    security import certificate.p12 "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"k build.keychain "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"P \"$MACOS_CERTIFICATE_PWD\" "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"T \u002Fusr\u002Fbin\u002Fcodesign\n    security set"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"partition"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"list "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"S apple"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"tool"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aw}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"s "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"k \"$MACOS_CI_KEYCHAIN_PWD\" build.keychain\n\n    "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# We finally codesign our app bundle, specifying the Hardened runtime option"}]},{type:a,value:"\n    \n    \u002Fusr\u002Fbin\u002Fcodesign "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"force "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"s \"$MACOS_CERTIFICATE_NAME\" "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"options runtime target\u002Fmac\u002FEspanso.app "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"v\n"}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"A note before proceeding further:"}]},{type:a,value:e},{type:b,tag:A,props:{},children:[{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Specifying the "},{type:b,tag:i,props:{},children:[{type:a,value:"--options runtime"}]},{type:a,value:" flag for the "},{type:b,tag:i,props:{},children:[{type:a,value:ay}]},{type:a,value:" command enables the "},{type:b,tag:k,props:{href:az,rel:[o,p,q],target:r},children:[{type:a,value:"Hardened Runtime"}]},{type:a,value:" for our app. This is necessary to pass the following notarization step (otherwise it fails when notarizing), but this might interfere with your app, as it disables JIT and other dynamic features. If you need them, you’ll need to specify the exceptions in your app’s entitlement file, as explained in the "},{type:b,tag:k,props:{href:az,rel:[o,p,q],target:r},children:[{type:a,value:"hardened runtime"}]},{type:a,value:" documentation."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:D,props:{id:Z},children:[{type:b,tag:k,props:{href:"#defining-the-notarization-step",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:_}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"After the code-signing step, our app is ready to be Notarized, which is necessary to prevent macOS from showing a scary warning to our users when opening the app."}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"The GitHub Action step should look like the following. This again assumes that the app bundle is located in the "},{type:b,tag:i,props:{},children:[{type:a,value:aq}]},{type:a,value:" path, so adapt it accordingly:"}]},{type:a,value:e},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,N]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"\"Notarize app bundle\""}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:as}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:" secrets.PROD_MACOS_NOTARIZATION_APPLE_ID "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:" secrets.PROD_MACOS_NOTARIZATION_TEAM_ID "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:t}]},{type:a,value:" secrets.PROD_MACOS_NOTARIZATION_PWD "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,av,P]},children:[{type:a,value:"\n    # Store the notarization credentials so that we can prevent a UI password dialog\n    # from blocking the CI"}]},{type:a,value:"\n\n    echo \"Create keychain profile\"\n    xcrun notarytool store"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"credentials \"notarytool"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"id \"$PROD_MACOS_NOTARIZATION_APPLE_ID\" "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"team"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"id \"$PROD_MACOS_NOTARIZATION_TEAM_ID\" "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"password \"$PROD_MACOS_NOTARIZATION_PWD\"\n\n    "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# We can't notarize an app bundle directly, but we need to compress it as an archive."}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# Therefore, we create a zip file containing our app bundle, so that we can send it to the"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# notarization service"}]},{type:a,value:"\n\n    echo \"Creating temp notarization archive\"\n    ditto "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"c "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"k "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"keepParent \"target\u002Fmac\u002FEspanso.app\" \"notarization.zip\"\n\n    "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# Here we send the notarization request to the Apple's Notarization service, waiting for the result."}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# This typically takes a few seconds inside a CI environment, but it might take more depending on the App"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# characteristics. Visit the Notarization docs for more information and strategies on how to optimize it if"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# you're curious"}]},{type:a,value:"\n\n    echo \"Notarize app\"\n    xcrun notarytool submit \"notarization.zip\" "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"wait\n\n    "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# Finally, we need to \"attach the staple\" to our executable, which will allow our app to be"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"# validated by macOS even when an internet connection is not available."}]},{type:a,value:"\n    echo \"Attach staple\"\n    xcrun stapler staple \"target\u002Fmac\u002FEspanso.app\"\n"}]}]}]},{type:a,value:e},{type:b,tag:D,props:{id:$},children:[{type:b,tag:k,props:{href:"#bonus-troubleshooting-notarization-issues",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:aa}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"While you are testing the notarization process, it might happen that the above GitHub Action step fails, with an error like:"}]},{type:a,value:e},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,N]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"Current status"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:" Invalid"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"..."}]},{type:a,value:".Processing complete\n  "},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"id"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:" \u003CRANDOM"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,m,n]},children:[{type:a,value:"status"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:" Invalid\n"}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"In these cases, you can view the notarization logs by using the following command (replacing "},{type:b,tag:i,props:{},children:[{type:a,value:"\u003CRANDOM-ID\u003E"}]},{type:a,value:" with the actual one, which you can see in the step logs)"}]},{type:a,value:e},{type:b,tag:I,props:{className:[J]},children:[{type:b,tag:K,props:{className:[L,N]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"xcrun notarytool log \u003CRANDOM"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:g}]},{type:a,value:"profile\"\n"}]}]}]},{type:a,value:e},{type:b,tag:H,props:{id:"conclusion"},children:[{type:b,tag:k,props:{href:"#conclusion",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:"Conclusion"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Your app should now be fully code-signed and notarized, great job! As a result, no more scary warnings will be shown to your users:"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:B,props:{alt:"Warnings before and after",src:"\u002Fposts\u002Fmacos-code-sign\u002FUntitled%205.png"},children:[]}]},{type:a,value:e},{type:b,tag:D,props:{id:ab},children:[{type:b,tag:k,props:{href:"#acknowledgments",ariaHidden:w,tabIndex:x},children:[{type:b,tag:c,props:{className:[y,z]},children:[]}]},{type:a,value:ac}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"This article wouldn’t have been possible without "},{type:b,tag:k,props:{href:ak,rel:[o,p,q],target:r},children:[{type:a,value:"this awesome article"}]},{type:a,value:" by Localazy for the code-signing steps and "},{type:b,tag:k,props:{href:"https:\u002F\u002Fgithub.com\u002Fakeru-inc\u002Fxcnotary\u002Fissues\u002F22#issuecomment-1179170957",rel:[o,p,q],target:r},children:[{type:a,value:"this GitHub comment"}]},{type:a,value:" for the Notarization part, kudos to "},{type:b,tag:k,props:{href:"https:\u002F\u002Ftwitter.com\u002Fhonzabilek4",rel:[o,p,q],target:r},children:[{type:a,value:"Jan Bílek"}]},{type:a,value:" and "},{type:b,tag:k,props:{href:"https:\u002F\u002Fgithub.com\u002Fbradking",rel:[o,p,q],target:r},children:[{type:a,value:"Brad King"}]},{type:a,value:"!"}]}]},excerpt:{type:ad,children:[{type:b,tag:h,props:{},children:[{type:a,value:ae},{type:b,tag:k,props:{href:af,rel:[o,p,q],target:r},children:[{type:a,value:ag}]},{type:a,value:ah}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2022-08-15-automatic-code-signing-and-notarization-for-macos-apps-using-github-actions",extension:".md",createdAt:"2024-01-27T18:41:00.399Z",updatedAt:"2024-01-27T18:41:00.403Z"},header:null}],fetch:{},mutations:void 0}}("text","element","span","token","\n","punctuation","-","p","code","li","a",":","key","atrule","nofollow","noopener","noreferrer","_blank","comment","{","}","\n    ","true",-1,"icon","icon-link","ul","img",2,"h2"," "," $","\n  ","h1","div","nuxt-content-highlight","pre","line-numbers","\u003E","language-yaml","|","string","keychain ","generating-an-app-specific-password","Generating an app-specific password","getting-your-team-id","Getting your Team ID","setting-up-the-secrets","Setting up the Secrets","defining-the-code-signing-step","Defining the Code-signing step","defining-the-notarization-step","Defining the Notarization step","bonus-troubleshooting-notarization-issues","Bonus: troubleshooting Notarization issues","acknowledgments","Acknowledgments","root","After almost 3 years, we finally took the necessary steps to code-sign ","https:\u002F\u002Fespanso.org\u002F","Espanso",". This article covers the step I’ve taken to integrate the code-signing and notarization steps in our automatic CI flow. This process is built with GitHub Actions in mind, but you can easily port it to your CI provider of choice.","Selecting the right option from the “Create a New Certificate” section","Keychain Access","https:\u002F\u002Flocalazy.com\u002Fblog\u002Fhow-to-automatically-sign-macos-apps-using-github-actions","Certificates.base64","Team ID","PROD_MACOS_NOTARIZATION_APPLE_ID","PROD_MACOS_NOTARIZATION_PWD","PROD_MACOS_NOTARIZATION_TEAM_ID","target\u002Fmac\u002FEspanso.app","name","# Extract the secrets we defined earlier as environment variables","env","run","scalar",",","apple","codesign","https:\u002F\u002Fdeveloper.apple.com\u002Fdocumentation\u002Fsecurity\u002Fhardened_runtime","profile\" ","keychain","profile \"notarytool","ID")));