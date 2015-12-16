---
id: 69
title: A History of Boardz, Part 1
author: cmaughan
layout: post
guid: http://www.chrismaughan.com/?p=69
permalink: /posts/a-short-history-of-boardz-part-1/69
aktt_notify_twitter:
  - no
dsq_thread_id:
  - 1576536194
categories:
  - Coding
tags:
  - Apple
  - Boardz
  - Game Development
  - Games
  - iOS
  - Programming
---
[<img class="size-full wp-image-68 alignleft" style="margin: 6px;" title="Boardz" src="http://www.chrismaughan.com/wp-content/uploads/2011/09/7.jpg" alt="Boardz" width="100" height="100" />][1]

Back in September 2008, while the stock markets were crashing due to the banking fiasco, I started to think more seriously about ways to boost my income, in case things went pear-shaped with my job, or I found myself with some free time to pursue a project on my own.  In hindsight I was panicking unnecessarily, but it was the perfect excuse to get into mobile development and scratch that ‘forming a company’ itch I’d had for a while.  I had also bought an iPhone recently, and I liked it a lot.  A plan was soon formed &#8211; I’d buy a Mac and build a simple iPhone app, getting my feet wet in mobile development.  Maybe I’d even make a little cash on the side…

In this post I’m going to begin a short history of Boardz, my first app for iOS.  Although Boardz is a pretty abysmal financial failure when measured against the amount of personal & family time I gave up to write it, I hope during the next few posts I can convey the fun I had in writing it, and the things I learned about along the way.  Once I’ve described the project, I’m going to get into the specifics of how I tackled the technical aspects, along with the problems I created for myself.

The initial plan was pretty simple.  I was going to write a compendium of board games, all of which were played in a turn-based fashion with other human players.  I’d write a simple server where you could register and create games and challenge other players.  The app would show you a list of the games you were playing, and let you play your moves.  To keep things simple, you’d have 7 days to make a move before you were automatically resigned.  Boardz was designed to be the kind of app you’d play while you were on the loo, waiting for a bus, etc.  The sort of game where you’d keep coming back every day, or every hour, to see where your opponents had moved and play your turn.  For reasons  I’ll come to later, Boardz has grown into a set of games you can play in many different ways, including with computer opponents.  I’ll talk about why I had to do that when we get to the app store…

I hoped that by offering a good choice of games, with turn based play, for a very small price ($1.99), I’d be onto a winner, despite the stiff competition from all the other board gaming apps out there.  My initial choices for games were Chess, Shogi (Japanese Chess), XiangQi (Chinese Chess) and Go.  The decidedly eastern flavour of the games was also part of the plan; I wanted to improve my knowledge of these games and play against human opponents, but I also thought this might distinguish the app from other board gaming apps out there.

I couldn’t see much wrong with this idea.  All I had to do was learn to use the iOS SDK on the phone, the Objective C programming language, design all the artwork, learn the rules of the games I wasn’t sure of (i.e. all of them except Chess), and figure out how to create an online database and call it over the web (with no web programming experience) <img src="http://www.chrismaughan.com/wp-includes/images/smilies/icon_smile.gif" alt=":-)" class="wp-smiley" />  To make the project all the more interesting, I wanted to do all the work myself on evenings and weekends, and I wanted to get it done in about 4 months.

Shoot forward about 12 months and apart from being tired and feeling like I hadn’t seen enough of my family, I had finished the game (or so I thought…)  A lot of different problems conspired to slow me down, but I got there eventually and posted it for the App Store approval process.  I was dreading this bit due to all the postings on the web about how difficult it was to get through approval.  I had a networking app that needed to behave correctly on Wifi, 3G, or with no connection, I had a bunch of board games that had to play well and by the rules, and features such as push notifications which had to play nice and work as expected.  Not to mention a server which had only been tested with a handful of accounts created by my friends.  I had not built the simple app I’d intended; Boardz had grown into quite a complex app for a single developer to manage, and I was nervous that the approval would fail badly.

[<img class="alignleft size-full wp-image-100" title="Boardz_Version_1" src="http://www.chrismaughan.com/wp-content/uploads/2011/09/Boardz_Version_11.png" alt="" width="331" height="616" />][2]In the end I shouldn’t have been too worried.  Although it took 2 weeks for Apple to approve the app it got through without comment and I got an email saying it was for sale half way through a pint of ‘Copper Dragon’ at the pub.  Receiving good news just after you’ve sat down in a pub for a night out is not what you need; trust me, the hangover is pretty bad afterwards.

The next day I signed  into iTunes Connect to see if I’d sold any copies.  I had!  A single copy at $1.99.  Sadly, that sale turned out to be the one my mate had bought while we were at the pub.  I knew of course that apart from the ‘What’s New’ category on iTunes, my app had no exposure at all and I was going to have to do something I didn’t want to get involved with &#8211; Marketing.

I started by emailing everyone I could think of; gaming associations, friends & family, app review websites.  Anything I could think of.  The app review websites were interesting; they either responded by saying they had a large queue of apps to review and they may not get to mine, or that they had a large queue of apps to review and they would get to mine if I paid about $100.  Although I’d started to sell a few copies per day, I figured paying for one review wouldn’t hurt, so I gave it a try, despite reservations that it shouldn’t be the way these things are done.  The reviewer turned out to write a fairly honest review of my app &#8211; they tested it pretty well and got back to me for my comments before posting the review.  The only major complaint was that a player couldn’t resign a game they’d created if nobody was joining it.  I responded to the reviewer saying that feature was already in review at Apple, and hurriedly added it that night and posted an update to iTunes Connect.  The resulting review was pretty fair for the first version of Boardz.  I think it described the app well, and I couldn’t argue with any of it.  It got 4 out of 5 stars (which to this day, depending on country, is what Boardz averages from users on the App Store).  Despite a nice review and my continuing efforts to market the app through emails, twitter, a website, and a facebook page,  I didn’t really see much change in sales.  The truth is, I still don’t.  I tend to sell around 10-20 copies a day, even of the latest version.  Although these numbers aren’t great, there are several reasons that keep me going on this project, even if I&#8217;ve slowed down a bit recently to catch my breath&#8230;

I’m quite proud of the app; although I’ve done quite a few updates, it’s got through the App Store first time, every time, including major changes.  I get very few bug reports, and the crash logs on iTunes Connect tell me that for most versions I’ve shipped a crash dump has never been gathered.  It’s a difficult thing to be an artist (which I suck at), programmer, QA department & Marketing department (which I suck at), but I think I did OK.

I love that people use the app every day.  I get really nice comments from users, feature requests, and a cool following of dedicated players.  In some ways, that makes it all worth it.  It’s hard to keep everyone happy, and I occasionally get stinker reviews; something I’ll talk about later.  Sure, the artwork could be better, and there are features that some people really want (particularly the Go players!), but in general, I managed to find a balance between shipping builds and adding features.

Boardz has enabled me to learn to play all these games, and particularly introduced me to Go.  Sometimes I think the whole project was worth it, just so I could see the magic in this simple board game.  I suspect I’ll spend a lifetime trying to get better, and never reach single digit kyu.  But I’m up for the challenge…

I understand a lot more of the market now, and the complex and simple reasons why I don’t sell a lot of copies, and I’ll cover that  in my next post, along with the features I added after I shipped the first version, including updates for iPhone 4 retina display,  iPad and Game Center.

For the time being, here&#8217;s a screenshot of the latest version of Boardz, showing off a brand new feature I&#8217;ve been working on adding: support for games played on the Dragon Go Server.  It&#8217;s a game I&#8217;m playing against the sensei, and losing badly I might add!  This is the iPad version, and as you can see the artwork has changed in subtle ways since that original version.  You can click the picture to see it at full resolution.

<p style="text-align: center;">
  <a href="http://www.chrismaughan.com/wp-content/uploads/2011/09/Boardz_1_6_0_161.png"><img class="aligncenter size-full wp-image-84" title="Boardz_1_6_0_16" src="http://www.chrismaughan.com/wp-content/uploads/2011/09/Boardz_1_6_0_161.png" alt="" width="776" height="596" /></a>
</p>

 [1]: http://click.linksynergy.com/fs-bin/click?id=Di1FsSLkUWk&offerid=146261.354171165&type=2&subid=0
 [2]: http://www.chrismaughan.com/wp-content/uploads/2011/09/Boardz_Version_11.png