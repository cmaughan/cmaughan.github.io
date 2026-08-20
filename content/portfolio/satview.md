+++
showonlyimage = false
draft = false
image = "img/portfolio/satview/satview.png"
date = "2026-08-16T18:25:22+01:00"
title = "SatView"
featured = true
weight = 0
+++

SatView is an interactive satellite, sky, and solar system viewer.

<!--more-->

The main view combines a detailed 3D Earth with a live satellite catalogue, propagated orbits, stars, constellation figures and boundaries, and a proper day/night terminator. It can also switch to a flat map or a ground-observer sky view, with controls for moving through time and filtering the catalogue by object and orbit type.

There is rather more sky behind the satellites. SatView includes a Hipparcos starfield, the Milky Way, the Sun and Moon, planets and major moons, atmospheric scattering, clouds, and surface sites on the Moon and Mars. You can move the point of view around the Solar System, which is an excellent way to turn a quick look at an orbit into an evening spent hovering over Phobos. The Moon view even lets you select and look at all the landing sites for the various visits we have made there. The star field is generated from a database with realistic coloring and sizing of the stars to give the backdrop a better perceptual view of what's up there.

The rendering of the planet has been designed to be realistic: the atmosphere is ray-traced and physically modelled, for that shiny blue marble look... The satellites can be filtered and searched, so you can see just how many Starlink Satellites are up there! You can speed up time or see them right now. The ground view is very much like Stellarium. I'm an Astronomy geek; and this is the fun app I always wanted to build. Currently the UI is a little clunky (ImGui); it's a grab bag of useful switches and buttons. I have a side project to build a proper UI framework for this and other projects - when that's done, I'll start to really plan out how to build a useful UI.

The plugin is written in C++ and renders through Vulkan on Windows and Metal on macOS. It uses CelesTrak data and SGP4 for active Earth satellites, with carefully sourced offline catalogues and imagery for the wider celestial scene.

One surprise here was how useful I found it to understand things like geostationary satellites: looking at them on the 2D planar view is really helpful.

[On GitHub](https://github.com/cmaughan/draxul-satview)

![SatView showing Earth at the day-night terminator, surrounded by satellites and constellations][1]

![Satellite orbit tracks around Earth][2]

![Mars viewed from Phobos][3]

![Constellation figures in SatView's stereographic all-sky ground view][4]

![Geostationary satellite tracks over the night side of an Earth map][5]

![Ground-observer sky view with constellation boundaries and satellite markers][6]

![Lunar landing sites and spacecraft orbit tracks around the Moon][7]

[1]: /img/portfolio/satview/satview.png
[2]: /img/portfolio/satview/tracks.png
[3]: /img/portfolio/satview/mars.png
[4]: /img/portfolio/satview/constellations.png
[5]: /img/portfolio/satview/geostationary.png
[6]: /img/portfolio/satview/groundview.png
[7]: /img/portfolio/satview/moonlanders.png
