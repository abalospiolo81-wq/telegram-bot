const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply("🔥 Bot LIVE! Type /help"));

bot.help(ctx => ctx.reply("Try /test"));

bot.command("test", ctx => ctx.reply("✅ Gumagana na!"));

/* AUTO 200 COMMANDS */
for (let i = 1; i <= 200; i++) {
  bot.command(`cmd${i}`, ctx => {
    ctx.reply(`Command #${i} working`);
  });
}

bot.launch();
console.log("Bot started");
