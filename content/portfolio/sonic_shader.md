+++
showonlyimage = false
draft = false
image = "img/portfolio/sonic_shader/sonic_shader.png"
date = "2021-01-22T09:00:22+05:32"
title = "Sonic Pi Shader"
weight = 0
+++

I added a simple API to the Sonic Pi code base.

<!--more-->

The API is designed to make it easy to add alternative user interfaces and separate the UI from the Sonic Pi server more cleanly. To test the API I built a simple ImGui front end that can also show 3D rendering using pixel shaders. When I next have some free time I intend to clean up the existing user interface code further; this API was the first step. There are many OSC calls that can be made to the server, and these are currently used ad-hoc; that's the next thing to fix.

In the video, the generated audio is run through an FFT to generate a frequency spectrum (this was already in place when I added the new Frequency visualizer).  The frequency data is sent onward to the GPU where it is used during rendering to make the pattern respond to the music.
The UI is intended as a test and demo, not a replacement for the existing Sonic Pi API. The fun bit is the bridge between live music and live graphics: Sonic Pi makes the sound, the FFT turns it into data, and the shader gets something lively enough to dance with.

{{< youtube cl1ABJLMvRc >}}
