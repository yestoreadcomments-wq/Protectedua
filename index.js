// index.js
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Put your bot token here
const token = "MTQxMzQ5MzQ1MzY5Nzk3NDQ0Mw.G-FHnR.4PiW8o1oDmimn44cVpMfbmyg3OfP46nKsfK5Bs";

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
