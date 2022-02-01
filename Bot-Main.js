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

var LogCount = 1

function QLog(LogMessage) {
    console.log(`Log: ${LogCount}; Message: ${LogMessage}`)
    LogCount += 1
}


BotClient.on("ready", () => {
    QLog("Bot is now ready")
})

QLog(BotToken)


BotClient.on("messageCreate", (Message) => {
    QLog("Message created")
    QLog("Message:")
    QLog(Message)
    QLog(Message.content)
    if (Message.author.bot) {
        QLog("removing because of bot")
        return
    }

    const {Auther, content} = Message

    if (Content == "ping") {
        QLog("message was ping :D")
        Message.reply("pong")
        QLog("message should have replied")
    }
})

QLog("Set message create")



BotClient.login(BotToken)

QLog(`Logged in, with token of: ${BotToken}`)
