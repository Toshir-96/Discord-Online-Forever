const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err);
  setCustomPresence();
});

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.username}`);
  setCustomPresence();
});

function setCustomPresence() {
  bot.editStatus({
    name: 'With ur Mom',
    type: 0, // 0 for "Playing", adjust as needed
    status: 'dnd',
  });
}

bot.connect(); // Get the bot to connect to Discord
