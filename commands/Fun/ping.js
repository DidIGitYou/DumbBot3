module.exports = {
	name: 'pingpong',
	category: "Fun",
	description: 'Ping!',
	cooldown: 2,
	usage: "pingpong",
	guildOnly: true,
	run: async (client, message, args, user, text, prefix) => {
		message.channel.send('Pong.');
    },
};