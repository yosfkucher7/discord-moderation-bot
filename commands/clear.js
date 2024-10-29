module.exports = {
    name: 'clear',
    description: 'Clears a specified number of messages.',
    async execute(message, args) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply("You don't have permission to do that!");

        const amount = parseInt(args[0]);
        if (isNaN(amount) || amount <= 0 || amount > 100) return message.reply('Please enter a number between 1 and 100.');

        await message.channel.bulkDelete(amount, true);
        message.channel.send(`Deleted ${amount} messages.`).then(msg => setTimeout(() => msg.delete(), 3000));
    }
};
