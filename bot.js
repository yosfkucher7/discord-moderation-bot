require('dotenv').config();
const { Client, Intents } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
});

// Check if the commands folder exists
const commandsPath = path.join(__dirname, 'commands');
if (!fs.existsSync(commandsPath)) {
    console.error("The commands folder does not exist!");
} else {
    console.log("The commands folder exists.");
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (!message.content.startsWith('!') || message.author.bot) return;

    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    const command = commandFiles.find(file => file === `${commandName}.js`);

    if (command) {
        const commandModule = require(`./commands/${command}`);
        commandModule.execute(message, args);
    } else {
        message.channel.send("Unknown command!");
    }
});

client.login(process.env.TOKEN);
