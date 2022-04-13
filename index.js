const Discord = require('discord.js-self');
const File = require('fs');

const channelID = "" // ChannelID

function joinVoice(token) {

  const client = new Discord.Client();

  client.login(token)
  
  client.on('ready', () => {
    console.log(`${client.user.tag} is online!`);
  })

const tokens = File.readFileSync('./tokens.txt', 'utf-8').split('\n');

tokens.forEach(t => joinVoice(t))
