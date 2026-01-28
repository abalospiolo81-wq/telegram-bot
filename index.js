/* =====================
   HELP / MENU
===================== */
bot.help(ctx => {
  ctx.reply(
`📌 COMMAND LIST

😂 FUN
/joke
/hug
/slap

🎮 GAMES
/dice
/8ball
/slots

🛡 ADMIN
/ban
/mute
/warn

ℹ️ INFO
/id
/ping`
  );
});

/* =====================
   FUN COMMANDS
===================== */
bot.command("joke", ctx => ctx.reply("😂 Bakit malungkot ang math? Kasi maraming problema."));
bot.command("hug", ctx => ctx.reply("🤗 Hug sent"));
bot.command("slap", ctx => ctx.reply("👋 Slap!"));

/* =====================
   GAMES COMMANDS
===================== */
bot.command("dice", ctx => ctx.reply("🎲 You rolled: " + Math.ceil(Math.random()*6)));
bot.command("8ball", ctx => ctx.reply("🎱 Yes."));
bot.command("slots", ctx => ctx.reply("🎰 | 🍒 | 🍋 | 🔔 |"));

/* =====================
   ADMIN COMMANDS
===================== */
bot.command("ban", ctx => ctx.reply("🚫 Ban (demo)"));
bot.command("mute", ctx => ctx.reply("🔇 Mute (demo)"));
bot.command("warn", ctx => ctx.reply("⚠️ Warning issued"));

/* =====================
   INFO COMMANDS
===================== */
bot.command("id", ctx => ctx.reply("🆔 Your ID: " + ctx.from.id));
bot.command("ping", ctx => ctx.reply("🏓 Pong!"));
