

const handler = async (m, {conn, text, usedPrefix, command}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.owner_addprem

  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
<<<<<<< HEAD:plugins/اضف-بريم.js
  const textpremERROR = `*[❗] اعمل منشن للشخص الي عايز تديه بريم مؤقت و اختار الوقت*\n\n*—◉ مثل:*\n*◉ ${usedPrefix + command} @${m.sender.split`@`[0]} 1*\n*◉ ${usedPrefix + command} 1 <منشن>*`;
=======
  const textpremERROR = `${tradutor.texto1[0]} ${usedPrefix + command} @${m.sender.split`@`[0]} 1*\n*◉ ${usedPrefix + command} 1 ${tradutor.texto1[1]}`;
>>>>>>> 6093090d6bdb9046f36110c7106d143430feaa83:plugins/owner-addprem.js
  if (!who) return m.reply(textpremERROR, null, {mentions: conn.parseMention(textpremERROR)});

  const user = global.db.data.users[who];
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  // let name = await conn.getName(who)
  const name = await '@' + who.split`@`[0];

  const ERROR = `${tradutor.texto2[0]} ${'@' + who.split`@`[0]} ${tradutor.texto2[1]}`;
  if (!user) return m.reply(ERROR, null, {mentions: conn.parseMention(ERROR)});

  const segundos10 = 10 * 1000; // 10 segundos en milisegundos
  const hora1 = 60 * 60 * 1000 * txt; // 1 hora
  const dia1 = 24 * hora1 * txt; // 1 día
  const semana1 = 7 * dia1 * txt; // 1 semana
  const mes1 = 30 * dia1 * txt; // 1 mes
  const now = Date.now();

  if (command == 'بريم' || command == 'userpremium') {
    if (now < user.premiumTime) user.premiumTime += hora1;
    else user.premiumTime = now + hora1;
    user.premium = true;
    const timeLeft = (user.premiumTime - now) / 1000; // tiempo restante en segundos
<<<<<<< HEAD:plugins/اضف-بريم.js
    const textprem1 = `*🎟️ مبروك لقد أصبحت مميز!!!*\n\n*✨ الاسم: ${name}*\n*🕐 الوقت: ${txt} ساعات*\n*📉 الثواني: ${timeLeft} ثواني*`;
=======
    const textprem1 = `${tradutor.texto3[0]} ${name} ${tradutor.texto3[1]}  ${txt} ${tradutor.texto4[0]} ${timeLeft} ${tradutor.texto5[0]}`;
>>>>>>> 6093090d6bdb9046f36110c7106d143430feaa83:plugins/owner-addprem.js
    m.reply(textprem1, null, {mentions: conn.parseMention(textprem1)});
  }

  if (command == 'بريم2' || command == 'userpremium2') {
    if (now < user.premiumTime) user.premiumTime += dia1;
    else user.premiumTime = now + dia1;
    user.premium = true;
    const timeLeft = (user.premiumTime - now) / 1000 / 60 / 60; // tiempo restante en horas
<<<<<<< HEAD:plugins/اضف-بريم.js
    const textprem2 = `*🎟️ مبروك لقد أصبحت مميز!!!*\n\n*✨ الاسم: ${name}*\n*🕐 الوقت: ${txt} ساعات*\n*📉 الثواني: ${timeLeft} ثواني*`;
=======
    const textprem2 = `${tradutor.texto3[0]}  ${name} ${tradutor.texto3[1]}  ${txt} ${tradutor.texto4[1]}: ${timeLeft} ${tradutor.texto5[1]}`;
>>>>>>> 6093090d6bdb9046f36110c7106d143430feaa83:plugins/owner-addprem.js
    m.reply(textprem2, null, {mentions: conn.parseMention(textprem2)});
  }

  if (command == 'بريم3' || command == 'userpremium3') {
    if (now < user.premiumTime) user.premiumTime += semana1;
    else user.premiumTime = now + semana1;
    user.premium = true;
    formatTime(user.premiumTime - now).then((timeleft) => {
<<<<<<< HEAD:plugins/اضف-بريم.js
      const textprem3 = `*🎟️ مبروك لقد أصبحت مميز!!!*\n\n*✨ الاسم: ${name}*\n*🕐 الوقت: ${txt} ساعات*\n*📉 الثواني: ${timeLeft} ثواني*`;
=======
      const textprem3 = `${tradutor.texto3[0]}  ${name} ${tradutor.texto3[1]}  ${txt} ${tradutor.texto4[2]} ${timeleft}*`;
>>>>>>> 6093090d6bdb9046f36110c7106d143430feaa83:plugins/owner-addprem.js
      m.reply(textprem3, null, {mentions: conn.parseMention(textprem3)});
    });
  }

  if (command == 'بريم4' || command == 'userpremium4') {
    if (now < user.premiumTime) user.premiumTime += mes1;
    else user.premiumTime = now + mes1;
    user.premium = true;
    formatTime(user.premiumTime - now).then((timeleft) => {
<<<<<<< HEAD:plugins/اضف-بريم.js
      const textprem4 = `*🎟️ مبروك لقد أصبحت مميز!!!*\n\n*✨ الاسم: ${name}*\n*🕐 الوقت: ${txt} ساعات*\n*📉 الثواني: ${timeLeft} ثواني*`;
=======
      const textprem4 = `${tradutor.texto3[0]}  ${name} ${tradutor.texto3[1]}  ${txt} ${tradutor.texto4[3]} ${timeleft}*`;
>>>>>>> 6093090d6bdb9046f36110c7106d143430feaa83:plugins/owner-addprem.js
      m.reply(textprem4, null, {mentions: conn.parseMention(textprem4)});
    });
  }
};
handler.help = ['بريم [@user] <days>'];
handler.tags = ['group'];
handler.command = ['بريم', 'userpremium', 'بريم2', 'userpremium2', 'بريم3', 'userpremium3', 'بريم4', 'userpremium4'];
handler.group = true;
handler.rowner = true;
export default handler;

async function formatTime(ms) {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  let timeString = '';
  if (days) {
    timeString += `${days} día${days > 1 ? 's' : ''} `;
  }
  if (hours) {
    timeString += `${hours} الساعات${hours > 1 ? 's' : ''} `;
  }
  if (minutes) {
    timeString += `${minutes} الدقايق${minutes > 1 ? 's' : ''} `;
  }
  if (seconds) {
    timeString += `${seconds} الثواني${seconds > 1 ? 's' : ''} `;
  }
  return timeString.trim();
}
