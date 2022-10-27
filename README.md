# Financial Transactions Heatmap

## Overview

This app gives a visual representation of when people transact the most throughout a year using a heatmap(Matrix chart). It pulls data from a json dump containing financial transactions of several
individual companies to generate to populate the chart.

![Financial Transactions Heatmap](/public/transactions-carter.png)

The “redder” highlights the higher negative accumulated transaction value for that day while the
“greener” highlights the higher positive accumulated transaction for that day. The sum of the debit and credit value makes up the net value for the day.

## Available Scripts

How to Use:

In the directory of a clone copy of this app, you can run:
### `yarn Install`
This installs the application dependencies.

Then run:
### `yarn start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

NB: Node Version : 16.13.0.