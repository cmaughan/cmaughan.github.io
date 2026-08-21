+++
showonlyimage = false
draft = false
image = "img/portfolio/boardz/boardz_ipad.png"
date = "2011-11-05T18:25:22+05:30"
title = "Boardz"
featured = true
weight = 0
+++

Boardz was a collection of turn-based board games released for iPhone and iPad.  It included a server, player matching, async games, chat and AI computer opponents.

<!--more-->

The host was written in C++ and Objective-C, with the server running Ruby on Rails on Heroku.  It was a nice little full-stack project: mobile UI, rules engines for several classic games, matchmaking, chat, etc.  Initially the game was designed for human -> human turn-based online play, but I increasingly got complaints from users who downloaded it and wanted to play against the computer - despite the clear description of what it was! This was my rude welcome to shipping IOS games...

Partially because it was fun, I built a Go AI to satisfy the users, and imported Chess and Shogi engines.  I don't recall how I did the Draughts engine: I may have written a simple engine for that, or found a free one.  The AI engine was a big challenge and I went down quite the rabbit hole building that; it is elsewhere on this site.

Boardz supported teaching games between people quite well: the Go screenshot shows a human teacher using the in-game chat to talk to a student about the position.  Boardz was also a launch title for iPad - it did OK, but there was quite a lot of competition, and one thing I hadn't thought of - some users were using the iPad as a game board, human to human locally.  I did add that feature after I saw it; it just required mirroring the controls and letting both players move in sequence.

Eventually, given my time constraints and the continuing maintenance and server costs, I introduced a simple subscription model for a nominal monthly fee.  Players who didn't subscribe would be limited to only 2 simultaneous games.  Most players had have more than that going on, playing their turns once a day over several days or even weeks with several opponents.  I figured most would pay a pound a month to keep doing that, since the app was clearly popular with a troupe of dedicated users.  What happened next surprised me: almost all players switched to playing just 2 games at any one time.  Nobody wanted to pay.

After a few years, I decided to shut down the server and move on.  I got angry emails from players, asking why was I shutting down the server? I had to explain that I'd been running it for free, and nobody was paying; I had even telegraphed this outcome months before.  Anyone familiar with mobile apps will know this story.  There's an expectation of 'Free', with prices driven down to the point where it is hard to justify building applications.  I'm not bitter: I had a blast making and publishing the games, and I learned a lot: how to use a Mac, write Objective-C, build a Ruby on Rails server, run a company, etc.... I like to think I introduced these games to western audiences too.  In particular the stylized Shogi and Chinese chess pieces made those games much easier to understand.  I love playing all these games, but a life-long obsession with Go has been passed onto my son! Shogi is also a wonderful game; deep and complex.  Unlike chess there is no end game; pieces are returned to the board after capturing, making play increasingly challenging!

Every programmer should at least write a chess engine; I think it is a really valuable exercise.

Games available on Boardz were:

- Chess
- Draughts
- Go (9/13/19)
- Shogi (small variant too)
- Chinese Chess

![Boardz Go teaching game on iPad][1]

![Boardz chess on iPhone][2]

![Boardz draughts on iPhone][3]

![Boardz Shogi on iPad][4]

[1]: /img/portfolio/boardz/boardz_ipad.png
[2]: /img/portfolio/boardz/chess_phone.png
[3]: /img/portfolio/boardz/draughts_phone.jpg
[4]: /img/portfolio/boardz/Shogi2.png
