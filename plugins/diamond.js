let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let thumb = 'https://telegra.ph/file/a75f1fae1fe7232b317d3.jpg'
let ArdXNasBot = `Hai ${ucapan} *NaRaa SHOP* 💕 dsni :D

*Top UP All Game Aman terpercaya*
*Tersedia diamond game Lengkap*

╔ TERSEDIA JUGA
╠ PULSA ALL OPERATOR
╠ TOKEN LISTRIK
╚ VOUCHER GAME dll
❱ *Menerima Lewat Pembayaran* ❰
*DANA - OVO - GOPAY*

Chat Nomor Admin 👇
Wa.me/6288220924312

*_Join Group kami untuk melakukan pembelian_*
https://chat.whatsapp.com/HPFwkIhRkzGFHmZ9rDVQ3U
`
conn.sendFile(m.chat, await(await fetch(thumb)).buffer(), 'file.AXS', ArdXNasBot, m)
}
handler.help = ['diamond']
handler.tags = ['main']
handler.command = /^diamond|pulsa(game|ml|freefire)$/i

module.exports = handler

}

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	
        return ucapanWaktu
}
