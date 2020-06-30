
const { Client } = require ('discord.js');
const client = new Client();

function presence(){
  client.user.setPresence({
     status: "online",
     activity: {
        name: "Undertale",
        type: "PLAYING"
     }
  });
}

client.on('ready' ,() => {
  console.log('Bot Listo On fire ');
  presence();
});


client.on('message', msg => {
    if (msg.content === '&Estado') {
      msg.reply('NUEVO HOST');
    }
  });


client.on('message', message  => {
    console.log(message)
});

client.on("guildMemberAdd", miembro =>{
  var Canal = client.channels.cache.get(("ID Canal"));
  Canal.send("Bienvenido <@" + miembro.id + "> al servidor.\n\nEsperemos que la pases bien :). :stuck_out_tongue_winking_eye: ");
});
client.login("token");
