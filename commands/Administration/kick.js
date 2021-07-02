module.exports = {
    name: "kick",
    category: "Administration",
    aliases: ["throw"],
    description: "kicks a user!",
    cooldown: 10,
    guildOnly: true,
    run: async (client, message, args, user, text, prefix) => {
        
        var taggedUser = message.mentions.users.first();
            if (!taggedUser) {
                return message.reply('You need to tag a user to kick them!');
            }
            if (taggedUser) {
                // Now we get the member from the user
                const member = message.guild.member(taggedUser);
                // If the member is in the guild
                if (member) {
                  /**
                   * Kick the member
                   * Make sure you run this on a member, not a user!
                   * There are big differences between a user and a member
                   */
                  member
                    .kick('Optional reason that will display in the audit logs')
                    .then(() => {
                      // We let the message author know we were able to kick the person
                    
                      message.reply(`Successfully kicked ${taggedUser.tag}`);
                    })
                    .catch(err => {
                      // An error happened
                      // This is generally due to the bot not being able to kick the member,
                      // either due to missing permissions or role hierarchy
                      message.reply('I was unable to kick the member');
                      // Log the error
                      console.error(err);
                    });
                } else {
                  // The mentioned user isn't in this guild
                  message.reply("That user isn't in this guild!");
                }
                // Otherwise, if no user was mentioned
              } else {
                message.reply("You didn't mention the user to kick!");
              }
            }
        



    
    };

