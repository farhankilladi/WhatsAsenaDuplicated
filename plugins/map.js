/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");

const Language = require('../language');
const Lang = Language.getString('webss');

Asena.addCommand({pattern: 'map ?(.*)', fromMe: false, desc: Lang.SS_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.LİNK);

    var webimage = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${match[1]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(json.gambar), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Made by WhatsAsena'})
    
    
    var webimage = await axios.get(`Buffer.from(json.gambar)`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));
