+++
showonlyimage = false
draft = false
image = "img/portfolio/scoreview/score.png"
date = "2026-08-17T08:00:00+01:00"
title = "ScoreView"
featured = true
weight = 0
+++

ScoreView is an experimental piano teacher that turns a musical score into an adaptive practice session.

<!--more-->

It imports MusicXML scores and renders them as crisp, scalable notation using Verovio. The reading view can colour notes by their position on the keyboard, while the practice view adds a moving score, a piano-roll waterfall, an 88-key guidance keyboard, a metronome, and optional score playback. Input can come from a MIDI keyboard, the computer keyboard, or a microphone-based note listener.

The interesting part is what happens behind the score. ScoreView analyses the piece for keys, chords, motifs, phrases, and sections, then builds a practice stream around the player. It records mistakes and timing drift, brings difficult bars back while they are still useful, adjusts the tempo to the weakest passage, and schedules later reviews. The aim is not simply to play the music at you, but to notice what you are finding difficult and change the session accordingly.

ScoreView is a C++ plugin for Draxul, running through the same Vulkan and Metal host on Windows and macOS. It is still an experiment, but already a rather capable one—and a useful excuse to combine music engraving, audio, MIDI, learning models, and GPU rendering in one project.

[On GitHub](https://github.com/cmaughan/draxul-scoreview)

![A MusicXML piano score rendered and colour-guided in ScoreView][1]

![ScoreView's adaptive player and learning inspector][2]

[1]: /img/portfolio/scoreview/score.png
[2]: /img/portfolio/scoreview/player.png
