module.exports = {
    name: "ping",
    description: "Responds with Pong! and the bot's latency.",
    execute(message, args) {
        const latency = Date.now() - message.createdTimestamp;
        message.channel.send(`Pong! Latency is ${latency}ms.`);
    }
};
