+++
showonlyimage = false
draft = false
image = "img/portfolio/asteroids/asteroids_reddit.png"
date = "2013-11-05T18:25:22+05:30"
title = "Asteroids"
weight = 0
+++

Asteroids is a compact MGFX teaching demo that makes simple game physics easy to see, tune, and play.

<!--more-->

I built this to demonstrate game physics, and because I'd never made an Asteroids clone before. A parameter panel lets you play with the physics parameters and see the results. It uses ImGui for the UI and if I recall correctly, it is basic OpenGL with sprites!

![The original MGFX Asteroids game and its live debug controls][3]

I later reused the game for the moving-points puzzle in Advent of Code 2018. Each point became an asteroid, and running the simulation brought the field together to reveal the answer inside the game. A clever puzzle with a nice visualization of the answer!

[![The Advent of Code solution converging inside the Asteroids game][1]][2]

[Watch the short video on Reddit...][2]

[1]: /img/portfolio/asteroids/asteroids_reddit.png
[2]: https://www.reddit.com/r/adventofcode/comments/a4xzuf/solved_inside_an_asteroids_game/
[3]: /img/portfolio/asteroids/asteroids.png
