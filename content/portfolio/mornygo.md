+++
showonlyimage = false
draft = false
image = "img/portfolio/mornygo/mornygo_vs_gnugo.png"
date = "2011-06-01T12:00:00+01:00"
title = "MornyGo"
description = "A C++ Go-playing engine built around an opening book and Monte Carlo tree search with UCT and RAVE."
featured = false
weight = 0
+++

MornyGo is a C++ engine I wrote to play Go, combining an opening book with Monte Carlo tree search, UCT and RAVE.

<!--more-->

The engine speaks version 2 of the Go Text Protocol, so it can play through compatible Go interfaces and against other engines. Beneath the search is a complete board implementation covering groups, liberties, scoring and Zobrist-based positional super-ko, along with SGF support for building its opening book.

The screenshot below shows MornyGo playing Black against GNU Go. The game finished with MornyGo half a point ahead under area scoring.

![MornyGo playing Black against GNU Go and winning by half a point][1]

I revisited the engine in 2026, replacing its old Boost-era build with modern C++17 and CMake, adding automated engine and GTP tests, and making it practical to run again with current Go tools.

[1]: /img/portfolio/mornygo/mornygo_vs_gnugo.png
