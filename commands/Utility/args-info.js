module.exports = {
    name: "args-info",
    category: "Utility",
    cooldown: 5,
    usage: "args-info",
    description: "A useless command, displays args given with the message. An easter egg for people accessing the code!",
    guildOnly: true,
    run: async (client, message, args, user, text, prefix) => {
            if(!args.length){
                return message.channel.send(`You didn't provide any arguements ${message.author}!`)
            }
            message.channel.send(`Command name:${commandName} \nArguements: ${args} \nArgs length:${args.length}`)
        
    },
};