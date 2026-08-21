+++
showonlyimage = false
draft = false
image = "img/portfolio/jorvik/live_code_sf_dashboard.jpg"
date = "2023-09-13T18:18:22+05:32"
title = "Rezonality"
featured = true
weight = 0
+++

Rezonality is the current iteration of my live coding tool.  It is intended to be used for Algorave and interactive applications.

<!--more-->

The editor supports writing shaders on Vulkan, and has a simple scene graph format for describing rendering setup.  Currently it supports multiple target rendering for deferred shading, sampling an audio stream for reactive shaders, and ray tracing.

The nice trick is the live feedback loop: edit the scene or shader, evaluate it, rebuild the graphics pipeline, and keep the previous working state if the new version fails.  That makes shader editing much more immediate.

The editor you see running in the window is Zep ( {{< ref "zep" >}}).

I'm currently busy porting Rezonality into a plugin for [Draxul]({{< ref "draxul" >}}), where it can use Draxul's cross-platform GPU UI and persistent workspace.  This short video shows Codex running inside Draxul and being used to live-code Rezonality.

{{< video src="/img/portfolio/jorvik/rezonality_draxul_codex.mp4" poster="/img/portfolio/jorvik/rezonality_draxul_codex.jpg" title="Codex inside Draxul being used to live-code Rezonality" >}}

I also used Codex to live-code an SF-style dashboard inside Draxul.  The video below shows the result:

{{< youtube h7kWxdjfH8g >}}

The existing standalone version remains available on GitHub: https://github.com/cmaughan/vklive

![Earlier Rezonality screenshot][1]

![Rezonality render view][2]

![Rezonality scene view][3]

![Rezonality editor view][4]

![Rezonality live coding view][5]

[1]: /img/portfolio/jorvik/jorvik_1.png
[2]: /img/portfolio/jorvik/jorvik_2.png
[3]: /img/portfolio/jorvik/jorvik_3.png
[4]: /img/portfolio/jorvik/jorvik_4.png
[5]: /img/portfolio/jorvik/jorvik_5.png
