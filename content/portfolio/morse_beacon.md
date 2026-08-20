+++
showonlyimage = false
draft = false
image = "img/portfolio/morse_beacon/morse_beacon.jpg"
date = "2025-08-20T12:00:00+01:00"
title = "Morse Beacon"
description = "A compact RP2350-powered Morse beacon in a custom 3D-printed enclosure."
featured = false
weight = 0
+++

Morse Beacon is a compact RP2350-powered device that generates a repeating Morse signal from a small, self-contained box.

<!--more-->

The beacon is really handy for testing my transmitter builds, especially given my poor Morse skills! The unit has a custom 3D-printed enclosure and a light that shows when the Morse key is being triggered, and it can be connected to any radio's key socket. The MicroPython code sends a standard message and is easy to tweak. Using the reverse beacon network, I can check that my transmitter designs are functioning and how far they reach. With less than 5 watts, I've managed to send a signal to Ohio from York! That's the magic of radio - 5 watts is enough for one of those LED downlighters on your kitchen ceiling...

[The source and hardware files are available on GitHub](https://github.com/cmaughan/MorseBeacon).

![The Morse Beacon in its red 3D-printed enclosure][1]

![The Morse Beacon keying circuit and its compact hardware][4]

![MicroPython code for configuring and sending the Morse Beacon message][5]

I demonstrate the finished build in [A Little Morse Beacon][3].

[![YouTube thumbnail for A Little Morse Beacon][2]][3]

[Watch on YouTube...][3]

[1]: /img/portfolio/morse_beacon/morse_beacon.jpg
[2]: https://i.ytimg.com/vi/ZcFgws3iPPY/maxresdefault.jpg
[3]: https://www.youtube.com/watch?v=ZcFgws3iPPY
[4]: /img/portfolio/morse_beacon/morse_beacon_hardware.jpg
[5]: /img/portfolio/morse_beacon/morse_beacon_code.jpg
