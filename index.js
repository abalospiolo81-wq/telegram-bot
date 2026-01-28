const { Telegraf } = require("telegraf");

/* =====================
   INIT BOT (MUST BE FIRST)
===================== */
const bot = new Telegraf(process.env.BOT_TOKEN);

/* =====================
   BASIC
===================== */
bot.start(ctx => ctx.reply("🔥 Bot LIVE!"));
bot.help(ctx => ctx.reply("Try /cmd1 hanggang /cmd200"));

bot.command("test", ctx => ctx.reply("✅ Gumagana na!"));

/* =====================
   AUTO 200+ COMMANDS
===================== */
for (let i = 1; i <= 200; i++) {
  bot.command(`cmd${i}`, ctx => {
    ctx.reply(`Command #${i} working`);
  });
}

/* =====================
   FALLBACK (ANY TEXT)
===================== */
bot.on("text", ctx => {
  ctx.reply("🤖 Bot active");
});

/* =====================
   LAUNCH
===================== */
bot.launch();
console.log("Bot started successfully");
