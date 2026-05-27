+++
showonlyimage = false
draft = false
image = "img/portfolio/texturemasking/texturemasking.png"
date = "2001-06-01T18:26:22+05:32"
title = "Lens Flare"
weight = 0
+++

Texture Masking for Faster Lens Flare

<!--more-->

I wrote up this technique for the book GPU Gems 2.  My approach was to create a scene view that contained the sun and draw it into a small 16x16 texture.  Then the texture was sampled into a single texel and 'accumulated' based on if the sun was visible or not.  Later on, the intensity map that was generated could be multiplied by the lens flare.  In this way, no read back from the GPU was required.

![TEXTUREMASKING][1]

[1]: /img/portfolio/texturemasking/texturemasking.png
