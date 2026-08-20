+++
showonlyimage = false
draft = false
image = "img/portfolio/draxul/terminals_mac.png"
date = "2026-05-20T18:25:22+05:30"
title = "Draxul"
featured = true
weight = 0
+++

Draxul is an agentic client/server shell with persistent workspaces and a hardware-accelerated terminal UI for Windows and macOS.

<!--more-->

At its center is a per-user server that owns shells, spaces, panes, and agents independently of the UI. A client can disconnect, close, and later reattach without losing the work behind it. That makes Draxul useful as a harness for long-running agentic sessions: the processes keep going, while one or more lightweight clients provide the view onto them.

The client is also a serious terminal host. It runs PowerShell, WSL, Bash, Zsh, Git, embedded Neovim, and other shell-shaped processes in tabs and split panes. Rendering is done directly on the GPU with Vulkan on Windows and Metal on macOS. A FreeType and HarfBuzz text pipeline handles ligatures, font fallback, Nerd Font symbols, and emoji, with HiDPI-aware scaling and the usual terminal details such as selection, scrollback, mouse input, and clipboard support.

Draxul also provides Markdown and Kanban panes, a command-line interface for creating and arranging workspaces, and a versioned plugin ABI that lets native tools join the same client/server topology and render into raw Vulkan or Metal frames.

The project is also a live experiment in agentic development. None of the code has been human-written; agents built the application, tests, reviews, plans, and documentation, with a human acting as the arbiter. That makes it a useful stress test for how far agent-driven C++ development can be pushed before the grown-ups need to take the keyboard back.

[On GitHub](https://github.com/cmaughan/Draxul)

![Draxul running Neovim and a shell in split terminal panes on macOS][1]

![Draxul running Neovim, a shell, and system monitoring in several macOS panes][2]

![Draxul running terminal tools and Neovim on Windows][3]

![Draxul Kanban and Markdown panes managing agent-generated work items][4]

[1]: /img/portfolio/draxul/terminals_mac.png
[2]: /img/portfolio/draxul/terminals_mac_2.png
[3]: /img/portfolio/draxul/draxul_pc.png
[4]: /img/portfolio/draxul/kanban.png
