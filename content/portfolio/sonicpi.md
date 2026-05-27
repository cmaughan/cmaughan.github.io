+++
showonlyimage = false
draft = false
image = "img/portfolio/sonicpi/sonicpi.png"
date = "2020-01-05T18:25:22+05:30"
title = "Sonic Pi"
weight = 0
+++

I contributed a pair of scopes to Sonic Pi 3.2.

<!--more-->

In order to learn a bit more about a live coding language, I built and played with Sonic Pi. I found that the graphs provided in the tool were using a toolkit called Qwt. This is an old Qt toolkit, which was not really doing anything other than drawing a simple line graph - as well as making the build of the product more complicated. I showed Sam (the creator of Sonic Pi) how to replace the Qwt library with simple paint commands. I then contributed two nicer scopes; a mirror stereo effect showing the live audio waveform, and a spectrum analyzer. My live coding work meant I already had source to generate a frequency analysis using an FFT (Fast Fourier Transform), so it wasn't much effort to make a scope for that. It became the default shipping scope in Sonic Pi, and works great. It's been nice to see so many users streaming performances with the new scopes on display!

This was a satisfying contribution because it made the app a bit easier to build and gave performers a more interesting visual signal while they play. Small UI details matter a lot when people are staring at the thing on stage.

In addition to the scopes, I showed Sam how to move his build over to CMake to enable a more effortless build process.

[Sonic Pi 3.2](https://sonic-pi.net)

![SonicPi][1]

[1]: /img/portfolio/sonicpi/sonicpi.png
