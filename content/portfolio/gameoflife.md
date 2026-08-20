+++
showonlyimage = false
draft = false
image = "img/portfolio/gameoflife/gameoflife.png"
date = "2017-11-05T18:25:22+05:30"
title = "Game Of Life"
weight = 0
+++

Implementing Game of Life is a classic programming challenge.

<!--more-->

My version shown here implements the speed-up described in this [archived paper](https://web.archive.org/web/20200808004917/https://www.drdobbs.com/go-parallel/article/print?articleId=184406478&siteSectionName=), which enables the simulation of millions of iterations by exploiting the repetitive nature of the algorithm. Also—best title for an academic paper ever ;)

The interesting bit is that Game of Life looks simple, but it rewards careful thinking about repeated patterns, cached results, and how much work you can avoid doing. I need to dig out the source for this version, but there is an earlier version in the teaching framework [Mgfx](https://github.com/cmaughan/mgfx), and a newer standalone experiment [here](https://github.com/cmaughan/game_of_life).

![Game of Life][1]

![Game of Life][2]

[1]: /img/portfolio/gameoflife/gameoflife_2.png
[2]: /img/portfolio/gameoflife/gameoflife.png
