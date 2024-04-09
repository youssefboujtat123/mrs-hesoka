function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['مؤسسين', 'المؤسسين'] 

<<<<<<< HEAD
export default handler
=======
export default handler
>>>>>>> 458676d83fbaa8c9f42ad33f2d746e70402b8707
