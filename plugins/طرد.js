let handler = async (m, { conn, participants, usedPrefix, command }) => {
  // Message template for when no user is mentioned or quoted
  let kickte = `*مــنشـن الـشـخص !*`

  // Check if either user is mentioned or message is quoted, if not, reply with kickte
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 

  // Extract the user ID to be kicked
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender

  // Extract the group ID
  let owr = m.chat.split`-`[0]

  // Check if the user to be kicked is the bot itself
  if (user === conn.user.jid) {
      return m.reply('*تبي تطرد البوت ماتخاف ربك 🗿!*')
  }

  // Remove the user from the group
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove')

  // Reply with a message indicating the user has been kicked
  m.reply(`*دز امها ياتيس لا عاد اصيدك 😘 !*`) 
}

// Command information
handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['اطرد', 'طرد'] 
handler.premium = true
handler.group = true
handler.botAdmin = true

export default handler
