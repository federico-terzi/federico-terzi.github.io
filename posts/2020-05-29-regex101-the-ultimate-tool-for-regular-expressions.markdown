---
layout: post
title:  "Regex101 - The Ultimate Tool for Regular Expressions"
author: Federico Terzi
image: /assets/images/regex.png
date:   2020-05-29
categories: regex tutorial visual debugger regex101 regular expression
---
If you've been programming for a while, you will surely know how useful **regular expressions** can be when dealing with text.

You may want to validate a string (such as checking whether an email field is valid) or extract some information from formatted text. In both cases, building the right regex can take many attempts.

Today I'm going to introduce you to an incredibly useful tool called [Regex101](https://regex101.com/), which makes working with Regexes a breeze.

## Validating a Regex
As an example, let's create a very simple regex to validate email addresses. Please note that this is only a toy example, as [validating email addresses is harder than it seems](https://www.regular-expressions.info/email.html).

We consider the following 5 input strings:

```
example@example.com
example.com
example@
john@company.net
info@example
```

As you can already tell, only the first and fourth addresses are correct. 
A first attempt would be using the `[a-zA-Z]+\@[a-zA-Z]+\.[a-z]+` Regex (which doesn't account for many things, but for this example is enough).

Open [Regex101](https://regex101.com/) and paste the input in the *TEST STRING* field, then type the regex on the *REGULAR EXPRESSION* field.
As a result, we will see:

![Validation Regex](/assets/images/validation-regex.png)

Regex101 highlighted the lines that matched our regex, which makes experimenting with it a breeze! That said, this is just the tip of the iceberg.

## Extracting data
Another common task involves extracting a substring (group) from a formatted text and this is one of the areas in which Regex101 shines.

Let's start from another example, a simple CSV formatted list of entries:

```
John;Snow;5
Eddard;Stark;3
Tyrion;Lannister;6
```

We now want to extract the name of each character,  and to do that we can use a simple regex:

```
^([a-zA-Z]+);
```

Typing this regex on Regex101 along with the example produces the following result:

![Extracting Data Regex 1](/assets/images/extracting-data-regex1.png)

As you can see, the names are highlighted. But the most important thing can be found on the right side:

![Extracting Data Regex 2](/assets/images/extracting-data-regex2.png)

All the group contents are extracted and displayed in a very convenient way, making working with them a piece of cake!

## Substitution
You may even want to take it a step further, extracting the content of a group and *replacing* it with something else. With Regex101 you can indeed do that by opening the *SUBSTITUTION* panel (on the bottom) and typing your replace string:

![Replace Regex 1](/assets/images/replace-regex-1.png)

Moreover, if you use the `\1` operators, we can also restructure the lines completely. Change the original regex as follows:

```
^([a-zA-Z]+);.*
```

Then, in the `SUBSTITUTION` field, type:

```
Hello $1
```

The result is:

![Substitution Regex 2](/assets/images/substitution-regex-2.png)

You have no idea how many times this feature saved my day (which by the way is also available in most advanced text editors, such as Sublime Text).

## Code generation

Another very useful feature is the automatic *code generation*, available for a ton of languages out of the box. By clicking on the `Code Generation` tab, we can access a section that will generate the regex boilerplate for us, so that we can use it in our programs/scripts with minimal effort:

![Code Generator](/assets/images/code-generator-regex.png)

## Conclusion

This was just a quick introduction to Regex101, thank you for reading through!

If you want to stay updated with those neat developer tricks and tools, follow me on [Youtube](https://www.youtube.com/c/FedericoTerzi) or [Twitter](https://twitter.com/terzi_federico)!