require('dotenv').config();
const cod_api = require('call-of-duty-api')();


module.exports = {
    name: 'mpcheck',
    description: '########',
    async execute(client, message, args, Discord){
        if (!args[0]) return message.channel.send('Enter a username');
        if (!args[1]) return message.channel.send('Enter a password');

        let username = process.env.COD_USERNAME;
        let password = process.env.COD_PASSWORD;

        try{
            await cod_api.login(username, password);
            let data = await cod_api.CWmp(args[0], args[1]);

            const embed = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle("Title of the box")
            .setDescription("Description")
            .addFields({
                name: 'Game played', value: data.lifetime.all.properties.totalGamePlayed, inline: true}
            
            )
            .setFooter("COD stats")

            message.channel.send(embed);

            console.log(data.lifetime.all.properties);
        }
        catch(error){
            message.channel.send('There was an error fetching this player');
            throw error;

        }
    }
}