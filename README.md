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
## Technologies

Written in `TypeScript` and `Node.js`
Using `redis` to store the shortened URLs and their original long urls and `nginx` to forward routes

## Running the project

0. have docker and docker-compose installed
1. clone the repo
2. navigate to the new directory (containing the docker-compose.yml file)
3. run ``./start.sh``
3. or ``docker-compose up -d --build``
4. Use [postman](https://www.getpostman.com/) or an equivalent software to make use of the endpoints like explained below


## Endpoints

- POST _localhost/shorten?url={url}_
  - Using query params to pass the desired url

- GET _localhost/{id}_
  - Redirects using a temporary redirect

### Extra considerations and decisions
- I used nginx to match the /{id} to an internal api call instead of having the direct access
  - I tought using it would help with implementing using the base of tier.app
     - But I can only think of making that work using host files
- Could have gone with mongo from the start instead of redis and then maintaing the stats would be fairly easy
 - This way in order not to over complicate it I chose not to track the accesses
 - The 302 redirect would help in keeping track of them and still take advantage of browser-side caching
- Chose not to use a logger like winston to keep things simple and instead use only the console
- There's no testing, but the code is well structured and organized so it's fairly easy to add some usefull tests soon
