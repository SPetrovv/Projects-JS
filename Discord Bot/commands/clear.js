module.exports = {
    name: 'clear',
    description: 'Clear messages!',
    async execute(client, message, args) {
        if(!args[0]) return message.reply("Enter the amount of message you want to clear!");
        if(!isNaN(args[0])) return message.reply("Enter a real number!");

        await message.channel.messages.fetch({limit: args[0]}).then(message =>{
            message.channel.bulkDelete(messages);
        });
    }
}