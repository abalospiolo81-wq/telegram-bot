const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply("🔥 Bot LIVE!"));
bot.help(ctx => ctx.reply("✅ Help working"));
bot.command("ping", ctx => ctx.reply("🏓 Pong"));

bot.launch();
console.log("Bot started");
