+++
showonlyimage = false
draft = false
image = "img/portfolio/megacity/live_coverage_pc.png"
date = "2026-08-17T08:30:00+01:00"
title = "MegaCity"
featured = true
weight = 0
+++

MegaCity turns a source tree into an explorable 3D city, with buildings, trees and connections depicting the layout of the code base.

<!--more-->

The plugin scans a codebase with Treesitter and builds a semantic model of its repositories, modules, files, types, functions, and references. Modules become distinct districts, types become buildings, and dependencies become routes running through the city. The result is less about admiring a skyline and more about giving a large codebase a shape that can be explored. In the age of agentic AI, it was my first thought on how I could visualize code I was no longer writing myself. When programmer becomes architect, he needs to see what he's building without reading 40K lines of code.

The revelation of this project was how far I could actually go with Codex and Opus. I had no idea, back in February 2026, that AI had become good enough to build a cross platform game engine, with advanced graphics in a matter of days & weeks. I put together the basic city scape within a couple of weeks, and probably spend another week or so tweaking it. I still come back and play occasionally: I'm not done with this idea yet!

In the city, buildings can be selected and traced back to their source, while dependency highlighting shows how code is connected across districts - using an A\* path finding algorithm. Performance data colours busy areas as a heat map, and live or imported LCOV coverage can reveal which parts of the city have actually been exercised. It is intended as a shared visual language for a human and the coding agents working on a project: a quick way to ask where the complexity lives, what changed, and which neighbourhood looks 'dodgy'!

MegaCity is a native C++ plugin for Draxul. It renders directly through Vulkan on Windows and Metal on macOS, with an HDR pipeline, shadows, ambient occlusion, procedural buildings, roads, parks, and rather more attention to the central tree than was strictly necessary! A lot of this code was built by firing off different AIs and having them agree on features and refactoring. This project is really where I began to learn how to orchestrate AIs and build clean Dark Factory projects.

[On GitHub](https://github.com/cmaughan/draxul-megacity)

![A large source tree laid out as a MegaCity skyline][1]

![Inspecting a building beside its source code][2]

![Live code-coverage data overlaid on MegaCity on Windows][3]

[1]: /img/portfolio/megacity/function_buildings_mac.png
[2]: /img/portfolio/megacity/inspection_mac.png
[3]: /img/portfolio/megacity/live_coverage_pc.png
