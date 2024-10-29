module.exports = {
    name: 'warn',
    description: 'Warns a member.',
    execute(message, args) {
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply("You don't have permission to do that!");
        
        const member = message.mentions.members.first();
        if (!member) return message.reply('Please mention a user to warn.');
        
        const reason = args.slice(1).join(' ') || 'No reason provided';
        
        message.channel.send(`${member.user.tag} has been warned. Reason: ${reason}`);
        
        const logChannel = message.guild.channels.cache.find(channel => channel.name === 'logs');
        if (logChannel) logChannel.send(`Warning issued to ${member.user.tag} by ${message.author.tag}. Reason: ${reason}`);
    }
};
