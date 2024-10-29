module.exports = {
    name: "serverinfo",
    description: "Displays information about the server.",
    execute(message, args) {
        const { name, memberCount, createdAt, owner } = message.guild;
        message.channel.send(
            `**Server Name:** ${name}\n**Members:** ${memberCount}\n**Created On:** ${createdAt}\n**Owner:** ${owner.user.tag}`
        );
    }
};
