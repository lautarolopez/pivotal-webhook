# Pivotal Tracker to Discord Webhhok

This is an intermediate app that uses Pivotal Tracker webhooks to notify the project changes into a Discord channel. 

### Prerequisites 

- GitHub free account
- Heroku free account
- Heroku Cli
- Discord server with admin privileges

### How to install

1. Clone the repo
2. Deploy it, I used Heroku. You can follow [this tutorial](https://dev.to/ms314006/deploy-your-deno-apps-to-heroku-375h)
3. Go to the Discord channel settings > integrations > Webhooks > New Webhook
3. Copy the Webhook URL
4. Create a new env variable ***DISCORD_WEBHOOK*** in your deploy enviroment with the URL
5. Now you can go to your project in Pivotal Tracker, and paste *https://youraplication.herokuapp.com*****/pivotal*** into more > webhooks > Add new webhook

And there you go! Every time you make a move in your pivotal project the app will send you a notification to Discord.
