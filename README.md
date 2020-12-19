# TIER Mobility backend coding challenge

 this challenge we're asking you to spice up your life with your very own URL Shortener!

We've all seen sites like bit.ly that allow you to shorten a URL into something... well... shorter! It's time to make your own.

There are roughly four parts to this challenge:

Make a small API app that receives in a URL with a stack of your choice.
Using the supplied URL, generate a unique URL with the base of tier.app. It should be generated keeping uniqueness in mind.
Return the shortened URL.
Bonus: track the visits in a second DB table for stats.
It sounds more complex but breaking it down into the above steps should help you tackle the problem more effectively. Don’t worry if you don’t finish everything.

Keep in mind that other developers are going to take over the app soon. They want to be able to be productive soon and they know where you live. 😁

----
----
## Running the project

0. have docker and docker-compose installed
1. clone the repo
2. navigate to the directory containing the docker-compose.yml file
3. run ``docker-compose up -d --build`` or ``./start.sh``
4. Use [postman](https://www.getpostman.com/) or an equivalent software to make use of the endpoints like explained below
## Endpoints

- POST _localhost:3000_/
  - ...
- GET _localhost:3000_/
  - ...
### Extra considerations and decisions
...
