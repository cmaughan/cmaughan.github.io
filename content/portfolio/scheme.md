+++
showonlyimage = false
draft = false
image = "img/portfolio/scheme/scheme.png"
date = "2015-05-08T18:25:22+05:30"
title = "Scheme"
weight = 0
+++

Building a Lisp interpreter is an interesting exercise, especially if you are new to functional programming.

<!--more-->

[This one on GitHub](https://github.com/cmaughan/JorvikScheme) is an early one I built.  I would probably do a cleaner version these days.

The implementation is split into tokenizer, parser, interpreter, and evaluator stages, with tests around each part.  It supports linked-list cells, dotted pairs, a small intrinsic function system, and a custom mark-and-sweep cell allocator.  I built it partly to refresh my interpreter knowledge, partly to practice TDD, and partly because Lisp has a way of making simple things feel suspiciously profound.

![Scheme][1]

[1]: /img/portfolio/scheme/scheme.png
