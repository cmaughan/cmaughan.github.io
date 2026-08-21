+++
showonlyimage = false
draft = false
image = "img/portfolio/geekfast/screenshot.png"
date = "2026-05-08T18:25:22+05:30"
title = "Geek Fast"
weight = 0
+++

Geek Fast is a SwiftUI app I built to track my fasts with a suitably nerdy dashboard.

<!--more-->

The app keeps the main fasting state simple: start a fast, stop a fast, edit the timestamps if life was messier than the timer, and keep a history of completed fasts.  The fun part is the dashboard wrapped around that.  It shows fasting phases, a target duration, Apple Health context, and energy estimates split into sugar and fat burn.

The fuel numbers are estimates, not lab measurements.  Geek Fast combines fasting duration with resting and active energy from Apple Health where available, then runs that through a research-inspired curve that shifts gradually from glucose and glycogen toward fat as the fast gets longer.  The result is intended as a useful guide rather than a direct measurement.

There is also a metabolic trace view for the geekier side of fasting: insulin suppression, glucagon signaling, lipolysis, gluconeogenesis, ketogenesis, AMPK activation, mTOR suppression, autophagy signaling, and related processes.  These are approximate pathway intensity signals; HealthKit does not measure them directly.

![Geek Fast][1]

[1]: /img/portfolio/geekfast/screenshot.png
