const Discord = require('discord.js')
const bot = new Discord.Client({disableEveryone: true})

const fs = require('fs')
bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()

fs.readdir('./commands/', (err, files) => {

    if (err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if (jsfile.length <= 0) {
        console.log('Cannot find files.')
        return
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        bot.commands.set(props.help.name, props)
        console.log(`${f} loaded!`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name)
        })
    })

})

const token = "REDACTED";

const PREFIX = 'b!'

bot.on('ready', () => {
    console.log("Connected as " + bot.user.tag)
})

bot.on('message', message => {

    if (message.content.indexOf(PREFIX) !== 0) return;

    let args = message.content.slice(PREFIX.length).trim().split(' ')
    let messageArray = message.content.split(' ')
    let cmd = args.shift().toLowerCase()
    let command;

    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd)
    } else {
        command = bot.commands.get(bot.aliases.get(cmd))
    }

    command.run(bot, message, args)

    let commandFile = bot.commands.get(cmd.slice(PREFIX.length)) || bot.commands.get(bot.aliases.get(cmd.slice(PREFIX.length)))
    if (commandFile) commandFile.run(bot, message, args)

    switch (args[0]) {

    }
})

bot.on('ready', () => {
    bot.user.setActivity("BotPor | b!help")
})

bot.login(token)