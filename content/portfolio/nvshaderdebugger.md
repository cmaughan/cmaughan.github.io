+++
showonlyimage = false
draft = false
image = "img/portfolio/nvshaderdebugger/nvshaderdebugger.jpg"
date = "2004-01-01T18:26:22+05:32"
title = "Early Shader Debugger"
weight = 0
+++

An early shader debugger for the DirectX Reference Rasterizer

<!--more-->

Older versions of the DXSDK came with a reference rasterizer, that could simulate hardware shaders.  It was very slow, but it had the advantage that you could use it to debug shaders.

Using custom debug API's from Microsoft, I built a simple C++/Windows application that showed the contents of the shader registers, inputs and constants.  You could step through the shader and see the results.

This method of shader debugging is no longer supported, and with good reason - it was too slow to be very practical.

![NVSHADERDEBUGGER][1]

[1]: /img/portfolio/nvshaderdebugger/nvshaderdebugger.jpg
