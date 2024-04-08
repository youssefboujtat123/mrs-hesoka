let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `❒ منشن الشخص لفك البان`
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `*—◉ انفك عنك البان ياتيس 😘*
@${who.split`@`[0]} *—◉ لاتعديها عشان لا صفقك وجهك*`, m, { mentions: [who] })
}
handler.help = ['unban @user']
handler.tags = ['owner']
handler.command = /^فك$/i
handler.premium = true
handler.group = true
handler.botAdmin = true

export default handler

