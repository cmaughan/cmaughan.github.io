+++
showonlyimage = false
draft = false
image = "img/portfolio/satview/satview.png"
date = "2026-08-16T18:25:22+01:00"
title = "SatView"
weight = 0
+++

SatView is an interactive satellite and sky viewer built as a plugin for Draxul.

<!--more-->

The main view combines a detailed 3D Earth with a live satellite catalogue, propagated orbits, stars, constellation figures and boundaries, and a proper day/night terminator. It can also switch to a flat map or a ground-observer sky view, with controls for moving through time and filtering the catalogue by object and orbit type.

There is rather more sky behind the satellites. SatView includes a Hipparcos starfield, the Milky Way, the Sun and Moon, planets and major moons, atmospheric scattering, clouds, and surface sites on the Moon and Mars. You can move the point of view around the Solar System, which is an excellent way to turn a quick look at an orbit into an evening spent hovering over Phobos.

The plugin is written in C++ and renders through Vulkan on Windows and Metal on macOS. It uses CelesTrak data and SGP4 for active Earth satellites, with carefully sourced offline catalogues and imagery for the wider celestial scene.

[On GitHub](https://github.com/cmaughan/draxul-satview)

![SatView showing Earth at the day-night terminator, surrounded by satellites and constellations][1]

![Satellite orbit tracks around Earth][2]

![Mars viewed from Phobos][3]

[1]: /img/portfolio/satview/satview.png
[2]: /img/portfolio/satview/tracks.png
[3]: /img/portfolio/satview/mars.png
