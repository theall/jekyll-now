---
layout: docs
title: Merge
permalink: /docs/merge/
---

In general occasion, it's very easy to append a multipe-line text to the end of another multipe-line text.
But it's aboring if you want to append every line of the source text to the end of every line of the objective text. 
You have to continuous copy from the first line to the end line of source text, then patse to target line by line.
Actually you don't need to do this by yourself, if you can use Merge.

### What is Merge?

Merge is a process of splicing columns of text from horizontal direction against to splicing them from vertical direction.

### How Merge does?
Merge use a simple template to splice source text.The following example is the simplest usage of merging four columns by space character.

```c++
#1# #2# #3# #4#
```

The number with pound character prefixed and suffixed represents the corresponding text column.The template can be customized as you want.The prefix and suffix also can be customized.Anyway, you don't need to learn any syntax of template cause it has no 
syntax, just write as your need.
