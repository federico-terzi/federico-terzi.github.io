---
layout: post
title:  "Rust vs C++, which is better and why?"
author: Federico Terzi
date:   2021-05-04
categories: rust cpp c comparison between difference similarity pro cons advantages
---

This question comes up a lot lately, especially when considering if learning Rust is worth it or not, and so I thought it could be a wonderful opportunity to write a new article, discussing the differences between the two, as well as what they share in common.

## Similarities

Both Rust and C++ are system programming languages, which means they can be used to write low-level code like kernels and firmware for microcontrollers. But compared with C, they offer a lot of abstractions that make it possible to go high-level as well, for example, writing games and web applications. 

Another similarity is that neither of them uses a garbage collector to manage memory, which makes the code much more predictable, efficient, and in many cases faster. Of course, if you ever used C, you will know that managing memory yourself is hard. Besides the cognitive overhead, you are also running the risk of causing segmentation faults and undefined behaviors. 

## Memory and Thread safety

For this reason, modern C++ introduced concepts like smart pointers as a way to mitigate those memory-related bugs, but despite the significant improvements, they are limited in the number of guarantees they can offer. Rust takes it a step further and introduces the borrow checker, a component bundled within the compiler itself that makes sure that a reference does not outlive the data they refer to, preventing entire classes of memory unsafety bugs.

Another big selling point for Rust is its rich type system, which makes it possible to prevent data races at compile time. It does so by introducing two special traits, Sync and Send, which are used by the compiler to determine whether a multi-threaded operation is safe or not. And while sharing some memory between threads is possible in Rust, the compiler will stop you from building a program that does so unsafely, preventing data races even before the program starts. For example, if you want to mutate a variable from multiple threads, the compiler will require you to wrap it with a Mutex or something equivalent, because in general, mutating an unsynchronized variable from multiple threads is unsafe, unless a synchronization primitive or atomic operation is used.

## Unsafe Rust

Up to this point, we discussed the features of the so-called “safe Rust”, which provides guarantees like memory safety and prevents undefined behavior, but there is also another “version” of the language known as unsafe Rust, which basically gives you superpowers at the price of losing all those safety guarantees. 

Are you wondering why this is needed? Well, there are mainly two reasons: if you want to interact with the low-level aspects of the operating system or hardware, those operations are inherently unsafe, so the “safe Rust” compiler, which is the one that tries to give you guarantees, is not able to do so. Therefore, if you still want to execute them, you have to explicitly tell the compiler to trust you and give up those safety guarantees, entering the “unsafe” side of Rust. 

The other reason is that when analyzing the code, the compiler is very conservative. From a guarantees point of view, it’s much better to block a valid program than to make an incorrect one pass the compilation step. Thus, there are times in which we might want to bypass those checks, and in order to do so, we need to enter the “unsafe” side as well.

In a way, unsafe Rust and C++ are very similar. The main difference is that Rust programmers usually avoid the “unsafe” side as much as possible unless interfacing with the low-level aspects of the operating systems or when absolutely certain that an operation is correct, and this greatly reduces the surface for memory problems.

## Package management and ecosystem

An area in which Rust is arguably better than C++ is package management. If you have ever worked with Python or JavaScript you will feel right at home with cargo, the official Rust package manager. Installing a package is just a matter of adding a line into cargo.toml file, whereas in C++ using an external library can be a huge pain, especially if targeting multiple operating systems. There have been some attempts to bring modern package management to C++, such as Conan and vcpkg, but they are far from being standardized or easy to use as cargo.

With that being said, the C++ ecosystem is huge, much bigger than the Rust counterpart, as the former has been around for multiple decades. In other words, there are many more libraries for C++ than for Rust, with the latter sometimes lacking a suitable one.

The good news is that Rust has a very good Foreign Function Interface, which means you can interface with C code very easily from Rust, and thus, also interface with C++ libraries by exposing a C API from them. Unfortunately, this is not always possible, especially in complex cases, but there are some ongoing attempts to make creating bindings easier. An example is the autocxx library, which is being developed by the Google Chrome team to investigate whether parts of the browser could be developed using Rust in the future.

## Macros

Another interesting difference between the two languages is the macro system, which in Rust is much more powerful and safer. First of all, Rust ships with two kinds of macros: declarative and procedural. The former type is similar to the traditional C/C++ macros, with the difference that macros are _hygenic_, meaning that they cannot interfere with variables outside their scope and therefore don’t cause any unwanted side effects. On the other hand, procedural macros are completely different, much more powerful and also complex. They can be basically thought of as compiler plugins that receive the program syntax tree as input, manipulate it, and then return the enriched syntax tree as output. This makes it possible to create annotations, similarly to Java, that enrich the code at compile time.

## Conclusion

To conclude, which of the two languages is better? As always, it depends! But these are the most important takeaways:

Rust is likely to be the future of system programming, and the proof is that many of the big players (Microsoft, Apple, Google) are moving in that direction, gradually integrating Rust with their products. Don’t get me wrong, C++ is far from being dead and is not going away anytime soon due to the incredibly vast amount of legacy code built with it, but an increasing number of companies are choosing Rust over C++ for new products.

My theory is that in 10-years’ time, most C++ jobs will be focused on maintaining legacy software rather than creating new products. But of course, that’s only my opinion and I might be wrong :)

If you liked the article, you can follow me on [Twitter](https://twitter.com/terzi_federico) or [Youtube](https://www.youtube.com/c/FedericoTerzi)!
