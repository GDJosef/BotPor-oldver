const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    if ([''].includes(!args[2])) return message.reply('please send a full question.')
    let eightball = ['🎱 **Yes**', '🎱 **No**', '🎱 **Maybe?**', '🎱 **You can try.**',
        '🎱 **I don\'t know**', '🎱 **Do you actually think you can do that?**',
        '🎱 **I have bad news...**', '🎱 **Uhhhhh.....**', '🎱 **Ask RoboTop, I dunno..**',
        '🎱 **NEVER**', '🎱 **Probably.**']

    let answer = Math.floor((Math.random() * eightball.length))
    message.channel.send(eightball[answer])
}

module.exports.help = {
    name: "8ball",
    aliases: ["8", "ball", "8b"]
}