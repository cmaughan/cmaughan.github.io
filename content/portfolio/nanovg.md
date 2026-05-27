+++
showonlyimage = false
draft = false
image = "img/portfolio/nanovg/image.png"
date = "2008-11-05T18:25:22+05:30"
title = "NanoVg (D3D Backend)"
weight = 0
+++

NanoVG is a 2D vector library. I contributed a D3D backend to the effort - just for fun.

<!--more-->

NanoVG originally targeted OpenGL, so the interesting part was mapping its canvas-style drawing model onto Direct3D: paths, fills, strokes, gradients, clipping, and the stencil-buffer tricks needed for antialiased vector rendering. This project is no longer maintained. Probably because ImGui is a better solution for this problem these days. Though Direct2D is even better if you don't mind sticking to Windows....

[My fork on GitHub](https://github.com/cmaughan/nanovg)

![NanoVg][1]

[1]: /img/portfolio/nanovg/image.png
