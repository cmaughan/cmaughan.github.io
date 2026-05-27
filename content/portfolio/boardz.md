+++
showonlyimage = false
draft = false
image = "img/portfolio/boardz/boardz_ipad.png"
date = "2011-11-05T18:25:22+05:30"
title = "Boardz"
weight = 0
+++

Boardz was a collection of turn based board games released for iPhone and iPad. It included a server, player matching, async games, and chat.
<!--more-->

The host was written in C++ and Objective-C, with the server running Ruby on Rails on Heroku. It was a nice little full-stack project: mobile UI, rules engines for several classic games, remote matchmaking, and all the awkward edge cases that appear the moment two humans are allowed to take turns at different speeds.

I also built a Go AI so players could play against the computer when no human opponent was around. Separately, Boardz supported teaching games between people: the Go screenshot shows a human teacher using the in-game chat to talk to a student about the position.

Games available were:

- Chess
- Draughts
- Go
- Shogi
- Chinese Chess

![Boardz Go teaching game on iPad][1]

![Boardz chess on iPhone][2]

![Boardz draughts on iPhone][3]

![Boardz Shogi on iPad][4]

[1]: /img/portfolio/boardz/boardz_ipad.png
[2]: /img/portfolio/boardz/chess_phone.png
[3]: /img/portfolio/boardz/draughts_phone.jpg
[4]: /img/portfolio/boardz/Shogi2.png
