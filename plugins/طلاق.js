let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, طلاقها بالتلته لو عندك دم😂*
*${toM(b)},*متزعليش🥺\n\*اجوزك سيد سيدو *`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['الطلاق','طلاق']
handler.group = true
export default handler
<<<<<<< HEAD

=======
>>>>>>> 458676d83fbaa8c9f42ad33f2d746e70402b8707
