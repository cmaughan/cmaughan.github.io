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

The app keeps the main fasting state simple: start a fast, stop a fast, edit the timestamps if life was messier than the timer, and keep a history of completed fasts. The fun part is the dashboard wrapped around that. It shows fasting phases, a target duration, Apple Health context, and energy estimates split into sugar and fat burn.

The fuel numbers are estimates, not lab measurements. Geek Fast combines fasting duration with resting and active energy from Apple Health where available, then runs that through a research-inspired curve that shifts gradually from glucose and glycogen toward fat as the fast gets longer. It is intentionally more interesting than "you are now in the fat zone", because bodies have the poor manners not to operate like toggle switches.

There is also a metabolic trace view for the geekier side of fasting: insulin suppression, glucagon signalling, lipolysis, gluconeogenesis, ketogenesis, AMPK activation, mTOR suppression, autophagy signalling, and related processes. Those are shown as approximate pathway intensity signals, with careful wording because HealthKit does not secretly contain a tiny biochemistry lab.

[On GitHub](https://github.com/cmaughan/fastdash)

![Geek Fast][1]

[1]: /img/portfolio/geekfast/screenshot.png
