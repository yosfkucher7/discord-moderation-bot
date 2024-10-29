module.exports = {
    name: 'unmute',
    description: 'Unmutes a member.',
    execute(message, args) {
        if (!message.member.permissions.has('MUTE_MEMBERS')) return message.reply("You don't have permission to do that!");
        
        const member = message.mentions.members.first();
        if (!member) return message.reply('Please mention a user to unmute.');
        
        const mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');
        if (!mutedRole) return message.reply('Muted role not found.');
        
        member.roles.remove(mutedRole);
        message.channel.send(`${member.user.tag} has been unmuted.`);
    }
};
