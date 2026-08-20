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

The custom circuit and 3D-printed enclosure turn the Tiny 2350 board into a tidy standalone unit, with an illuminated front control and the external connections brought out at the sides.

[The source and hardware files are available on GitHub](https://github.com/cmaughan/MorseBeacon).

![The Morse Beacon in its red 3D-printed enclosure][1]

The beacon keys the radio through an opto-isolator, while a separate LED mirrors the transmitted pattern. The compact circuit fits directly behind the key socket inside the enclosure.

![The Morse Beacon keying circuit and its compact hardware][4]

Its configurable MicroPython sender controls the message, Morse speed and spacing, then continuously keys the radio from the RP2350.

![MicroPython code for configuring and sending the Morse Beacon message][5]

I demonstrate the finished build in [A Little Morse Beacon][3].

[![YouTube thumbnail for A Little Morse Beacon][2]][3]

[Watch A Little Morse Beacon on YouTube...][3]

[1]: /img/portfolio/morse_beacon/morse_beacon.jpg
[2]: https://i.ytimg.com/vi/ZcFgws3iPPY/maxresdefault.jpg
[3]: https://www.youtube.com/watch?v=ZcFgws3iPPY
[4]: /img/portfolio/morse_beacon/morse_beacon_hardware.jpg
[5]: /img/portfolio/morse_beacon/morse_beacon_code.jpg
