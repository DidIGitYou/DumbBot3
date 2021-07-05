const Canvas = require('canvas');
const Discord = require('discord.js');

module.exports = {
    name: 'bonk',
    category: 'Fun',
    Description: 'Bonks the mentioned person',
    usage: 'bonk <mention>',

    run: async (client, message, args, user, prefix, text) => {

        const canvas = Canvas.createCanvas(700, 250);
        const context = canvas.getContext('2d');

        const background = await Canvas.loadImage('../../images/bonk.jpg');

        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        const attachment = new MessageAttachment(canvas.toBuffer(), 'bonk.jpg');

        message.channel.send(`what`, attachment);
    }
}