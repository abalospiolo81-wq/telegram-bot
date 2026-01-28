const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

/* BASIC */
bot.start(ctx => ctx.reply("🤖 Bot LIVE! Type /help"));
bot.command("ping", ctx => ctx.reply("🏓 Pong!"));
bot.command("hello", ctx => ctx.reply("Hello 👋"));
bot.command("help", ctx => {
  ctx.reply(
`📌 COMMANDS
/basic
/fun
/group
/admin`
  );
});

/* FUN */
bot.command("joke", ctx => ctx.reply("😂 Bakit malungkot ang math? Kasi maraming problema."));
bot.command("hug", ctx => ctx.reply("🤗 Hug sent"));
bot.command("slap", ctx => ctx.reply("👋 Slap!"));
bot.command("dice", ctx => ctx.reply("🎲 You rolled: " + Math.ceil(Math.random()*6)));
bot.command("8ball", ctx => ctx.reply("🎱 Yes."));
bot.command("ship", ctx => ctx.reply("❤️ 89% compatible"));
bot.command("truth", ctx => ctx.reply("🤫 Anong sikreto mo?"));

/* GROUP */
bot.command("rules", ctx => ctx.reply("📜 Rules:\n1. Be nice\n2. No spam"));
bot.command("id", ctx => ctx.reply("🆔 Your ID: " + ctx.from.id));
bot.command("groupinfo", ctx => {
  if (!ctx.chat.title) return ctx.reply("DM ito");
  ctx.reply("👥 Group: " + ctx.chat.title);
});

/* ADMIN (group only) */
bot.command("ban", async ctx => {
  if (!ctx.chat.type.includes("group")) return;
  if (!ctx.message.reply_to_message) return ctx.reply("Reply to user to ban.");
  await ctx.kickChatMember(ctx.chat.id, ctx.message.reply_to_message.from.id);
  ctx.reply("🚫 User banned");
});

bot.command("mute", ctx => ctx.reply("🔇 Mute (demo)"));
bot.command("warn", ctx => ctx.reply("⚠️ Warning issued"));

bot.launch();
console.log("🔥 Bot running with ALL-IN commands");
