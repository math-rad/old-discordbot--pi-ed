const Discord = require("discord.js")
const BotClient = new Discord.Client({
    intents: ["GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
        "GUILD_SCHEDULED_EVENTS",
    ]
})

const {BotToken} = process.env
const BotChar = "!"

var LogCount = 1

function QLog(LogMessage) {
    console.log(`Log: ${LogCount}; Message: ${LogMessage}`)
    LogCount += 1
}

BotClient.on("messageCreate", (Message) => {
    QLog(`work you better; ${Message.content}`)
   const {content, author, bot, guild, reply} = Message
   if (bot || !content.startsWith(BotChar)) {
       QLog(`stopping because of either  bot:${bot} or msg:${!content.startsWith(BotChar)}`)
       return
   }

   const CommandString = content.substring(1)

   if (CommandString == "ping") {
        Message.reply("PONG!")
   }

   var EditLog = "````\n"

   if (CommandString == "init") {
       Message.reply("init'ing")

       const Channels = guild.channels.cache.filter()

       for (var Channel of channels) {
           if (!Channel.id == Message.channel.id) {
            EditLog.concat(`\nDelete: ${Channel.name}`)
            Channel.delete()
           }
            
       }

       EditLog.concat("\n```")

       Message.reply(EditLog)




   }




})
BotClient.on("ready", () => {
    QLog("Bot is now ready")
})

QLog(BotToken)


BotClient.on("messageCreate", (Message) => {
    if (Message.author.bot) {
        QLog("removing because of bot")
        return
    }

    const {Auther, content} = Message



})



QLog("Set message create")



BotClient.login(BotToken)

QLog(`Logged in, with token of: ${BotToken}`)