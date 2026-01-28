const { Telegraf } = require("telegraf");
const fs = require("fs");
const path = require("path");

const bot = new Telegraf(process.env.BOT_TOKEN);

function loadCommands(dir) {
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      loadCommands(full);
    } else if (file.endsWith(".js")) {
      require(full)(bot);
    }
  });
}

loadCommands("./commands");

bot.launch();
console.log("Bot started");
