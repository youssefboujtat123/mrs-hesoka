import {addExif} from '../lib/sticker.js';

const handler = async (m, {conn, text}) => {
<<<<<<< HEAD
  if (!m.quoted) throw '*[❗مساعده❗] منشن الاستسكر الي عايز تحط حقوقو وحط حقوقك جنب الامر*';
=======
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.sticker_wm

  if (!m.quoted) throw tradutor.texto1;
>>>>>>> 6093090d6bdb9046f36110c7106d143430feaa83
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
<<<<<<< HEAD
    if (!/webp/.test(mime)) throw '*[❗] حط اسم*';
    const img = await m.quoted.download();
    if (!img) throw '*[❗] حط حقوق*';
=======
    if (!/webp/.test(mime)) throw tradutor.texto2;
    const img = await m.quoted.download();
    if (!img) throw tradutor.texto3;
>>>>>>> 6093090d6bdb9046f36110c7106d143430feaa83
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
<<<<<<< HEAD
    else throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙰𝙻𝙶𝙾 𝙵𝙰𝙻𝙻𝙾.. 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝙷𝙰𝚈𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙸𝙳𝙾 𝙰 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚈 𝙷𝙰𝚈𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝚄 *';
=======
    else throw tradutor.texto3;
>>>>>>> 6093090d6bdb9046f36110c7106d143430feaa83
  }
};
handler.help = ['wm <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = /^حقوق|سرقه|wm$/i;
handler.limit = 3;
export default handler;
