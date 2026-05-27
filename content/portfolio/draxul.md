+++
showonlyimage = false
draft = false
image = "img/portfolio/draxul/draxul_mac.png"
date = "2026-05-20T18:25:22+05:30"
title = "Draxul"
weight = 0
+++

Draxul is an experimental Dark Factory agentic project: a universal console shell, a Neovim GUI, and a city-as-code visualization, all wrapped in a cross-platform HDR renderer.

<!--more-->

The practical bit is a GPU-accelerated terminal host that can run PowerShell, WSL, Bash, Zsh, Git, Neovim, or whatever shell-shaped process you point at it. On Windows it uses Vulkan, on macOS it uses Metal, and the app includes a FreeType/HarfBuzz text pipeline with font fallback for the usual terminal glyph party.

The more unusual bit is the code city. Draxul can scan a codebase and turn modules into buildings, then overlay performance, test coverage, diagnostics, and links back to source. It is a visual metaphor for code an agent is building: part tool, part map, part "why is that tower on fire?" debugging aid.

The project is also a live experiment in agentic development. None of the code has been human-written; agents built the application, tests, reviews, plans, and documentation, with a human acting as the arbiter. That makes it a useful stress test for how far agent-driven C++ development can be pushed before the grown-ups need to take the keyboard back.

[On GitHub](https://github.com/cmaughan/Draxul)

![Draxul][1]

[1]: /img/portfolio/draxul/draxul_mac.png
