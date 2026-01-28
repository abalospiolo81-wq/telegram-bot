/* =====================
   MENUS
===================== */
bot.command("fun", ctx => ctx.reply("😂 FUN: /fun1 hanggang /fun50"));
bot.command("games", ctx => ctx.reply("🎮 GAMES: /game1 hanggang /game50"));
bot.command("admin", ctx => ctx.reply("🛡 ADMIN: /admin1 hanggang /admin50"));
bot.command("info", ctx => ctx.reply("ℹ️ INFO: /info1 hanggang /info50"));

/* =====================
   FUN (50)
===================== */
for (let i = 1; i <= 50; i++) {
  bot.command(`fun${i}`, ctx => ctx.reply(`😂 Fun command #${i}`));
}

/* =====================
   GAMES (50)
===================== */
for (let i = 1; i <= 50; i++) {
  bot.command(`game${i}`, ctx => ctx.reply(`🎮 Game command #${i}`));
}

/* =====================
   ADMIN (50)
===================== */
for (let i = 1; i <= 50; i++) {
  bot.command(`admin${i}`, ctx => ctx.reply(`🛡 Admin command #${i}`));
}

/* =====================
   INFO (50)
===================== */
for (let i = 1; i <= 50; i++) {
  bot.command(`info${i}`, ctx => ctx.reply(`ℹ️ Info command #${i}`));
}
