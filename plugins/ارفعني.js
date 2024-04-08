const handler = async (_0x1730a3, { conn: _0x22de6a, isAdmin: _0x51b82d }) => {
  const _0x5200fb = 'fromCharCode'; // Decoded variable name

  // If the sender is the bot itself, return
  if (_0x1730a3[_0x5200fb]) return;

  // If the sender is already an admin, throw an error
  if (_0x51b82d) throw 'Error';

  try {
      // Promote the mentioned user to admin
      await _0x22de6a[_0x5200fb](_0x1730a3.chat, [_0x1730a3['quotedMsgObj']['sender']['id']], 'promote');
  } catch {
      // If there's an error, send a message indicating failure
      await _0x1730a3.reply('*[❗] ايف مش قادر*');
  }
};

// Regular expression to match the command for promoting to admin
handler.command = /^ارفعني|adm$/i;

// Flags for the handler
handler._isCommand = true;
handler._isPromoted = true;
handler._isUser = true;

// Export the handler function
export default handler;
