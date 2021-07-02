const Discord = require('discord.js');
module.exports = {
    name: 'play',
	category: "Music",
	description: 'Plays a song from youtube',
	cooldown: 2,
	usage: "join",
	guildOnly: true,
    run: async (client, message, args, user, text, prefix) => {

            if (!message.member.voice.channel) { 
                const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Play command')
                .setDescription('You have to join a voice channel first!')
            
              message.channel.send(embed);
                return;
        }

            let search = args.join(" ");

            if(!search) { 
                const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Play command')
                .setDescription('Please provide a proper search query!')
            
              message.channel.send(embed);
                return;
        }

            client.player.play(message, search)
    }
}