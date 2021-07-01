const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    if (!kickUser) return message.reply('please specify a user to kick!')
    let kickReason = args.join(' ').slice(26)
    if (!message.member.hasPermission("MANAGE_MESSAGES", "KICK_MEMBERS")) return message.reply('you need the **Manage Messages** and **Kick Members** permission to kick!')
    if (kickUser.hasPermission("MANAGE_MESSAGES", "KICK_MEMBERS")) return message.channel.send('❌ **Cannot kick user because he/she is a moderator.**')

    let kickEmbed = new Discord.RichEmbed()
        .setColor(0xfbff17)
        .setTitle('Kick Log')
        .addField('Kicked User', `${kickUser}`, true)
        .addField('Kicked by', `<@${message.author.id}>`, true)
        .addField('Kicked in', message.channel, true)
        .addField('Reason', kickReason, true)

    let kickChannel = message.guild.channels.find(`name`, 'log')
    if (!kickChannel) return message.channel.send('**Error:** Cannot find channel to log.')

    message.guild.member(kickUser).kick(kickReason)
    kickChannel.send(kickEmbed)
}

module.exports.help = {
    name: "kick",
    aliases: []
}