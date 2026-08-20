+++
showonlyimage = false
draft = false
image = "img/portfolio/raytracer/raytracer_aa.png"
date = "2016-11-05T18:25:22+05:30"
title = "Ray Tracer"
weight = 0
+++

Every graphics engineer should write a ray tracer at some point. I've done this a couple of times in C++, C#, and Python.

<!--more-->

Teaching ray tracing is challenging but fun too. With these frameworks I tried to build all the hard setup into simple libraries and have the students work at the clearer task of calculating ray/object collisions and generating colors.

The examples shown here implement diffuse and specular ray tracing, along with some simple antialiasing to improve the final image. Without antialiasing they run in real time, and you can walk around the objects. The repo includes a few versions, which is handy for comparing the same idea in different languages and levels of Windows-ness.

[RayTracer on GitHub](https://github.com/cmaughan/RayTracer)

![Ray Tracer][1]

![Ray Tracer][2]

[1]: /img/portfolio/raytracer/raytracer_aa.png
[2]: /img/portfolio/raytracer/raytracer_aa2.png
