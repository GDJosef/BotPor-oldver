const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    if (!banUser) return message.reply('please specify a user to ban!')
    let banReason = args.join(' ').slice(26)
    if (!message.member.hasPermission("MANAGE_GUILD", "BAN_MEMBERS")) return message.reply('you need the **Manage Server** and **Ban Members** permission to ban!')
    if (banUser.hasPermission("MANAGE_GUILD", "BAN_MEMBERS")) return message.channel.send('❌ **Cannot ban user because he/she is a moderator.**')

    let banEmbed = new Discord.RichEmbed()
        .setColor(0xed1524)
        .setTitle('Ban Log')
        .addField('Banned User', `${banUser}`)
        .addField('Banned by', `<@${message.author.id}>`)
        .addField('Banned in', message.channel)
        .addField('Reason', banReason)

    let banChannel = message.guild.channels.find(`name`, 'log')
    if (!banChannel) return message.channel.send('**Error:** Cannot find channel to log')

    message.guild.member(banUser).ban(banReason)
    banChannel.send(banEmbed)
}

module.exports.help = {
    name: "ban",
    aliases: []
}