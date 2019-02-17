const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`S-a spart cada!!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTQ2NzIyMTQzOTU0NjY1NDcz.D0sXvA.MSvSV5Y5fKSrCxxNyaEgaFZTbhU');
