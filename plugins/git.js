const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/232HsEg.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `𝑪𝒐𝒔𝒎𝒊𝒄 𝒃𝒐𝒕 CODDED BY KHADHER
Creator number 👉: wa.me/27634923280

Githublink (Setup)  👇: github.com/van-reebeck/TSHEPHANG

DEPLOYE  👇:  https://heroku.com/deploy?template=https://github.com/van-reebeck/TSHEPHANG.git

PUBLIC BOT GROUP 👇: Follow this link to join my WhatsApp group: https://chat.whatsapp.com/CHWAJyGYCKG17UMF21A42I


`}) 

}));
