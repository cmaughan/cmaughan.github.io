+++
showonlyimage = false
draft = false
image = "img/portfolio/crypto/crypto.png"
date = "2021-07-01T18:25:22+05:30"
title = "Crypto Bot"
weight = 0
+++

The nice part of cryptocurrency is how easy it is to talk to the exchanges and gather data. This project scans cryptocurrency futures for opportunities.

<!--more-->

To assist with trading on the Binance Futures market, I created a simple scanner that can gather real-time trading information, rank instruments, and draw candlestick charts. The bot can also make decisions and trade, though the interesting part for me was the plumbing: market data, charting, exchange APIs, and trying to keep the decision-making visible enough that it did not feel like consulting a magic spreadsheet.

I experimented with gathering Twitter feeds too, in order to do some sentiment analysis. Crypto is noisy, twitchy, and occasionally ridiculous, which makes it a surprisingly good playground for testing data pipelines.

![Crypto Bot][1]

[1]: /img/portfolio/crypto/crypto.png
