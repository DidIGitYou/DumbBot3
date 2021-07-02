const Discord = require('discord.js');
module.exports = {
    name: "avatar",
    category: "Utility",
    alias: ["av"],
    cooldown: 3,
    usage: "avatar",
    description: ["Displays the avatar of a users/Multiple users!"],
    run: async (client, message, args) => {

        //get random value from array
        var colors = ["#E036BC","#1096F3","#63F310","#F35110", "#F31070"];
        var randColor = colors[Math.floor(Math.random() * colors.length)];

        
        if (!message.mentions.users.size)
        {
            const embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}'s avatar`)
            .setColor(`${randColor}`)
            .setDescription(`${message.author.username}'s profile picture`)
            .setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024}));
        return message.channel.send(embed);
        }
        const avatarList = message.mentions.users.map(user => {
            const Embed = new Discord.MessageEmbed()
            .setTitle(`${message.mentions.users.first().username}'s avatar`)
            .setColor(randColor)
            .setDescription(`${message.mentions.users.first().username}'s profile picture`)
            .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024}));
        return message.channel.send(Embed);
        })
       
 
        
    },
};