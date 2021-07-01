const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let dice6 = ['🎲 **1**', '🎲 **2**', '🎲 **3**', '🎲 **4**', '🎲 **5**', '🎲 **6**']

    let dice6roll = Math.floor((Math.random() * dice6.length))
    message.channel.send(dice6[dice6roll])
}

module.exports.help = {
    name: "dice",
    aliases: ["die", "d"]
}