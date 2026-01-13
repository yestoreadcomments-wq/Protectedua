const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // Load .env

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Use the token from .env
const token = process.env.TOKEN;

client.once('ready', () => {
    console.log(`${client.user.tag} is online!`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (message.content === '*H') {
        message.channel.send('Works - congratulations');
    }
});

client.login(token);
