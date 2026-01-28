const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

// BASIC TEST COMMANDS
bot.start(ctx => ctx.reply("🔥 Bot LIVE!"));
bot.help(ctx => ctx.reply("📖 Help is working"));
bot.command("ping", ctx => ctx.reply("🏓 Pong!"));

// IMPORTANT
bot.launch();
console.log("Bot started");
