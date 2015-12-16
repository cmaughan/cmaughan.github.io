---
id: 111
title: A History of Boardz, Part 2
author: cmaughan
layout: post
guid: http://www.chrismaughan.com/?p=111
permalink: /posts/a-history-of-boardz-part-2/111
aktt_notify_twitter:
  - yes
aktt_tweeted:
  - 1
dsq_thread_id:
  - 1576536200
categories:
  - Coding
tags:
  - App Store
  - Apple
  - Boardz
  - Chess
  - Game Center
  - Go
  - iPad
  - iPhone 4
  - Reviews
  - Shogi
  - XiangQi
---
[<img class="size-full wp-image-68 alignleft" style="margin: 6px;" title="BoardzBox" src="http://www.chrismaughan.com/wp-content/uploads/2011/09/7.jpg" alt="Boardz" width="100" height="100" />][1]

In part 1 I covered the development of Boardz up to shipping the first version.  I’d like to talk a little bit about the resulting reviews, and how these forced a course correction in the development.  I don&#8217;t think this course correction was necessarily the right move on my part, but we&#8217;ll get to that&#8230;

Once I got the first version out of the door, the reviews started to come in.  It&#8217;s pretty hard to live with bad reviews when you&#8217;ve put your heart and soul into a project, so I try to be fair minded and not lose it everytime somebody posts a less than happy response.  The good reviews make it all worth while, of course.  Here are a couple from the first version:

> This app is really great when you want to play but can&#8217;t have a board standing or if you live far from each other. Stable with a nice and easy to use interface, it&#8217;s simply great.

> I think this app has a lot of potential and is a good first start. A few things that would make it even better:  
> 1. Ability to chat with your opponent. Maybe put the chat messages on the reverse side of the board.  
> 2. Ranking system that you can start by setting yourself but will adjust over time.  
> 3. Handicap system to go with the ranking system.  
> Overall though the best app out there for playing Go right now because you don&#8217;t need to stay connected the while time.”

Good reviews tend to fall into these two categories &#8211; they are either along the lines of ‘great, love it’, or ‘great, but wouldn’t it be nice if…’.  I love getting either type, it’s a real validation of the work I put into these games.  Now let us look at a couple of bad ones:

> There is no computer AI in this software&#8230; you cannot play against a computer opponent. I have not used this game one time since purchasing/installing it. Completely worthless to me. Refund my money and I&#8217;ll remove this review. Yeah, I know&#8230; fat chance, right?

> Be Aware: Bought by mistake as this is online game only!!!Need Internet connection to play with other people!!

So what’s wrong with this?  Firstly, the reviewers plainly did not read the application description before downloading Boardz.  They just bought on impulse, realized the app didn’t do what they wanted, and wrote a 1-star review (dropping my average star rating, and hurting sales).  For the record, the first version of Boardz clearly described on the first line of the description that it was an app for playing turn-based board games with friends and family over the internet.  There is no way you would read that text and come away with the impression that it supported playing against the computer.  It is also obvious that the author of the first review didn’t go back and check what he downloaded before writing a bad review.  There’s no excuse for the second reviewer in my opinion &#8211; he’s admitting he got it wrong, and then damaging my star rating just because he can.

Secondly, the comment ‘Refund my money and I’ll remove this review’ demonstrates a common misconception about the app store &#8211;  that I can contact this reviewer or respond to his comment, and somehow pay him a refund.  I have no way to reach a reviewer, unless he uses a username that matches something I have in the Boardz database, or is easy to google for (many reviewers use a made up name, or even random characters like a swear-bubble from Asterix…).  I’ve actually expended effort in the past to track reviewers down, especially if they have a bug report I’d like to chase up.  The most frustrating part about this App Store policy is when somebody leaves a bug report in a review.  Typically you don’t get enough information in user reports and you have to chase down repro steps &#8211; which, of course, you can’t.  I’d also like to respond to reviews like this one and say ‘hey, it says in the description what the app can do &#8211; is there some way I can make it clearer?’  As for the refund, contacting Apple will sort that out for you, but few users actually do that or even realize that it is possible.

The review policy does force a developer down one particular route &#8211; and end users might argue that it’s a good one.  The only way to counter bad reviews is to ship a new version (which removes the previous reviews from your front page on the App Store) and add the features your users are asking for.  A friend of mine in the industry once told me he had heard the best strategy for launching an iPhone game is to release it under a development name, read the reviews, fix what is missing, and then release it under a new name with everything fixed.  He may have been joking, but it would certainly work.  Faced with a mounting list of complaints about not being able to play against the computer, and various other requests such as in-game chat support,  I decided to plough on and add these features.

Anyone who has written an AI opponent knows that it’s not a simple project.  As of today, I’ve implemented a simple draughts engine and a very complicated Go engine for Boardz &#8211; something I’ll talk about in a later post.  I’ve also used a couple of free engines for Chess and XiangQi, along with starting a side project to write a Shogi engine too.  I didn’t really want to embark on this work, but I could not see any way to keep users happy without doing it.  On reflection if I knew what I know now, I may well have ended the project at that point and left Boardz to fester as a purely turn-based internet app &#8211; what I’d always intended it to be.  I could have used all that extra development time to start a new, more promising project.  It&#8217;s really hard to walk away from your baby though, especially if you actually think it is a good product.

Along with the AI opponents, a new opportunity presented itself in the form of the iPad.  After the announcement, I felt it was worth having a shot at building an iPad version of Boardz to ship on launch day.  Since I missed the launch of the iPhone, it seemed like an opportunity not to be missed.  Apple were promising to highlight launch day apps, and I could do with the exposure, so it was worth a shot.  I worked tirelessly on a ‘Universal Binary’ version of Boardz &#8211; meaning that the same app would run on iPhone and iPad.  The iPad version had larger, more detailed graphics, and a chat window alongside the board on the same screen.  I learned the hard way while updating to the iPad version that a lot of my artwork was insufficient for the higher resolution.  In fact, I suspect 40% of my time on the Boardz project has been dedicated to artwork, and tweaking the renderer to make everything look OK.  Having an artist on board would have made my life a lot easier.  Nevertheless, the iPad version did let Boardz shine in some ways &#8211; the Kanji characters in games like Shogi look especially good on the higher res display.  I really enjoyed seeing that for the first time.<figure id="attachment_130" style="width: 511px;" class="wp-caption aligncenter">

[<img class="size-full wp-image-130 " title="Shogi2" src="http://www.chrismaughan.com/wp-content/uploads/2011/09/Shogi2.png" alt="" width="511" height="665" />][2]<figcaption class="wp-caption-text">Local play Shogi (click to enlarge)</figcaption></figure> 

Despite the stress of development under a timeline while working in my spare time, I managed to ship iPad support on day one (even though I couldn’t actually see it for myself, Apple assured me they tested it and it worked).  When I later got my iPad on UK launch day, I did spot some minor issues which Apple would undoubtedly have missed, but nothing that detracted from the utility of the App.  Below is a graph from March to June, showing sales in 2010.  Around the middle is the launch date of the iPad.  You can see that with the new features and launch of the iPad I started to get some more traction; although in all honesty, such small sales numbers don&#8217;t justify any of this work.  I also never really saw my app featured in any way on the app store, despite being one of the developers that followed all of Apple&#8217;s rules and got the app published on day one.  Sure, &#8216;Scrabble&#8217; had top-billing, but for the little guy toiling away on his app there wasn&#8217;t really any reward for working to this deadline.  There was (as there is now), and iPad specific category on the App Store &#8211; but it was very crowded, as you&#8217;d expect, even on day one.  I could probably have shipped a week later, and it would have made no difference.

[<img class="aligncenter size-full wp-image-112" title="AppViz-1" src="http://www.chrismaughan.com/wp-content/uploads/2011/09/AppViz-1.jpg" alt="" width="749" height="394" />][3]Once I got the iPad version out of the door, I got some curious new feedback from users:

> No In Person 2 Player.  Grrr&#8230;.

And&#8230;

> Doesn&#8217;t work without internet connection. No way to play with 2 players on one iPad. I wanted to play against someone else on an airplane, but it wouldn&#8217;t give me that option.

What&#8217;s interesting about these reviews is that they are suddenly requesting using my app as a board, for situations where you want to play against another player and you don&#8217;t one.  I guess it&#8217;s understandable on the new iPad format for people to want to do this, but curious that these two reviews arrived on launch day, almost immediately after the iPad shipped &#8211; not to mention the earlier problem that they just didn&#8217;t read the product description.  On launch day, there were several other iPad apps that had just this feature &#8211; they provided a board to play on, but with no engine/rules.  A cynical person might think that these comments were coming from my competition.  Regardless if this is true or not, I had obviously missed the opportunity to provide the same functionality.  Since it wasn&#8217;t too hard to do, I set about adding it.  In fact, it made my app more desirable than the others &#8211; at least from a game play perspective, because you could have the engine recognize the rules and take pieces off the board for you &#8211; something the other apps didn&#8217;t do.  Those apps did what I&#8217;d do in this situation &#8211; they made it a feature &#8220;Hey, you can even make up the rules!&#8221;, but I believe that&#8217;s probably not what you want most of the time.  With that small addition, along with various other bits and pieces, I think I made a difference to Boardz sales that lasts to this day, but as I&#8217;ve said, it probably wasn&#8217;t worth the effort.

For an iOS developer, it&#8217;s a fast-changing world out there.  If you&#8217;re a single guy, you could spend your life just keeping up with Apple&#8217;s releases of software and hardware.  The next challenges to come down the pipeline were iPhone 4 and Game Center.  iPhone 4 was pretty simple &#8211; the beautiful display on that device was easy to take advantage of, since I had most of the artwork I needed from the iPad project; the relative dimensions were very convenient for scaled up artwork.  Game Center offered another opportunity to get front and center, by featuring my app in the Game Center app, and allowing it to spread a little by word of mouth.  Along with Game Center, I even added the ability to post your victories to Facebook.  Making Boardz more social seemed like the best next step in its evolution, but like the iPad updates, these changes gave me small bumps instead of the big boost I hoped for.

I&#8217;ve slowed down development on Boardz recently.  It would be tempting to say there&#8217;s no point flogging a dead horse, but that&#8217;s not the reason.  I just got tired doing 2 jobs, and wanted to simplify things for a while.  That doesn&#8217;t mean I&#8217;m not plugging away at it, and as I mentioned last time, I&#8217;ve been looking at hooking it up to other servers on the internet instead of my own.  Other features such as allowing the user to moderate the score in Go, and export SGF files, etc. are also very nearly done.  Who knows, iPhone 5 might spring a surprise or two that I&#8217;ll have to deal with as well.  As you may have gathered, I&#8217;ve committed the business sin of getting too attached to my product.  I keep working on it because I love it (it&#8217;s still an App I use every day &#8211; as many users have told me they do).

Since this post has got a bit bigger than I anticipated, I&#8217;m going to save the &#8216;what went right/wrong&#8217; until the last part.  Then I&#8217;ll dig into a few of the interesting technical challenges I faced during the development.

 [1]: http://click.linksynergy.com/fs-bin/click?id=Di1FsSLkUWk&offerid=146261.354171165&type=2&subid=0
 [2]: http://www.chrismaughan.com/wp-content/uploads/2011/09/Shogi2.png
 [3]: http://www.chrismaughan.com/wp-content/uploads/2011/09/AppViz-1.jpg