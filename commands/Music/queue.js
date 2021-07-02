const distube = require('distube')
module.exports = {
    name: 'queue',
    aliases: ['q'],
    category: 'Music',
    description: 'Lists the queue',
    
    run: async ( client, message, args, text, user, prefix) => {

        if (!message.member.voice.channel) return message.channel.send("Please join a voice channel first!");

        const queue = client.player.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join('\n'))

    }
}