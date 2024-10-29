module.exports = {
    name: "userinfo",
    description: "Displays information about the user.",
    execute(message, args) {
        const user = message.mentions.users.first() || message.author;
        const member = message.guild.members.cache.get(user.id);
        message.channel.send(
            `**Username:** ${user.tag}\n**ID:** ${user.id}\n**Joined Server On:** ${member.joinedAt}\n**Account Created On:** ${user.createdAt}`
        );
    }
};
