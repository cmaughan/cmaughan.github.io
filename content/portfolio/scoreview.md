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

It imports MusicXML scores and renders them as crisp, scalable notation using Verovio. The reading view can colour notes by their position on the keyboard, while the practice view adds a moving score, a piano-roll waterfall, an 88-key guidance keyboard, a metronome, and optional score playback. Input can come from a MIDI keyboard, the computer keyboard, or a microphone-based note listener (that part doesn't work very well yet!).

I had long wanted access to a notation scheme that used color - why shouldn't all 'C's be Red? The color palette was chosen to be the same as the Boomwhackers that my kids had growing up. A lot of what's going on here is to assist the learner as much as possible, drilling them on the hard stuff, and removing the guard rails as they improve.

The interesting part is what happens behind the score. ScoreView analyses the piece for keys, chords, motifs, phrases, and sections, then builds a practice stream around the player. It records mistakes and timing drift, brings difficult bars back while they are still useful, adjusts the tempo to the weakest passage, and schedules later reviews. The aim is not simply to give you the music, but to notice what you are finding difficult and change the session accordingly.

So far this is all experimental. What I've found is that the 'continuous runner' approach gives me no time to pause and fix my mistakes - so part of the original idea I had here has to change. I'm soon going to try modifying the composer to 'wait' strategically for the player, before spinning back up to tempo. This is a research project, based on something I've always been passionate about: the idea that the way we are taught is not optimal.

ScoreView is a C++ plugin for Draxul, running through the same Vulkan and Metal host on Windows and macOS. It is still an experiment.

[On GitHub](https://github.com/cmaughan/draxul-scoreview)

![A MusicXML piano score rendered and colour-guided in ScoreView][1]

![ScoreView's adaptive player and learning inspector][2]

[1]: /img/portfolio/scoreview/score.png
[2]: /img/portfolio/scoreview/player.png
