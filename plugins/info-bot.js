let fs = require('fs')
let handler = async (m, { conn }) => {
let ArdXNasBot = `*─ 「 INFO - BOT - OWNER 」 ─*
▢ *IG NASIR*:
▢ *IG ARDI*:
• *SC*: _https://github.com/logasland/ArdXNas-Bot_
`
conn.sendFile(m.chat, fs.readFileSync('./src/blackpink.png'), 'file.AXS', ArdXNasBot, m)
//conn.sendButton(m.chat, ArdXNasBot, wm, null, [['Menu', '.menu'],['Owner', '.owner']], m)
}
handler.help = ['infosc']
handler.tags = ['main']
handler.command = /^info(sc|script|scriptbot)?$/i

handler.exp = 30

module.exports = handler
