---
layout: post
title: "Fixing the “Expecting: TRUSTED CERTIFICATE” error with Sectigo certificates"
author: Federico Terzi
date: 2022-08-20
categories: digital certificates certificate sectigo comodo code sign windows openssl
social_title: "Fixing the “Expecting: TRUSTED CERTIFICATE” error with Sectigo certificates"
---

The other day, I finally received the code-signing certificate from Sectigo. In the confirmation email, they explained the steps to download the certificate, and after following them, I found myself with a `user.crt` file.

<!--more-->

Firstly, I wanted to make sure that the certificate matched my private key, so I tried the steps explained in [this Comodo article](https://support.comodo.com/index.php?/Knowledgebase/Article/View/684/17/how-do-i-verify-that-a-private-key-matches-a-certificate-openssl).


I started by getting the private key’s modulus hash with:


```javascript
openssl rsa -modulus -noout -in private.key | openssl md5
```


Then, I tried doing the same with the certificate:


```javascript
openssl x509 -modulus -noout -in user.crt | openssl md5
```


Ideally, the two output would match, and that would indicate a correct certificate/private key pair.


Unfortunately, the second command crashed with this message:


```javascript
unable to load certificate
34359836736:error:0909006C:PEM routines:get_name:no start line:crypto/pem/pem_lib.c:745:Expecting: TRUSTED CERTIFICATE
```


After a bit of researching, I found out that the `user.crt` file downloaded from Sectigo was not in the correct `CRT` format. Luckily, the solution was converting the certificate to the correct one, as explained in [this Stackoverflow question](https://stackoverflow.com/questions/36565316/ssl-unable-to-load-certificate/51290883#51290883), with:


```javascript
openssl x509 -inform DER -in user.crt -out certificate.crt
```


After this command, OpenSSL produced a new `certificate.crt` file with the correct CRT format, which we could then use:


```javascript
openssl x509 -modulus -noout -in certificate.crt | openssl md5
```


Luckily, the hash of the private key’s modulo was equal to the certificate one, so we had a matching pair!


The same workaround is likely to work with Comodo certificates.


Up next: it’s finally time to code-sign [Espanso](https://espanso.org/) on Windows


