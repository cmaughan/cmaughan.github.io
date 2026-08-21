+++
showonlyimage = false
draft = false
image = "img/portfolio/mui/mui.png"
date = "2026-08-18T17:37:00+01:00"
title = "MUI"
weight = 0
+++

MUI is a cross-platform, GPU-accelerated user interface framework for use inside my demos and projects.

<!--more-->

I wanted something better suited to demos than ImGui, while keeping an immediate-mode API and making it easy to add controls during development.  The UI is GPU-accelerated and uses high-quality antialiased rendering.

The current prototype uses a two-pass layout and caller-owned values.  It supports draggable, resizable and overlapping panels, styled title bars, sliders, checkboxes, wrapped text, z-order changes, and text handling for kerning, ligatures, UTF-8 and missing glyphs.

![MUI demo showing styled, draggable UI panels and controls][1]

[1]: /img/portfolio/mui/mui.png
