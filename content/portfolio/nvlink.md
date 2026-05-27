+++
showonlyimage = false
draft = false
image = "img/portfolio/nvlink/nvlink.jpg"
date = "2000-01-01T18:30:22+05:30"
title = "NV Shader Linker"
weight = 0
+++

NV Shader Linker was an attempt to build a traditional fixed function graphics pipeline using a series of shader fragments.

<!--more-->

I built this tool to show developers how to implement fixed function shading on modern hardware without those facilities. The demo let you pick the number and type of lights you wanted to use, and then generated a working shader supporting them. The demo also applied the results to a model in NVIDIA Effects Browser. Skinning was supported, though I don't recall if that was done in the shader!

The fun part of this project was figuring out how to declare shader fragments and sew them together at runtime. Additionally, I did some rudimentary optimization to remove dead code and reduce register usage. It was a little compiler hiding inside a demo, which is often how these things sneak into your life.

Not long after this, Microsoft shipped a system in their SDK, which used the same approach.

![NVLINK][1]

[1]: /img/portfolio/nvlink/nvlink.jpg
