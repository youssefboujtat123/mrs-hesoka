import fetch from 'node-fetch';
import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
    try {
        let imgRes = await fetch('https://telegra.ph/file/d0804533786f9f57836db.jpg');
        let imgBuffer = await imgRes.buffer();
        let imgFileName = 'menu.jpg'; // Provide a filename for the image

        let d = new Date(new Date + 3600000)
        let locale = 'ar'
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
        let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        let user = global.db.data.users[m.sender]
        let { money, joincount } = global.db.data.users[m.sender]
        let { exp, limit, level, role } = global.db.data.users[m.sender]
        let { min, xp, max } = xpRange(level, global.multiplier)
        let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
        let more = String.fromCharCode(8206)
        let readMore = more.repeat(850)   
        let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
        let str = `
*『𝐌𝐀𝐒𝐓𝐄𝐑🌟』*
❴✾❵──━━━━❨🌟❩━━━━──❴✾❵
*❒↵📆 الـتـاريـخ:『${date}』*

*❒↵⏳وقـت نـشـط:『 ${uptime}』*

*❒↵👤مـسـتـخـدمـيـن:『${rtotalreg}』*

*❒↵📌 مـسـتـوى:『${level}』*

*❒↵🤖 خـبـرة:『${exp}』*

*❒↵🕷️ الـدور:『${role}』*

❴✾❵──━━━━❨🌟❩━━━━──❴✾❵

*❒↵💎 الـمـاس:『${limit}』*

*❒↵👾 عـمـلات:『${money}』*

*❒↵🪙 الـرمـوز:『${joincount}』*

*❒↵🎟️مـمـيـز:『${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}』*

*❒↵🎩 تـفـضـل الـقـائـمـة:『${taguser}』*

❴✾❵──━━━━❨🌟❩━━━━──❴✾❵
*🍁┋⬤↫ أوامـ📌ـر الـخـاصـة بـالـجـروب*
*❍↵│طرد🏯* 
*❍↵│ترقية🏯*
*❍↵│اعفاء🏯*
*❍↵│تحذير🏯*
*❍↵│حذف_تحذير🏯*
*❍↵│حذف🏯*
*❍↵│منشن🏯*
*❍↵│مخفي🏯*
*❍↵│المشرفين🏯*
*❍↵│لمنشن🏯*
*❍↵│بروفايل🏯*
*❍↵│الجروب🏯*
*❍↵│دعوه🏯*
*❍↵│تغيير_اللينك🏯*
*❍↵│لفل🏯*
*❍↵│الترحيب🏯*
*❍↵│المغادره🏯*
*❍↵│ايات🏯*
*❍↵│جروب قفل  فتح🏯*
*❍↵│خط🏯*
*❍↵│لينك🏯*
*❍↵│يومي🏯*
*❍↵│الماس🏯*
*❍↵│ترتيب_البنك🏯*
*❍↵│شراء🏯*
*❍↵│هجوم🏯*
◂ ━━━━┄༻🌟༺┄━━━━ ▸
*🍁┋⬤↫قـسـم الديـنـي*
*❍↵│حديث📿*
*❍↵│قران📿*
*❍↵│الله📿*
*❍↵│دين📿*
◂ ━━━━┄༻🌟༺┄━━━━ ▸
*🌐┋⬤↫ أوامـ📌ـر الـخـاصـة بـالـمؤسـسـيـن*
*❍↵│بريم🪽*
*❍↵│حذف_بريم🪽*
*❍↵│بان🪽*
*❍↵│فك🪽*
*❍↵│اطفاء🪽*
*❍↵│تفعيل🪽*
*❍↵│المبندين🪽*
*❍↵│إعادة🪽*
*❍↵│اعادةتشغيل🪽*
*❍↵│أدخل🪽*
*❍↵│ضيف_اكس_بي🪽*
*❍↵│ضيف_جواهر🪽*
◂ ━━━━┄༻🌟༺┄━━━━ ▸
*🌐┋⬤↫ الـــتـرفــيـه 🎮*
*❍↵│اكس او*
*❍↵│صراحه*
*❍↵│كت*
*❍↵│لو*
*❍↵│هل*
*❍↵│ترجم*
*❍↵│احزر*
*❍↵│زواج*
*❍↵│انطق*
*❍↵│تاج*
*❍↵│حكمه*
*❍↵│ميمز*
*❍↵│سوال*
◂ ━━━━┄༻🌟༺┄━━━━ ▸
*📊┋⬤↫ الـتحـويل 🔃*
*❍↵│ملصق🎗️*
*❍↵│سرقة🎗️*
*❍↵│لفيديو🎗️*
*❍↵│لصورة🎗️*
*❍↵│لانمي🎗️*
*❍↵│تخيل🎗️*
*❍↵│مكس🎗️*
*❍↵│لجواهر🎗️*
*❍↵│ستك🎗️*
*❍↵│تلجراف🎗️*
*❍↵│لكرتون🎗️*
*❍↵│باركود🎗️*
◂ ━━━━┄༻🌟༺┄━━━━ ▸
*👑┋⬤↫ الـصوتـيات 📢*
*❍↵│عميق📎*
*❍↵│منفوخ📎*
*❍↵│تخين📎*
*❍↵│صاخب📎*
*❍↵│سريع📎*
*❍↵│تخينن📎*
*❍↵│رفيع📎*
*❍↵│روبوت📎*
*❍↵│بطيء📎*
*❍↵│ناعم📎*
*❍↵│سنجاب📎*
❴✾❵──━━━━❨🌟❩━━━━──❴✾❵



`.trim()

        // Send image and caption together
        await conn.sendFile(m.chat, imgBuffer, imgFileName, str, m, false, { thumbnail: Buffer.alloc(0) });

    } catch (error) {
        console.error(error);
        conn.reply(m.chat, '[❗خطاء❗]', m);
    }
}

handler.command = /^(help|الاوامر|menu|أوامر|menu|اوامر)$/i
handler.exp = 20
handler.fail = null

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

