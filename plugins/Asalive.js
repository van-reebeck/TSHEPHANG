const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {
    
Asena.addCommand({pattern: 'aliv', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "Hello🎩";
r_text[1] = "Rule number one don't show no love, love will get you killed";
r_text[2] = "Never forget what they did to you👌";
r_text[3] = "Always be 2 steps ahead of the Enemy";
r_text[4] = "Protect the weak when you are strong";
r_text[5] = "DONT CHEAT"; 
var i = Math.floor(6*Math.random())

await message.sendMessage(r_text[i]);

 }));
}

else if (Config.WORKTYPE == 'public') {
    
Asena.addCommand({pattern: 'aliv', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    var r_text = new Array ();    
r_text[0] = "•°✪⃝മരണം വരെ കുടെ കണ്ണും എന്ന് പറഞ്ഞവർ ഇപ്പെꪆ എന്റെ മരണത്ത᭄ന് വേണ്ട᭄ കꪆത്ത᭄ര᭄ക്കുന്നു  ⃟★⃪͢＿🍃࿐⃝ ➢";
r_text[1] = "⏤͟͟͞͞✯✮⃝➻❥ ആത്മꪆർത്ഥമꪆയ᭄ നമ്മളെ സ്നേഹ᭄ക്കꪆൻ ഒരꪆൾ ഉണ്ടꪆയꪆൽ...♥️🌎😘 അത് ആയ᭄ര᭄ക്കും ജീവ᭄തത്ത᭄ലെ ഏറ്റവും വല᭄യ ഭꪆഗ്യം♥️🖇️🔐";
r_text[2] = "⋆⏤͟͟͞͞✪⃝🍃സ്നേഹ᭄ക്കꪆ൵ അറിയꪆം സ്നേഹം അഭ᭄നയ᭄ക്കാ൵ അറയ᭄ല്ല ച᭄ലപ്പോ അതꪆയര᭄ക്കും എന്റെ ഏറ്റവും വല᭄യ പരꪆജയവും🕊️🍃࿐⃝ ➢";
r_text[3] = "꧁കൂട്ടമꪆയ᭄ ന᭄ന്ന് തകർക്കꪆ൵ ആണ് ഉദ്ദേശ൭മക᭄ൽ...ഒറ്റക് ന᭄ന്ന് ൭പꪆരുതꪆ൵ ത൭൬യꪆണ്  എ൭ന്റ ത്᭄രുമꪆന....꧂😼";
r_text[4] = "⏤͟͟͞͞🍃🐲☘️_എന᭄ക്ക് ച᭄ര᭄ക്കꪆൻ കഴ᭄യുന്ന  കꪆലത്തോളം  എന്റെ പരꪆജയം★᭄ꦿ᭄ꦿ ആസ്വദ᭄ക്കꪆൻ നിങ്ങൾക്ക് കഴയ᭄ല്ല 🇦🇱⃝ 🇦🇴⏤͟͟͞͞";
r_text[5] = "DONT CHEAT"; 
var i = Math.floor(6*Math.random())

await message.sendMessage(r_text[i]);

 }));
}
