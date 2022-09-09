let fs = require('fs')
let handler = async(m, { conn }) => {
conn.sendFile(m.chat, fs.readFileSync('./media/src_Ara.mp3'), '', '', m, true)
}
handler.customPrefix = /(Pesan)/i
handler.command = new RegExp

module.exports = handler
