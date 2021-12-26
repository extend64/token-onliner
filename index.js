const Discord = require('discord.js-self');
const File = require('fs');

const channelID = "" // ChannelID

function joinVoice(token) {

  const client = new Discord.Client();

  client.login(token)
  
  client.on('ready', () => {
    
    console.log(`${client.user.tag} is online!`);
    
    const channel = client.channels.cache.get(channelID);
    
    if(!channel) return;
    
    channel.join().then(c => {
      
      c.voice.setSelfDeaf(false); // kulaklık
      c.voice.setSelfMute(true); // mikrofon
      
      console.log(`Ses kanalına girildi`)
      
      }).catch(e => {
        console.error(e);
      })
  })
}

const tokens = File.readFileSync('./tokens.txt', 'utf-8').split('\n');

tokens.forEach(t => joinVoice(t))
