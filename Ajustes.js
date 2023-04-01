//Android Technology OFC
//Komi-San BOT
//haz un copia del archivo antes de editar 👍👍
const fs = require("fs")
const chalk = require("chalk")
//-------------------------------------//
//CONSOLA 👨🏻‍💻

//color del texto
global.colortext1 = 'cyanBright'
global.colortext2 = 'whiteBright'

//color del sub texto
global.colorsubtex1 = 'cyan'

//color del panel de control
global.colorpanel = 'cyan'

//FIN DE CONSOLA 👨🏻‍💻
//-------------------------------------//
//INICIO QR 📱💻

//nombre de la session
global.session = "session"

//navegador en el que se inicia session
//cambiar por 'Edge','Chrome','Safari','Firefox' etc
global.navegador = 'Safari'

//FIN INICIO QR 👨🏻‍💻
//-------------------------------------//
//OWNER DEL BOT 🤵🏻

//nombre del owner
global.ownername = "Gabby"

//numero del owner
global.owner = ['254106516012']

//tag del owner
global.ownertag = ['254106516012'] 

//locación del owner
global.location = "Peru"

//emoji del pais
global.paisicon = "🇵🇪"

//FIN OWNER DEL BOT 🤵🏻
//-------------------------------------//
//AJUSTES GENERALES BOT 🤖
//database
global.ntilinkytvid = []
global.ntnsfw = []
global.antitags = true

//IMAGENES 🧐🍷
global.thum = fs.readFileSync("./Komi-SanMedia/imagenes/komi-san.jpg")

global.log0 = fs.readFileSync("./Komi-SanMedia/imagenes/komi-san.jpg")

global.err4r = fs.readFileSync("./Komi-SanMedia/imagenes/komi-san.jpg")

global.thumb = fs.readFileSync("./Komi-SanMedia/imagenes/komi-san.jpg")
//FIN DE IMAGENES 🧐🍷
//-------------------------------------//
//OTROS AJUSTES 🔧
global.autoTyping = true

global.autoreadpmngc = true

global.autoReadGc = true

global.autoReadAll = true

global.autoRecord = true

global.available = true 
//FIN DE OTROS AJUSTES 🔧
//-------------------------------------//
//MENSAJES PERSONALIZADOS
global.mess = {
    success: '✓',
    admin: 'ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴇs sᴏʟᴏ ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs ᴅᴇʟ ɢʀᴜᴘᴏ 🤵🏻',
    botAdmin: 'ᴘᴀʀᴀ ᴜᴛɪʟɪᴢᴀʀ ᴇsᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇʟ ʙᴏᴛ ɴᴇᴄᴇsɪᴛᴀ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴅᴇʟ ɢʀᴜᴘᴏ 👥',
    owner: 'sᴏʟᴏ ᴇʟ ᴏᴡɴᴇʀ ᴘᴜᴇᴅᴇ ᴜsᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ 🧐',
    group: 'ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ sᴇ ᴘᴜᴇᴅᴇ ᴜᴛɪʟɪᴢᴀʀ ᴇɴ ɢʀᴜᴘᴏs 👥',
    private: 'ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ sᴇ ᴘᴜᴇᴅᴇ ᴜᴛɪʟɪᴢᴀʀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs 🕵🏻',
    bot: 'This feature is only for bot',
    wait: 'In process...',
    linkm: 'ᴅᴏɴᴅᴇ ᴇsᴛᴀ ᴇʟ ʟɪɴᴋ 😶?',
    error: 'ᴀʟ ᴘᴀʀᴇᴄᴇʀ ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴇᴊᴇᴄᴜᴛᴀʀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ.\nʟᴏ sᴏʟᴜᴄɪᴏɴᴇᴍᴏs ʟᴏ ᴍᴀs ᴀɴᴛᴇs ᴘᴏsɪʙʟᴇ. ツ\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'ᴘᴀʀᴀ ᴜsᴀʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴅᴇʙᴇ ᴅᴇ ᴇsᴛᴀʀ ᴇɴᴄᴇɴᴅɪᴅᴏ ʟᴀ ᴏᴘᴄɪᴏɴ ɴsғᴡ\nᴄᴏɴᴛᴀᴄᴛᴇsᴇ ᴄᴏɴ ᴇʟ ᴄʀᴇᴀᴅᴏʀ ᴏ ʟᴏs ᴀᴅᴍɪɴɪᴛʀᴀᴅᴏʀᴇs ᴅᴇʟ ɢʀᴜᴘᴏ 😅\n\n*_×͜× ᴀɴᴅʀᴏɪᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ ᴏғᴄ ×͜×_*',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
//-------------------------------------//
//FIN DE AJUSTES GENERALES BOT 🤖


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`\n${__filename} ʜᴀ sɪᴅᴏ ᴀᴄᴛᴜᴀʟɪᴢᴀᴅᴏ ᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ ✅`))
	delete require.cache[file]
	require(file)
})

