
const { Client } = require ('discord.js');
const client = new Client();

client.on('message', msg => {
    if (msg.content === '&Estado') {
      msg.reply('100% NUEVO HOST');
    }
  });

client.on('ready' ,() => {
    console.log('Bot Listo On fire ');
});

client.on('message', message  => {
    console.log(message)
});
client.login();
