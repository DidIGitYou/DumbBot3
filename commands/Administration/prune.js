module.exports = {
    name: "prune",
    category: "Administration",
    aliases: ["bulkdelete"],
    description: ["Prune a channel!"],
    cooldown: 10,
    guildOnly: true,
    run: async (client, message, args, user, text, prefix) => {
        const amount = parseInt(args[0]);

        if (isNaN(amount))
        {
            return message.reply("That doesn't seem to be a valid number.")
        }
        else if (amount < 2 || amount > 100){
            return message.reply('The amount needs to be within 2 and 100!')

        }
        message.channel.bulkDelete(amount)
        return message.reply(`Deleted ${amount} messages!`)
    },
};