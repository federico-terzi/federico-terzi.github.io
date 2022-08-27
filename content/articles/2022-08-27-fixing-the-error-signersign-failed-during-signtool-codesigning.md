---
layout: post
title: "Fixing “Error: SignerSign() failed.” during SignTool code-signing"
author: Federico Terzi
date: 2022-08-27
categories: code sign code-signing signtool sign windows certificate sectigo
social_title: "Fixing “Error: SignerSign() failed.” during SignTool code-signing"

---

Today I was working on the automatic code-signing CI for [Espanso](https://espanso.org). As suggested by various articles, I went ahead and tried to sign the executable with this `signtool` command:

<!--more-->

```bash
signtool.exe sign /v /p <your PFX password> /ac 'CROSS_SIGNED_SECTIGO_CA_HERE' /f YOUR_PFX_HERE /tr http://timestamp.sectigo.com/rfc3161 'FULL_PATH_TO_FILE_TO_SIGN'
```


Unfortunately, I was greeted with this cryptic error message:


```bash
SignTool Error: An unexpected internal error has occurred.
Error information: "Error: SignerSign() failed." (-2146869243/0x80096005)
```


After a bit of investigation, it turned out to be due to a missing flag in the `signtool` invocation:


```bash
/td sha256
```


This flag instructs `signtool` to use a SHA256 digest for the RFC 3161 timestamp server, solving the above problem.


So in the end, I got it working with the following command:


```bash
signtool.exe sign /v /p <your PFX password> /ac 'CROSS_SIGNED_SECTIGO_CA_HERE' /f YOUR_PFX_HERE /td sha256 /tr http://timestamp.sectigo.com/rfc3161 'FULL_PATH_TO_FILE_TO_SIGN'
```


PS: I would also suggest adding the `/fd SHA256` flag, as that instructs `signtool` to use the stronger SHA256 and not SHA1 for the actual signature.


