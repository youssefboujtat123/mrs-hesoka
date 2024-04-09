const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
<<<<<<< HEAD
<<<<<<< HEAD:plugins/منشن.js
  const oi = `*الرساله:* ${pesan}`;
  let teks = `*⺀『𝐌𝐀𝐒𝐓𝐄𝐑🌟』⺀*\n\n❏ ${oi}\n\n❏ *المنشن:*\n`;
=======
  const oi = `${tradutor.texto1[0]} ${pesan}`;
  let teks = `${tradutor.texto1[1]}  ${oi}\n\n${tradutor.texto1[2]}\n`;
>>>>>>> 6093090d6bdb9046f36110c7106d143430feaa83:plugins/gc-tagall.js
=======
  const oi = `*الرساله:* ${pesan}`;
  let teks = `*⺀『𝐌𝐀𝐒𝐓𝐄𝐑🌟』⺀*\n\n❏ ${oi}\n\n❏ *المنشن:*\n`;
>>>>>>> 458676d83fbaa8c9f42ad33f2d746e70402b8707
  for (const mem of participants) {
    teks += `┣➥ @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└* 『𝐌𝐀𝐒𝐓𝐄𝐑🌟』\n\n*▌│█║▌║▌║║▌║▌║▌║█*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tag|منشن|م|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;

