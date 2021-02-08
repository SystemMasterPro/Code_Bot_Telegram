const {Telegraf} = require('telegraf');
// Le pasamos 
const bot = new Telegraf('agrega aqui tu token');
// /COMANDOS
bot.start((ctx) => ctx.reply('BIENVENIDO ESTE ES UN GRUPO PRO! TE SALUDA EL MEJOR BOT DEL MUNDO!'));
bot.help((ctx) => ctx.reply('NECESITAS AYUDA?'));
bot.on('sticker', (ctx) => ctx.reply('TE GUSTAN LOS STIKERS 👍'));
bot.hears('software', (ctx) => ctx.reply('Alguien Dijo Software? Me encantan esos temas!'));
bot.settings((ctx) => ctx.reply('Para mas configuraciones dirigase al bot Father en Telegram!'));
bot.command(['pro', 'PRO', 'Pro'], (ctx) => {
    ctx.reply('ERES UN MASTER PRO!');
});
bot.on('text', ctx => {
  ctx.reply('ESCRIBE SIN MIEDO NI TEMOR CRACK!');
});
bot.mention('BotFather', (ctx) => {
    ctx.reply('Mencionaste a mi maestro BOT!')
});
bot.phone('+0961341616', (ctx) => {
  ctx.reply('Telefono perteneciente a RichardDev')
});
bot.hashtag('coding', (ctx) => {
    ctx.reply('HAS LLAMADO A ALGUIEN!')
});
bot.launch();