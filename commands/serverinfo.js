const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Displays information about the server.',
    execute(message) {
        const guild = message.guild;

        // Fetch the owner member
        const owner = guild.members.cache.get(guild.ownerId);

        // Fallback if the owner is not found
        const ownerTag = owner ? owner.user.tag : 'Unknown';

        const name = guild.name;
        const memberCount = guild.memberCount;
        const createdAt = guild.createdAt.toDateString();

        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Server Information')
            .setDescription(`**Server Name:** ${name}\n**Members:** ${memberCount}\n**Created On:** ${createdAt}\n**Owner:** ${ownerTag}`);

        message.channel.send({ embeds: [embed] });
    }
};
