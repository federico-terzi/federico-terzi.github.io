---
layout: post
title:  "Understanding Strings in Rust"
author: Federico Terzi
image: /assets/images/ruststring.png
date:   2021-01-01
categories: strings str rust tutorial guide understand understanding ownership
---
When I started learning Rust a couple of years ago, the first thing that really got me thinking was strings. You see, in Rust, there are 2 string types: the `String` and the `&str` types.

As you go on with examples and tutorials, you see that both of them are thoroughly used, so my natural question was: when should I use one over the other?

In this article, we are going to explore the differences between the two, but first, we will need to discuss the way strings are kept in memory.

## Memory model

Let's first start with a basic example (don’t pay attention to the language itself, the following considerations apply to Python, Go, Java, and many others). We want to create a string surrounded by spaces, such as:

```rust
var s = " hello "
```

From a memory standpoint, the situation is characterized by 2 memory entities:
* A memory region in the heap containing the actual string content
* A string record on the stack containing the memory location of the first element in the heap (and generally, its length)

![Memory model](/assets/images/string1.JPEG)

Looking at our example, we can say that `s` does not contain the actual string content, but instead, it is simply a reference to the memory region containing the content. 

This is in contrast with the other basic data types such as integers, for which their value is usually stored on the stack, due to their fixed size.

Let's say that we want to apply the `trim` operation to the string (or `strip()` in Python) to obtain its content, but without the surrounding spaces. We could do:

```rust
var s = " hello "
var t = s.trim()
```

In this case, the variable `t` will hold the value `"hello"`, without any surrounding space.

In most garbage collected languages that operation causes a separate string being created, so you end-up with two memory blocks on the heap:


![Memory model](/assets/images/string2.JPEG)

This is where Rust magic happens. If we assume that neither `T` nor `S` will be modified (they are immutable), we can optimize the previous operation by simply creating another string record having the start index at the second cell of `S` and having a length of 5 instead of 7.

![Memory model](/assets/images/string3.JPEG)

From the user perspective, T will be a string with length 5 and with content "hello",  but no additional allocation will be necessary, greatly improving memory efficiency.

In Rust, what we called "string record" is referred to as `&str` type, and represents a reference to a contiguous char array, along with its length. Technically, this is called a reference to a string slice.

Of course, this technique cannot be applied to every situation. For example, if we call the `to_uppercase()` method, the resulting string will not be a different view of the same string, but instead, it will be an entirely different one. In this case, an additional allocation will be needed.

The powerful aspect of &str types is that the location of the string content can vary based on the situation. It can reference a memory region on the heap, a location on the stack, or even a static portion of the executable itself.

### String literals

One thing that often confuses beginners are string literals. In particular, when you write the following code in Rust:

```rust
let str1 = "hello"
```

you are not allocating a string in the heap. Instead,  you're creating an immutable string literal, whose content is stored inside the binary itself. This is possible because its content is known at compile-time, which, on the other hand, is not the case with the following:

```rust
let i = 10
let str2 = i.to_string()
```

In this case, the string content is not known at compile-time, so it causes an allocation on the heap, creating the string “10”.

If we now analyze the type of the two previous variables, we notice that `str1` is of type `&str` and `str2` is of type `String`. This is because the first string does not allocate any memory on the heap, whereas the second one does. As a rule of thumb,  anytime you allocate new memory you will need to use the String type, whereas if you only need a different view of an existing string, the &str type will be more adequate. 

Technically, the `String` type is an *owned* type, whereas the `&str` type is not. To really understand the difference between the two, you will need to grasp the concepts of ownership and borrowing. If you need some help, [I made a video](https://www.youtube.com/watch?v=N2SgcDO0QL4) on the topic a few months ago.

In a nutshell, when you allocate some memory on the heap, there must be a way to free it when not used anymore, otherwise, you’ll produce a memory leak. In Java or Go, that’s the responsibility of the garbage collector, but in Rust, the ownership system takes care of freeing the memory once the owner goes out of scope.

### Tips for beginners

Now that you know the basics, let me give you a couple of tips:

#### Convert between the two

You can easily convert between the two by using the `to_string()` method and the borrow operator (&), such as:

```rust
// Start from a string literal &str
let foo = "hello"
// Convert to a owned String
let bar = foo.to_string()
// Get the string literal &str of bar
let car = &bar
```

#### Strings in function signatures

When you are designing function signatures, keep in mind that generally, strings are passed as `&str` slices and returned as owned Strings, such as:

```rust
fn concatenate_strings(s1: &str, s2: &str) -> String {
  return format!("{}{}", s1, s2);
}
```

This prevents unnecessary copies when passing the parameters, but also guarantees that the output string will live long enough to be received by the calling code. Moreover, it allows the function to accept both string slices and owned Strings. Of course, there are many exceptions to this rule, but for most cases, and most importantly until you really understand ownership and borrowing, this approach will serve you well.

### Conclusion

This was just a quick introduction to Rust strings, thank you for reading! 

If you liked the article, follow me on [Youtube](https://www.youtube.com/c/FedericoTerzi) or [Twitter](https://twitter.com/terzi_federico)!