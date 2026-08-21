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

It imports MusicXML and renders it as crisp, scalable notation using Verovio.  The reading view can color notes by their position on the keyboard, while the practice view adds a moving score, a piano-roll waterfall, an 88-key guidance keyboard, a metronome, and optional score playback.  Input can come from a MIDI keyboard, the computer keyboard, or a microphone-based note listener (that part doesn't work very well yet!).

I had long wanted access to a notation scheme that used color - why shouldn't all 'C's be red? The color palette was chosen to be the same as the Boomwhackers that my kids had growing up.  A lot of what's going on here is to assist the learner as much as possible, drilling them on the hard stuff, and removing the guard rails as they improve.

The interesting part is analysis: the music is scanned for keys, chords, motifs, phrases, and sections, then a practice stream is built around the problems the player is experiencing.  That's the idea, anyway! The aim is not simply to give you the music, but to notice what you are finding difficult and change the session accordingly.  This was an idea I had a long time ago, and even implemented to some extent.  AI has got me much further than I did before.

So far this is all experimental.  What I've found is that the 'continuous runner' approach gives me no time to pause and fix my mistakes - so part of the original idea I had here has to change.  I'm soon going to try modifying the composer to 'wait' strategically for the player, before spinning back up to tempo.  This is a research project, based on something I've always been passionate about: the idea that the way we are taught is not optimal and we can find faster ways to learn.

ScoreView is a C++ plugin for Draxul, running through the same Vulkan and Metal host on Windows and macOS.

[On GitHub](https://github.com/cmaughan/draxul-scoreview)

![A MusicXML piano score rendered and color-guided in ScoreView][1]

![ScoreView's adaptive player and learning inspector][2]

[1]: /img/portfolio/scoreview/score.png
[2]: /img/portfolio/scoreview/player.png
