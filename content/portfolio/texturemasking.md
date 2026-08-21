+++
showonlyimage = false
draft = false
image = "img/portfolio/texturemasking/texturemasking.png"
date = "2001-06-01T18:26:22+05:32"
title = "Lens Flare"
weight = 0
+++

Texture masking for faster lens flare.

<!--more-->

I wrote up this technique for the book GPU Gems 2.  My approach was to create a scene view that contained the sun and draw it into a small 16x16 texture.  Then the texture was sampled into a single texel and accumulated based on whether the sun was visible.  Later on, the intensity map that was generated could be multiplied by the lens flare.  In this way, no readback from the GPU was required.

The important part was avoiding a CPU/GPU sync point.  The GPU could estimate visibility and drive the flare intensity on its own, which kept the effect cheap enough to use.

![TEXTUREMASKING][1]

[1]: /img/portfolio/texturemasking/texturemasking.png
