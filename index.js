/* =====================
   AUTO 200+ COMMANDS
===================== */

// FUN COMMANDS (50)
for (let i = 1; i <= 50; i++) {
  bot.command(`fun${i}`, ctx => {
    ctx.reply(`😂 Fun command #${i}`);
  });
}

// GAMES COMMANDS (50)
for (let i = 1; i <= 50; i++) {
  bot.command(`game${i}`, ctx => {
    ctx.reply(`🎮 Game command #${i}`);
  });
}

// INFO COMMANDS (50)
for (let i = 1; i <= 50; i++) {
  bot.command(`info${i}`, ctx => {
    ctx.reply(`ℹ️ Info command #${i}`);
  });
}

// ADMIN COMMANDS (50)
for (let i = 1; i <= 50; i++) {
  bot.command(`admin${i}`, ctx => {
    ctx.reply(`🛡 Admin command #${i}`);
  });
}
