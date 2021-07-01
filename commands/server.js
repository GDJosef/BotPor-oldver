const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

        message.reply('check your DMs!')
    message.author.send('**Join the BotPor Support Server!**\nhttps://discord.gg/TrEzsSR')
}

module.exports.help = {
    name: "server",
    aliases: ["botserver", "supportserver"]
}