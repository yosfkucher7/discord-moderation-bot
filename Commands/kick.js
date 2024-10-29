module.exports = {
    name: "kick",
    description: "Kick a member",
    async execute(message, args) {
        if (!message.member.permissions.has("KICK_MEMBERS")) {
            return message.reply("You don't have permission to kick members.");
        }

        const member = message.mentions.members.first();
        if (!member) return message.reply("Please mention a member to kick.");

        await member.kick();
        message.channel.send(`${member.user.tag} has been kicked.`);
    }
};
