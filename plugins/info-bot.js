let handler = async (m, { conn }) => {
let ArdXNasBot = `*── 「 INFO 」 ──*
▢ *IG NASIR*:
▢ *IG ARDI*:
• *SC*: _https://github.com/logasland/ArdXNas-Bot_
`
conn.sendButton(m.chat, ArdXNasBot, wm, null, [['Menu', '.menu'],['Owner', '.owner']], m)
}
handler.help = ['infosc']
handler.tags = ['main']
handler.command = /^info(sc|script|scriptbot)?$/i

handler.exp = 30

module.exports = handler
