module.exports = {
    name: 'mute',
    description: 'Mutes a member.',
    execute(message, args) {
        if (!message.member.permissions.has('MUTE_MEMBERS')) return message.reply("You don't have permission to do that!");
        
        const member = message.mentions.members.first();
        if (!member) return message.reply('Please mention a user to mute.');
        
        const mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');
        if (!mutedRole) return message.reply('Muted role not found. Please create a role named "Muted" with appropriate permissions.');
        
        member.roles.add(mutedRole);
        message.channel.send(`${member.user.tag} has been muted.`);
    }
};
