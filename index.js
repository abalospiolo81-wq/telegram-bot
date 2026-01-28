const { Telegraf } = require("telegraf");
const fs = require("fs");
const path = require("path");

const bot = new Telegraf(process.env.BOT_TOKEN);

// load all command files
const commandsPath = path.join(__dirname, "commands");
fs.readdirSync(commandsPath).forEach(file => {
  require(`./commands/${file}`)(bot);
});

bot.launch();
console.log("🔥 Bot running with full command pack...");
