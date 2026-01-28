const { Telegraf } = require("telegraf");
const fs = require("fs");

const bot = new Telegraf(process.env.BOT_TOKEN);

// AUTO LOAD COMMAND FILES
fs.readdirSync("./commands").forEach((file) => {
  if (file.endsWith(".js")) {
    require(`./commands/${file}`)(bot);
  }
});

bot.launch();
console.log("Bot started");
