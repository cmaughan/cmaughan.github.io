+++
showonlyimage = false
draft = false
image = "img/portfolio/connect4/connect4.png"
date = "2016-11-05T18:25:22+05:30"
title = "Connect4"
weight = 0
+++

At the York Code Dojo, we spent an evening writing a connect 4 player.  We pitched the results against each other to see which could play the best.

<!--more-->

This one is in C++, with a little Windows UI to nicely show the board.  The AI uses a fairly standard min/max search algorithm.

[On Github](https://github.com/cmaughan/Connect4) in the file Game.cpp

This wasn't the first min/max search I'd done, so I was able to put it together reasonably quickly.  I still learned some things, and found a really nice library for making Rest calls from C++: [Embedded Rest](https://github.com/fnc12/embeddedRest)

![Connect4][1]

[1]: /img/portfolio/connect4/connect4.png
