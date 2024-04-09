//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `□ منشن الشخص`
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `@${who.split`@`[0]} *[❗تحذير❗] تم حظر ياتيس*\n\n*—◉ لن تستطيع استخدام البوت حتي يتم إزالة الحظر*\n\n*—◉ كلم حد من المؤسسين  يشيل عنك البان ياتيس*`, m, { mentions: [who] })
}
handler.help = ['ban @user']
handler.tags = ['owner']
handler.command = /^بان$/i
handler.botAdmin = true

export default handler
