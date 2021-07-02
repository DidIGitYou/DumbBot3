module.exports = {
    name: 'skip',
	category: "Music",
	description: 'Skips the queue',
	cooldown: 2,
	usage: "join",
	guildOnly: true,
    run: async (client, message, args, user, text, prefix) => {

            if (!message.member.voice.channel) return message.channel.send("Please join a voice channel first!");

            client.player.skip(message);
    }
}