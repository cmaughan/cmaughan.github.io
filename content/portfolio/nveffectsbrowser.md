+++
showonlyimage = false
draft = false
image = "img/portfolio/nveffectsbrowser/nveffectsbrowser.jpg"
date = "2000-01-01T18:25:22+05:30"
title = "NVIDIA Effects Browser"
weight = 0
+++

My first job at NVIDIA was writing a tool to enable developers to understand vertex and pixel shaders.

<!--more-->

I got the chance to build lots of fun little shaders which showed how to implement standard things like point light sources or volume fog; and previously impossible things such as reflective bump mapping.

My initial host could support plugin effects, and after I'd written a few basic effects, others at NVIDIA took over writing them, as well as eventually building a better effect browser which shipped on later SDKs.
The shaders here were typically written in Shader Assembly language; we had no C-like language at that point.

If I remember correctly, this tool was a C++ app using standard Win32 UI control widgets.

[There's a site that talks about it here](http://archive.gamedev.net/archive/columns/hardcore/dxshader1/page3.html), but I don't have a nice screenshot of this any more.

![NVIDIA Effects Browser][1]

[1]: /img/portfolio/nveffectsbrowser/nveffectsbrowser.jpg
