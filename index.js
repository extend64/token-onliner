const Discord = require('discord.js-self');
const fs = require('fs');

function online(token) {

  const client = new Discord.Client();

  client.login(token)
  
  client.on('ready', () => {
    console.log(`${client.user.tag} is online!`);
  })

const tokens = fs.readFileSync('./tokens.txt', 'utf-8').split('\n');

tokens.forEach(t => online(t))
