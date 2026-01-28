const { Telegraf } = require("telegraf");
const fs = require("fs");
const path = require("path");

const bot = new Telegraf(process.env.BOT_TOKEN);

const commandsPath = path.join(__dirname, "commands");

if (fs.existsSync(commandsPath)) {
  fs.readdirSync(commandsPath).forEach(file => {
    if (file.endsWith(".js")) {
      require(`./commands/${file}`)(bot);
    }
  });
} else {
  console.log("commands folder not found");
}

bot.launch();
console.log("Bot started");
