const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("🔥 Bot LIVE na! Pwede sa DM at Groups 😎");
});

bot.help((ctx) => {
  ctx.reply("Commands:\n/start\n/help");
});

bot.launch();
console.log("Bot running...");
