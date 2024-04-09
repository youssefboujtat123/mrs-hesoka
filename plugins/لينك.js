import fs from 'fs';
<<<<<<< HEAD

const handler = async (m, {conn, args}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_link

  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
<<<<<<< HEAD:plugins/لينك.js
=======
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
>>>>>>> 458676d83fbaa8c9f42ad33f2d746e70402b8707
      title: 'لينك الجروب',
      body: 'VENOM 𝐵𝛩𝑇',
      previewType: 0, thumbnail: fs.readFileSync('./Menu.jpg'),
      sourceUrl: `https://chat.whatsapp.com/Bu7cwDjLYwLJ93yyUD1tE1`}}});
<<<<<<< HEAD
=======
      title: tradutor.texto1[0],
      body: '𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝',
      previewType: 0, thumbnail: fs.readFileSync('./Menu2.jpg'),
      sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}});
>>>>>>> 6093090d6bdb9046f36110c7106d143430feaa83:plugins/gc-link.js
=======
>>>>>>> 458676d83fbaa8c9f42ad33f2d746e70402b8707
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^لينك|link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;