
let handler = async (m, { conn, text }) => {
  let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.reply(m.chat,`فين الرساله الي عايز تمسحها!`, m)
delete conn.game[room.id]
await conn.reply(m.chat, `تم الحذف`, m)
}
handler.help = ['delttt']
handler.tags = ['game']
<<<<<<< HEAD
handler.command = ['حذف', 'delttt', 'delxo']
=======
handler.command = ['حذففف', 'delttt', 'delxo']
>>>>>>> 458676d83fbaa8c9f42ad33f2d746e70402b8707

export default handler
