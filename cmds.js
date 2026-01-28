module.exports = (bot) => {
  for (let i = 1; i <= 200; i++) {
    bot.command(`cmd${i}`, (ctx) => {
      ctx.reply(`✅ Command #${i} working`);
    });
  }
};
