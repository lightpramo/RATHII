require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
const maker = require('mumaker')
const hx = require("hxz-api")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const xeonkey = require('xfarr-api')
const cheerio = require ("cheerio")
const { botRATHIIncTiktok } = require('./lib/tiktokbyxeon')
let { msgFilter } = require('./lib/antispam')
let { covid } = require('./lib/covid.js') 
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const { botRATHIIncWiki } = require('./lib/rathiwiki.js')
const textpro = require('./lib/textpro')
const { mediafireDl } = require('./lib/mediafire.js')
const { Gempa } = require("./lib/gempa.js")
const { jadwaltv }= require('./lib/jadwaltv')
const xeontod = require("tod-api")
const { pinterest } = require("./lib/pinterest")
const toHur = require('@develoka/angka-terbilang-js')
const { hentai } = require('./lib/scraper2.js')
const {
 FajarNews, 
 BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme, 
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api")

module.exports = botRATHIInc = async (botRATHIInc, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[??????????????????????????????+???_=|~!?@#$%^&.??^]/gi.test(body) ? body.match(/^[??????????????????????????????+???_=|~!?@#$%^&.??^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await botRATHIInc.decodeJid(botRATHIInc.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
	    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()

        //group\\
        const groupMetadata = m.isGroup ? await botRATHIInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const AntiLink = m.isGroup ? ntilink.includes(from) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoStick = _autostick.includes(from)
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const Autoreply = m.isGroup ? autorep.includes(from) : true
        const isBan = banUser.includes(m.sender)
        const isBanChat = m.isGroup ? banchat.includes(from) : false
        autoreadsw = true
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
        if (!('templateImage' in setting)) setting.templateImage = false
        if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	// FAKE TEXT IMG
const textImg = (teks) => {
botRATHIInc.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./XeonMedia/image/wpmobile.png')}) 
}

//FAKE CONTACT
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `916909137213 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //The picture
},
"title": `${global.ownername}`, 
"description": `${global.botname}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.watermark}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${global.ownername}`, //
orderTitle: `${global.botname}`,
thumbnail: log0, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.botname}`, 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botname}`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `${global.watermark}`,
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "916909137213-1616169743@g.us",
"inviteCode": `${global.ownername}`,
"groupName": `${global.botname}`, 
"caption":`${global.watermark}`, 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`${global.botname}`,
 "h": `${global.ownername}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `${global.watermark}`,
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.ownername}`,
"title": `${global.botname}`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
	
	//group target \\
const reply = (teks) => {
           botRATHIInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            botRATHIInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!botRATHIInc.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Colombo"
        })
        
        //hitter
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Colombo').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await botRATHIInc.setStatus(`${botRATHIInc.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	//antispam or auto react
//if (m.message && msgFilter.isFiltered(from)) {
//console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
//return botRATHIInc.sendMessage(from, { react: { text: `${global.themeemoji}`, key: m.key }})
//}
	
//auto read whatsapp status
if (autoreadsw) {
		if (from === 'status@broadcast') {
		botRATHIInc.chatRead(from)
	}
	}
//autoreader gc and pm
if (global.autoreadpmngc) {
if (command) {
await botRATHIInc.sendPresenceUpdate('composing', m.chat)
botRATHIInc.sendReadReceipt(from, m.sender, [m.key.id])}
}
  //autoread gc only
  if (global.autoReadGc) {
  if (m.isGroup) { botRATHIInc.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
  //auto recording all
    if (global.autoRecord) { if (m.chat) { botRATHIInc.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { botRATHIInc.sendPresenceUpdate('composing', m.chat) }
}
//auto available all
  if (global.available) { if (m.chat) { botRATHIInc.sendPresenceUpdate('available', m.chat) }
  }

// Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await botRATHIInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await botRATHIInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await botRATHIInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await botRATHIInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

	// AntiLinkgc
if (AntiLink) {
linkgce = await botRATHIInc.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`\`\`\`??? Group Link Detected ???\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`??? Group Link Detected ???\`\`\`\n\nAdmin has sent a link, admin is free to post any link`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await botRATHIInc.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
botRATHIInc.sendMessage(from, {text:`\`\`\`??? Group Link Detected ???\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
  // Antiwame
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`??? Wa.me Link Detected ???\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link????`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await botRATHIInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
botRATHIInc.sendMessage(from, {text:`\`\`\`??? Wa.me Link Detected ???\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`??? Wa.me Link Detected ???\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link????`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await botRATHIInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
botRATHIInc.sendMessage(from, {text:`\`\`\`??? Wa.me Link Detected ???\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex
  if (antiVirtex) {
  if (budy.length > 3500) {
  reply(`Somebody spammed virus!! Mark as read??????\n`.repeat(300))
  reply(`\`\`\`??? Virus Detected ???\`\`\`\n\nSorry You Will Be Kicked !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  botRATHIInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
//anti bad words
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend????','Dont be toxic????']
sin =  tos[Math.floor(Math.random() * (tos.length))]
reply(sin)
if (m.text) {
bvl = `\`\`\`??? Bad Word Detected ???\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you????`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await botRATHIInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
botRATHIInc.sendMessage(from, {text:`\`\`\`??? Bad Word Detected ???\`\`\`\n\n@${kice.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
}
//antilink youtube video
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`??? YoutTube Video Link Detected ???\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link????`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await botRATHIInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
botRATHIInc.sendMessage(from, {text:`\`\`\`??? YouTube Video Link Detected ???\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink youtube channel
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`??? YoutTube Channel Link Detected ???\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link????`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await botRATHIInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
botRATHIInc.sendMessage(from, {text:`\`\`\`??? YouTube Channel Link Detected ???\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink instagram
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`??? Instagram Link Detected ???\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link????`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await botRATHIInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
botRATHIInc.sendMessage(from, {text:`\`\`\`??? Instagram Link Detected ???\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink facebook
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`??? Facebook Link Detected ???\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link????`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await botRATHIInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
botRATHIInc.sendMessage(from, {text:`\`\`\`??? Facebook Link Detected ???\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink telegram
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`??? Telegram Link Detected ???\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link????`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await botRATHIInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
botRATHIInc.sendMessage(from, {text:`\`\`\`??? Telegram Link Detected ???\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink tiktok
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`??? Tiktok Link Detected ???\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link????`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await botRATHIInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
botRATHIInc.sendMessage(from, {text:`\`\`\`??? Tiktok Link Detected ???\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink twitter
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`??? Twitter Link Detected ???\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link????`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await botRATHIInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
botRATHIInc.sendMessage(from, {text:`\`\`\`??? Tiktok Link Detected ???\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink all
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`??? Link Detected ???\`\`\`\n\nAdmin has sent a link, admin is free to send any link????`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await botRATHIInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
botRATHIInc.sendMessage(from, {text:`\`\`\`??? Link Detected ???\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

                //auto reply by xeon
          //if (Autoreply) //remove forwad slashes to make it autoreply on off
        for (let anji of rathisticker){
				if (budy === anji){
					result = fs.readFileSync(`./XeonMedia/sticker/${anji}.webp`)
					botRATHIInc.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anjh of rathiimage){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/image/${anjh}.jpg`)
					botRATHIInc.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  if (Autoreply) //remove forwad slashes to make it autoreply on off
					for (let anjh of rathivideo){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/video/${anjh}.mp4`)
					botRATHIInc.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
botRATHIInc.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: botRATHIInc.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, botRATHIInc.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        botRATHIInc.ev.emit('messages.upsert', msg)
        }

       //react function
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                
                const timestampe = speed();
const latensie = speed() - timestampe
//???????????? ?????????????????? ????????? ?????????????????? ??????
                const menulist = `
                ????????????[RATHI MD Bot]	

                ????.  Bot Name : ${global.botname}
                 ????.  Owner Name : ${global.ownername}
                ??????.  Owner Number : ${global.owner}
                ????.  Runtime : ${runtime(process.uptime())}
                ????.  Speed : ${latensie.toFixed(4)} ms

                ????????????????????????????????????????????????????????????
                `
   
   //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}


switch(command) {
	
 case 'banchat': {
 if (isBan) return reply(mess.ban)	 			
if (!isCreator) return replay(mess.owner)
if (args[0] === "on") {
if (isBanChat) return replay('Already Banned')
banchat.push(from)
replay('Success in banning the gc')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nThe bot has been disabled in this group, now no one will able to use the bot in this group!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!isBanChat) return replay('Already Unbanned')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('Success in unbanning the gc')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Ban' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Unban' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nBan to Ban\nUnban to unban`, `${global.botname}`, m)
  }
  }
  break

case 'ban': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args[0]) return replay(`Select add or del(add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user u want to ban`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User was already banned')
banUser.push(orgnye)
replay(`Successfully banned the user`)
} else if (args[0] === "del") {
if (!isBane) return ads('User was already unbanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Successfully unbanned the user`)
} else {
replay("Error")
}
}
	
        case 'userlimit': 
        if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
{      
   let txt = `??? *ALL LIMIT USER* ???\n\n`
     for (let i of _limit){
     txt += `??? *ID :* @${i.id.split("@")[0]}\n??? *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }

            case 'chat': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    botRATHIInc.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    botRATHIInc.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    botRATHIInc.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    botRATHIInc.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    botRATHIInc.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    botRATHIInc.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    botRATHIInc.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
	case 'react': { 
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
botRATHIInc.sendMessage(m.chat, reactionMessage)} 
break
		
		
            break
            case 'is':
            if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
botRATHIInc.sendMessage(from, { text: `Question : Is ${q}\nAnswer : ${kah}` }, { quoted: m })

					break
					            case 'what':
					if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
botRATHIInc.sendMessage(from, { text: `Question : What ${q}\nAnswer : ${kahk}` }, { quoted: m })

					break
case 'can':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
					const bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
botRATHIInc.sendMessage(from, { text: `Question : Can ${q}\nAnswer : ${ga}` }, { quoted: m })

					break
case 'how':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
					const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah`,`Ohhh I See:(`,`The Patient, Boss:(`,`How Are You?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
botRATHIInc.sendMessage(from, { text: `Question : ${q}\nAnswer : How ${ya}` }, { quoted: m })

					break
case 'rate':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
botRATHIInc.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${te}%*` }, { quoted: m })

					break
case 'handsomecheck':
  if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
botRATHIInc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
botRATHIInc.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const rathi =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = rathi[Math.floor(Math.random() * rathi.length)]
					botRATHIInc.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                    case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
                                  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
botRATHIInc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
                    case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
      	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '????', buttonText: { displayText: 'b' }, type: 1 }
                    ]
                    await botRATHIInc.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break

            case 'setexif': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await botRATHIInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await botRATHIInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await botRATHIInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await botRATHIInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await botRATHIInc.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await botRATHIInc.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await botRATHIInc.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdescription': {
          	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await botRATHIInc.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
          	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)
                await botRATHIInc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
           	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)
                await botRATHIInc.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `???????????????????? Tag All ???????????????????? 
 
 ??? *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                botRATHIInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
                	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            botRATHIInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return replay(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }

botRATHIInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
			if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
               	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await botRATHIInc.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await botRATHIInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await botRATHIInc.sendButtonText(m.chat, buttons, `Group Mode`, botRATHIInc.user.name, m)

             }
            }
            break
            case 'editinfo': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'open'){
                await botRATHIInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await botRATHIInc.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await botRATHIInc.sendButtonText(m.chat, buttons, `Mode Edit Info`, botRATHIInc.user.name, m)

            }
            }
            break
case 'autosticker':
            case 'autostiker':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args.length < 1) return reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('autosticker activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('auto sticker deactivated')
}
break
case 'autostickerpc':
            case 'autostikerpc':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (args.length < 1) return reply('type autosticker on to activate\ntype autosticker off to disable')
if (args[0]  === 'on'){
if (isAutoStick) return reply(`Already activated`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc deactivated')
}
break
case 'antilinkgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLink) return replay('Already activated')
ntilink.push(from)
replay('Success in turning on group chat antilink in this group')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nIf you're not an admin, don't send the group link in this group or u will be kicked immediately`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return replay('Already deactivated')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
replay('Success in turning off group chat antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
  case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replay('Already activated')
ntilinkytvid.push(from)
replay('Success in turning on youtube video antilink in this group')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replay('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
replay('Success in turning off youtube video antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replay('Already activated')
ntilinkytch.push(from)
replay('Success in turning on youtube channel antilink in this group')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replay('Already deactivated')
let off = ntilinkytch.indexOf(from)
ntilinkytch.splice(off, 1)
replay('Success in turning off youtube channel antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return replay('Already activated')
ntilinkig.push(from)
replay('Success in turning on instagram antilink in this group')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replay('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('Success in turning off instagram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return replay('Already activated')
ntilinkfb.push(from)
replay('Success in turning on facebook antilink in this group')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replay('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
replay('Success in turning off facebook antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return replay('Already activated')
ntilinktg.push(from)
replay('Success in turning on telegram antilink in this group')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replay('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('Success in turning off telegram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return replay('Already activated')
ntilinktt.push(from)
replay('Success in turning on tiktok antilink in this group')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replay('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
replay('Success in turning off tiktok antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay('Already activated')
ntilinktwt.push(from)
replay('Success in turning on twitter antilink in this group')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replay('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
replay('Success in turning off twitter antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
              case 'antilinkall': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay('Already activated')
ntilinkall.push(from)
replay('Success in turning on all antilink in this group')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replay('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
replay('Success in turning off all antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antivirus': case 'antivirtex': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replay('Already activated')
ntvirtex.push(from)
replay('Success in turning on antivirus in this group')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replay('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
replay('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
    case 'autoreply': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (Autoreply) return replay('Already activated')
autorep.push(from)
replay('Success in turning on the autoreply in this group')
} else if (args[0] === "off") {
if (!Autoreply) return replay('Already deactivated')
let off = autorep.indexOf(from)
autorep.splice(off, 1)
replay('Success in turning off autoreply in this group')
} else {
  let buttonswlcm = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonswlcm, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antitoxic': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiToxic) return replay('Already activated')
nttoxic.push(from)
replay('Success in turning on antitoxic in this group')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replay('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
replay('Success in turning off antitoxic in this group')
} else {
  let buttonsnttoxci = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antiwame': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiWame) return replay('Already activated')
ntwame.push(from)
replay('Success in turning on antiwame in this group')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replay('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
replay('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
  case 'nsfw': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return replay('Already activated')
ntnsfw.push(from)
replay('Success in turning on nsfw in this group')
var groupe = await botRATHIInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
botRATHIInc.sendMessage(from, {text: `\`\`\`??? ??????Warning?????? ???\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replay('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
replay('Success in turning off nsfw in this group')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await botRATHIInc.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
             case 'mute': {
             	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                reply(`${botRATHIInc.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${botRATHIInc.user.name} Has Been Unmuted In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await botRATHIInc.sendButtonText(m.chat, buttons, `Mute Bot`, botRATHIInc.user.name, m)
                }
             }
             break
case 'setppbot': case 'setbotpp': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)
await botRATHIInc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
replay(mess.success)
}
break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await botRATHIInc.groupInviteCode(m.chat)
                botRATHIInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!text) return replay(`Enter The enable/disable Values`)
                if (args[0] === 'enable') {
                    await botRATHIInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await botRATHIInc.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
case 'grupsetting':
            case 'groupsetting':{
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                    let sections = []
                    let com = [`group open`,`autosticker on`,`welcome on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`autoreply on`,`group open`]
                    let comm = [`group close`,`autosticker off`,`welcome off`,`antilinkgc off`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`autoreply on`,`group close`]
                    let listnya = [`Group open/close`,`Auto-Sticker on/off`,`Welcome/Left on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`,`Anti Toxic on/off`,`Anti Virus on/off`,`Auto Reply on/off`,`Group open/close`]
                    let suruh = [`Enable`, `Disable`]
                    let fiturname = [`Group`,`Auto Sticker`,`Welcome`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Anti Toxic`,`Anti Virus`,`Auto Reply`,`Group`]
                    let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                    let startnumm = 1
                    for (let x of com) {
                        const yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `Activate ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `Deactivate ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        sections.push(yy)
                    }
                    const sendm =  botRATHIInc.sendMessage(
      from, 
      {
       text: "Group Settings",
       footer: botname,
       title: "Set your group settings here......",
       buttonText: "Click Button",
       sections
      }, { quoted : m }
    )  
}
  break

            case 'delete': case 'del': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                botRATHIInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
      case 'bcgc': case 'bcgroup': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text?\n\nExample : ${prefix + command} ${global.ownername}`)
let getGroups = await botRATHIInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
replay(`Send broadcast to ${anu.length} group chat, time's up ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'YouTube ????',
url: `${global.websitex}`
}
}, {
urlButton: {
displayText: '???? Github ????',
url: `${global.botscript}`
}
}, {
quickReplyButton: {
displayText: 'Bot Status ????',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Menu ????',
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: 'Owner ????',
id: 'owner'
}
}]
let txt = `*??? ${global.ownername}'s Broadcast???*\n\n${text}`
botRATHIInc.send5ButImg(i, txt, `${global.botname}`, log0, btn, thum)
}
replay(`Successfully Sent Broadcast To ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text??\n\nExample : ${prefix + command} ${global.ownername}`)
let anu = await store.chats.all().map(v => v.id)
replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'YouTube ????',
url: `${global.websitex}`
}
}, {
urlButton: {
displayText: '???? Github ????',
url: `${global.botscript}`
}
}, {
quickReplyButton: {
displayText: 'Bot Status ????',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Menu ????',
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: 'Owner ????',
id: 'owner'
}
}]
let txt = `*??? ${global.ownername}'s Broadcast???*\n\n${text}`
botRATHIInc.send5ButImg(yoi, txt, `${global.botname}`, log0, btn, thum)
}
replay('Broadcast Success')
}
break
 case 'bcimage': case 'bcvideo': case 'bcaudio': {
                  if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) return reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
                let anu = await store.chats.all().map(v => v.id)
                let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 999999999,status: 200, thumbnail: fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'), surface: 200, message: `${ownername}'s Broadcast`, orderTitle: `${botname}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} secs*`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                displayText: 'YouTube ????',
url: `${global.websitex}`
                                }
                            }, {
urlButton: {
displayText: '???? Github ????',
url: `${global.botscript}`
}
}, {
quickReplyButton: {
displayText: 'Bot Status ????',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Menu ????',
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: 'Owner ????',
id: 'owner'
}
}]
                    let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    botRATHIInc.sendMessage(i, { sticker: { url: media } }, { quoted: ftroli })
                    } else if (/image/.test(mime)) {
                    let DGXeon = `*??? ${global.ownername}'s Broadcast???*${text ? '\n\n' + text : ''}`
                    botRATHIInc.send5ButImg(i, DGXeon, `${global.botname}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let DGXeon = `*??? ${global.ownername}'s Broadcast???*${text ? '\n\n' + text : ''}`
                    botRATHIInc.sendMessage(i, {video: buffer, caption: `${DGXeon}`}, { quoted: ftroli })
                    } else if (/audio/.test(mime)) {
                    botRATHIInc.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : ftroli })
                    } else {
                    reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                reply(` *Send Broadcast To* ${anu.length} *Chats*`)
            }
            break
case 'bcloc': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
                if (!text) return reply(`Use ${prefix}bcloc text\n\nExample : ${prefix + command} attention everybody`)
                let anu = await store.chats.all().map(v => v.id)
                let [melo, melo2] = text.split`|`
                reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} sec`)
	     	for (let yoi of anu) {
	     	await sleep(1500)
		    var button = [{ buttonId: `${prefix}ho`, buttonText: { displayText: `${melo2}` }, type: 1 }]              
            botRATHIInc.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak+`${ownername}'s Broadcast`) }, buttons: button, footer: `${botname}`, mentions: [m.sender] })
		}		
            }
            break
case 'chatinfo': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) replay('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return replay('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ??????${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
botRATHIInc.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return replay('Reply Message!!')
let wokwol = await botRATHIInc.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return replay('The message you replied to does not contain a reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     ??? Personal Chat List ???\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`
}
botRATHIInc.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     ??? Group Chat ???\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await botRATHIInc.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Colombo').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
botRATHIInc.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listonline': case 'listaktif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
botRATHIInc.sendText(m.chat, '     ??? Online List ???\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'patrick':
case 'patricksticker': {
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await botRATHIInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
       case 'attp2': {
		   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
           if (!text) return reply(`Example : ${prefix + command} text`)
           await botRATHIInc.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})

         }
         break
case 'attp': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
           if (!text) reply(`Use ${prefix}attp hello\n*Example : ${prefix + command} ${ownername}*` )
           await botRATHIInc.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, 'Xeon', 'Op', m, {asSticker: true}).catch((err) => reply(mess.error))
         }
         break
case 'ttp': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
           if (!text) return reply(`*Example : ${prefix + command} hello*`)
           await botRATHIInc.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {asSticker: true})
         
                     }
                     break
            case 'soundcloud': case 'scdl': {               
                if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('soundcloud.com')) return reply(`*Not a soundcloud link*`)
                xeonkey.SoundCloud(`${text}`).then(async (data) => {
                    let txt = `*SOUNDCLOUD DOWNLOADER*\n\n`
                    txt += `*${themeemoji}Title :* ${data.title}\n`
                    txt += `*${themeemoji}Quality :* ${data.medias[0].quality}\n`
                    txt += `*${themeemoji}Type :* ${data.medias[0].extension}\n`
                    txt += `*${themeemoji}Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*${themeemoji}Url Source :* ${data.url}\n\n`
                    txt += `*${botname}*`
                buf = await getBuffer(data.thumbnail)   
                botRATHIInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => reply(mess.error))    
                botRATHIInc.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mpeg', fileName: data.title+'.m4a' }, { quoted: m })
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await botRATHIInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker':
case 'lovestick' :{
	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await botRATHIInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await botRATHIInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await botRATHIInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await botRATHIInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'swm': case 'take': case 'stickerwm': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(`Example :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
botRATHIInc.downloadAndSaveMediaMessage(quoted, "gifee")
botRATHIInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await botRATHIInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await botRATHIInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
reply(mess.wait)
mee = await botRATHIInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await botRATHIInc.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break

    /// ???????????? ???????????????==================================
case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
try{
reply(mess.wait)
NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
YesHorny = await getBuffer(NoHorny.result)
botRATHIInc.sendMessage(from, {image:YesHorny},{quoted:m})
} catch (e) {error("Error")}	
break
   case 'spank':
      if (isBan) return reply(mess.ban)	 			
   if (isBanChat) return reply(mess.banChat)
   if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)                                   
  let spbuff = await getBuffer(spankd.data.url)
let spgif = await GIFBufferToVideoBuffer(spbuff)   
        await botRATHIInc.sendMessage(m.chat,{video: spgif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('Error!')
                                    })
break
case 'hentaivid': case 'hentaivideo': {
	                        	            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
                reply(mess.wait)
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                botRATHIInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: `Next ???`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: trapbot,
  headerType: 1
  }     
            await botRATHIInc.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-neko' :
case 'hneko' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ???`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: hnekobot,
  headerType: 1
  }      
            await botRATHIInc.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-waifu' :
case 'coffee': case 'kopi': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `Here you go!`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'zippyshare': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) return reply(`The link is not a zippyshare link`)
anu = await fetchJson(`https://violetics.pw/api/downloader/zippyshare?apikey=df7d-425a-3bc8&url=${text}`)
m.reply(`*${util.format(anu)}*`)
linkyke = await getBuffer(anu.result.dlink)
botRATHIInc.sendMessage(m.chat, {document: linkyke, mimetype: 'application/zip', fileName: `${anu.result.filename}`}, {quoted:m}).catch ((err) => reply(mess.error))     
}
break
case 'savefrom': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} url link`) 
  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is invalid`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data.url) {
  const list = {title: `${i.type}`,
  rows: [
	    {
	     title: `Quality ${i.subname}`, 
	     rowId: `${prefix}get ${text}`,
      description: `${data.hosting}`	     
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  botRATHIInc.sendMessage(
      m.chat, 
      {
       text: `${data.meta.title} *Here is the list of videos, click the button below to choose*`,
       footer: `${botname}`,
       title: "*SAVE FROM*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
case 'jail': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'wanted': case 'rip': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                botRATHIInc.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'gayeffect': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/gay?url=${anu}`)
                botRATHIInc.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'deleteeffect': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/delete?url=${anu}`)
                botRATHIInc.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'framed': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/fotojatoh?url=${anu}`)
                botRATHIInc.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'beautifuleffect': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/beautiful?url=${anu}`)
                botRATHIInc.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
            case 'readmore': {
            if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} halo gaes`)
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               reply(`${anu.result}`)
            }
            break
case 'toviewonce': case 'toonce': { 
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
        if (!quoted) return reply(`Reply image`)
        if (/image/.test(mime)) {
anu = await botRATHIInc.downloadAndSaveMediaMessage(quoted)
botRATHIInc.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anu = await botRATHIInc.downloadAndSaveMediaMessage(quoted)
        botRATHIInc.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
        }
        }
        break
        case 'tinyurl': {
        	 if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            reply(mess.wait)
            try {
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
              reply(`${anu.data} here you go!`)
              } catch (e) {
              emror = String(e)
              reply(`${e}`)
            }
        }
        break
case 'fliptext': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replay(`\`\`\`??? FLIP TEXT ???\`\`\`\n*???> Normal :*\n${quere}\n*???> Flip :*\n${flipe}`)
}
break
case 'toletter': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
replay(`\`\`\`??? ALPHABET ???\`\`\`\n*???> Number :*\n${quere}\n*???> Alphabet :*\n${convertes}`)
} catch {
replay(`Error!`)
}
}
break
case 'translate': case 'trans': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return replay("The text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
replay(`????Translate : ${Detek}\n????Results : ${Infoo}`)
}

if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
rathi_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await botRATHIInc.sendMessage(m.chat, { audio: rathi_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
///*???????????? ???????????? ?????????===============================================================
case'glitch3':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'waterdrop':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break


case 'lion2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if(!q) return reply(`Use ${prefix + command} text`)
  reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break


case 'papercut':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case 'transformer':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   

case 'harrypot':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
       if(!q) return reply(`Use ${prefix + command} text|text`)
       reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break


case 'neondevil':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case '3dstone':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case '3davengers':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'thunder':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   

case 'window':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   case 'blackpinkneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
      if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'pornhub2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'blackpink2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'glitch2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'glitch3':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case '3dspace':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'lion':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case '3dneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'neon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'greenneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   
  
case 'bokeh':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'wolf':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break




case 'joker':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'dropwater2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => botRATHIInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
 
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
                if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anu = await maker.textpro(link, q)
                botRATHIInc.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break

case 'textmaker': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply(`Example :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
botRATHIInc.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
botRATHIInc.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
reply(`*Text Maker List :*\n???> glitch\n???> glow`)
}
}
break
//???????????? ????????? ?????????
case 'hoorror':{
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
  case 'whitebear':{
  	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'thunder2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'blackpink':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'neon':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'matrix2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'sky':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break

case 'magma':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'sand':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'pencil':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'graffiti':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'metallic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'steel':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'harrypotter':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'underwater':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'luxury':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'glue2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'fabric':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'neonlight':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'lava':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'toxic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'ancient':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'christmas2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'sci_fi':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'rainbow':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'classic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'watercolor2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'halloween2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'halloweenfire':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/halloween-fire-text-effect-940.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'writing':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'foggy':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'marvel':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'skeleton2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'sketch':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'wonderful':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'cool':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'collwall':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'multicolor2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'batman':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'juice':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    botRATHIInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'pornhub':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
botRATHIInc.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case 'retro':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
botRATHIInc.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case 'horror':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
botRATHIInc.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case '8bit':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
botRATHIInc.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
//??????????????? ????????? ?????????
case 'emoji': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await botRATHIInc.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await botRATHIInc.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'igemoji': 
case 'instagramemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} ????`)
reply(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ????`)
reply(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ????`)
reply(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ????`)
reply(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ????`)
reply(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ????`)
reply(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ????`)
reply(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ????`)
reply(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ????`)
reply(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ????`)
reply(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ????`)
reply(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} ????`)
reply(mess.wait)
emote(q, "10")
break

case 'emojimix': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) reply(`*Example :* ${prefix + command} ????+????`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await botRATHIInc.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
	case 'toimage': case 'toimg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
botRATHIInc.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await botRATHIInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
botRATHIInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
botRATHIInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${botRATHIInc.user.name} (${m.id}).mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
botRATHIInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await botRATHIInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
	case 'tourl': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
            case 'imagenobgxxx': case 'removebgxxx': case 'remove-bgxxx': {
	    if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await botRATHIInc.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    botRATHIInc.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'yts': case 'ytsearch': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} stay jb`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = '*| YOUTUBE SEARCH |*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `${global.themeemoji} No : ${no++}\n${global.themeemoji} Type : ${i.type}\n${global.themeemoji} Video ID : ${i.videoId}\n${global.themeemoji} Title : ${i.title}\n${global.themeemoji} Views : ${i.views}\n${global.themeemoji} Duration : ${i.timestamp}\n${global.themeemoji} Uploaded : ${i.ago}\n${global.themeemoji} Author : ${i.author.name}\n${global.themeemoji} Url : ${i.url}\n\n???????????????????????????????????????????????????\n\n`
}
botRATHIInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'google': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `${global.themeemoji} *Title* : ${g.title}\n`
teks += `${global.themeemoji} *Description* : ${g.snippet}\n`
teks += `${global.themeemoji} *Link* : ${g.link}\n\n????????????????????????????????????????????????????????????????????????\n\n`
} 
reply(teks)
})
}
break
case 'gimage': case 'googleimage': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply("What picture are you looking for??")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image ????'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

${global.themeemoji} Query : ${text}
${global.themeemoji} Media Url : ${images}`,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.ownername}`,
body:`${global.watermark}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `{global.websitex}`
}}
}
botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
	case 'igstoryxx': case 'instagramstoryxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example :\n${prefix + command} josephxeon13`)
try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM STORY |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Select the media below to download_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
botRATHIInc.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
reply(String(err))
}
}
break
case 'igs2': case 'igstory2': case 'instagramstory2': {
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the username?\nExample: ${prefix}igstory josephxeon13`)
                let urlnya = text
	            hx.igstory(urlnya)
	            .then(async(result) => {
		        var halo = 0		
	            botRATHIInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----??? INSTAGRAM STORY ???----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Media :* ${result.medias.length}\n*${themeemoji} Bio :* ${result.user.biography}\n\n*${botname}*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.medias) {
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                botRATHIInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 
                } else {
                    let link = await getBuffer(i.url)
                  botRATHIInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  
                }
            }
            }).catch((err) => reply(`Sorry username ${text} was not found or maybe he/she has no story uploaded in her id`))
            }	
			break
case 'ig2': case 'igdl2': case 'instagram2': {
               if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the link bro`)
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(`The link you provided is not a instagram link`)             
                let urlnya = text
	            hx.igdl(urlnya)
	            .then(async(result) => {	  
	            var halo = 0		
	            botRATHIInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----??? INSTAGRAM DOWNLOADER ???----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Jumlah Media :* ${result.medias.length}\n*${themeemoji} Url :* ${text}\n\n*${botname}*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.medias) {		
		        if(i.url.includes('mp4')){		           			    				
				let link = await getBuffer(i.url)
                botRATHIInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })
                } else {
                let link = await getBuffer(i.url)
                botRATHIInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })                      
               }
              }
            }).catch((err) => reply(mess.error))
            }		
			break
case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Select the media below to download_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
botRATHIInc.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
reply(String(err))
}
}
break
case 'ig': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args[0] === "mp4") {
botRATHIInc.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
botRATHIInc.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
reply("Error! ")
}
}
break
case 'mp4' : {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Where's the link ?`)
try {
botRATHIInc.sendMessage(from, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error!")
}
}
break
case 'jpeg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Where's the link?`)
try {
botRATHIInc.sendMessage(from, {image:{url:args[0]}, caption:"Success", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error")
}
}
break
case 'igtv': {	            
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the link boss?`)
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*The link you provided is not valid*')
                instagramdlv3(`${text}`).then(async (data) => {            
                var buf = await getBuffer(data[0].thumbnail)        
                botRATHIInc.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m })
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
            case 'twitter': case 'td': case 'twitterdl': {     
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)	             
             if (!text) return reply(`Where is the link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`The link you provided is not valid`)
                xeonkey.Twitter(`${text}`).then(async (data) => {                    
                    let txt = `*TWITTER DOWNLOADER*\n\n`
                    txt += `*${themeemoji}TITLE :* ${data.title}\n`
                    txt += `*${themeemoji}QUALITY :* ${data.medias[1].quality}\n`
                    txt += `*${themeemoji}TYPE :* ${data.medias[1].extension}\n`
                    txt += `*${themeemoji}SIZE :* ${data.medias[1].formattedSize}\n`
                    txt += `*${themeemoji}DURATION :* ${data.medias.length}\n`
                    txt += `*${themeemoji}URL :* ${data.url}\n\n`
                    txt += `*${botname}*`
                buf = await getBuffer(data.thumbnail)    
                botRATHIInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
                for (let i of data.medias) {
                botRATHIInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${text}*`}, { quoted: m })
                }
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
            case 'twittermp3': case 'twitteraudio': { 
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)	             
             if (!text) return reply(`Where is the link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*The link you provided is not valid*`)
                xeonkey.Twitter(`${text}`).then(async (data) => {
                botRATHIInc.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break
case 'twitterxx': case 'twdlxx': case 'twmp4xx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `*| TWITTER DOWNLOADER |*

Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Choose the video quality below by clicking the button_`
let buttons = [
{buttonId: `twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:lotwit.title ? lotwit.title : "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
botRATHIInc.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Error link!")
}
}
break
case 'twddlxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu ????'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body: "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
botRATHIInc.sendMessage(from, buttonMessage, {quoted:m})
}
break
case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {     	    
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             if (!text) return reply(`Where is the link bro?\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
            let bocil = require('@bochilteam/scraper')  
                bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                    let txt = `*FB DOWNLOADER*\n\n`
                    txt += `*${themeemoji}TITLE :* ${data.title}\n`
                    txt += `*${themeemoji}QUALITY :* ${data.result[0].quality}\n`
                    txt += `*${themeemoji}DESCRIPTION :* ${data.description}\n`
                    txt += `*${themeemoji}ID :* ${watermark}\n`
                    txt += `*${themeemoji}URL :* ${text}\n\n`
                buf = await getBuffer(data.thumbnail)    
                botRATHIInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
                for (let i of data.result) {     
                botRATHIInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${themeemoji} Quality :* ${i.quality}`}, { quoted: m })
                }          
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
            case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                  if (!text) return reply(`Where is the link?\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (anu) => {  
  botRATHIInc.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `*| FACEBOOK DOWNLOADER |*

Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}

_For HD quality you can click the button below_`
let buttons = [
{buttonId: `fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:"Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
botRATHIInc.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link invalid!")
}
}
break
case 'fbddlxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu ????'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: `${pushname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body: " Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
botRATHIInc.sendMessage(from, buttonMessage, {quoted:m})
}
break
            case 'pinterest2': {
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                botRATHIInc.sendMessage(m.chat, { image: { url: result }, caption: '${themeemoji} Media Url : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply('What Are you Looking For??')
                await reply(mess.wait)
                xeonkey.Webtoons(q).then(async data => {
                    let txt = `*------??? WEBTOONS-SEARCH ???------*\n\n`
                    for (let i of data) {
                        txt += `*???? Title :* ${i.judul}\n`
                        txt += `*???????? Like :* ${i.like}\n`
                        txt += `*???????? Creator :* ${i.creator}\n`
                        txt += `*???? Genre :* ${i.genre}\n`
                        txt += `*???? Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'wattpad': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/wattpad?query=$text}&apikey=hdiiofficial`)
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From query\n\n`
            capt += ` Title: ${judul}\n`
            capt += ` Read: ${dibaca}\n`
            capt += ` Vote: ${divote}\n`
            capt += ` Chapter: ${bab}\n`
            capt += ` Url: ${url}\n`
            capt += ` Description: ${description}`
            botRATHIInc.sendImage(m.chat, thumb, capt, m)
            }
            break
case 'apk': case 'apkmod': case 'apkdl': {      
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!text) return reply(`Use${prefix + command} whatsapp`) 
  let noh = require('./lib/myfunc2')                
  noh.rexdl(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `Category: ${i.kategori}\nPublish: ${i.upload_date}\nInfo: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  botRATHIInc.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
       footer: `${botname}`,
       title: "*APK DOWNLOADER,*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(`*${text} Not found*`)
                })
            }
            break
case 'donlod': {                
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Use${prefix + command} whatsapp`)
                if (!isUrl(args[0]) && !args[0].includes('rexdl.com')) reply('*The link you provided is invalid*')
           let rex = require('./lib/ApkDown.js')
           rex.ApkDown(`${text}`).then(async (anu) => {        
           if (anu[0].size.split('MB')[0] >= 150) return reply('*File Over Limit* '+util.format(anu))
           for (let i of anu) {    
           linkye = `*APK DOWNLOAD*\n\n*Title:* ${i.title}\n*Updated:* ${i.up}\n*Version:* ${i.vers}\n*Size:* ${i.size}\n*Url:* \n*Desc:* ${i.desc}`         
                botRATHIInc.sendMessage(m.chat, { image: await getBuffer(i.thumb), jpegThumbnail: await getBuffer(i.thumb), caption: `${linkye}` }, { quoted: m })
                botRATHIInc.sendMessage(m.chat, {document: await getBuffer(i.link), mimetype: `application/vnd.android.package-archive`, fileName: `${i.title}`}, {quoted:m})  
                }  
                }).catch((err) => {
                    reply(mess.error)
                }) 
                }                          
                break
case 'tagme': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
botRATHIInc.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
break
           case 'git': case 'gitclone':
           if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) reply(`Use ${prefix}gitclone repo link\nExample: https://github.com/DGXeon/CheemsBot-MD4`)
    if (!regex1.test(args[0])) return reply(mess.linkm)
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    botRATHIInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
			break

case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
 	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
              if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
          
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                botRATHIInc.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname},For my Darling ` }, { quoted: m })
             }
             break
            case 'drakorxxx':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply('What Are You Looking For??')
                await reply(mess.wait)
                xeonkey.Drakor(`${text}`).then(async data => {
                    let txt = `*-----??? DRAKOR-SEARCH ???-----*\n\n`
                    for (let i of data) {
                        txt += `*???? Title :* ${i.judul}\n`
                        txt += `*???? Years :* ${i.years}\n`
                        txt += `*???? Genre :* ${i.genre}\n`
                        txt += `*???? Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'drakor': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/drakor?query=${text}&apikey=hdiiofficial`)
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `${themeemoji} Title: ${i.judul}\n`
            capt += `${themeemoji} Years: ${i.years}\n`
            capt += `${themeemoji} Genre: ${i.genre}\n`
            capt += `${themeemoji} Url: ${i.url}\n`
            capt += `${themeemoji} Thumbnail Url: ${i.thumbnail}\n\n??????????????????????????????????????????????????????????????????\n`
            }
            botRATHIInc.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'animexxx':{
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`What Anime Are You Looking For??`)
                await reply(mess.wait)
                xeonkey.Anime(q).then(async data => {
                    let txt = `*-------??? ANIME-SEARCH ???-------*\n\n`
                    for (let i of data) {
                        txt += `*???? Title :* ${i.judul}\n`
                        txt += `*???? Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Watch????",
						"url": `${websitex}`
						}
					}
				]
				await botRATHIInc.send5ButLoc(from, txt , `?? ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                }
            break
            case 'characterxxx': case 'karakterxxx':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`What Anime Character Are You Looking For??`)
                await reply(mess.wait)
                xeonkey.Character(q).then(async data => {
                    let txt = `*---??? CHARACTER-SEARCH ???---*\n\n`
                    for (let i of data) {
                        txt += `*???? Character :* ${i.character}\n`
                        txt += `*???? Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "YouTube????",
						"url": `${websitex}`
						}
					}
				]
				await botRATHIInc.send5ButLoc(from, txt , `?? ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'manga2':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`What Manga Are You Looking For??`)
                await reply(mess.wait)
                xeonkey.Manga(`${text}`).then(async data => {
                    let txt = `*------??? MANGA-SEARCH ???------*\n\n`
                    for (let i of data) {
                         txt += `*???? Title :* ${i.judul}\n`
                         txt += `*???? Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "YouTube????",
						"url": `${websitex}`
						}
					}
				]
				await botRATHIInc.send5ButLoc(from, txt , `?? ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                
botRATHIInc.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break
case 'manga':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Which manga do you want to search?\nExample ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `???? *Title: ${srh.data[0].title}*\n`;
    mang += `???? *Status: ${srh.data[0].status}*\n`;
    mang += `???? *Total Volumes: ${srh.data[0].volumes}*\n`;
    mang += `???? *Total Chapters: ${srh.data[0].chapters}*\n`;
    mang += `???? *Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `??? *Published on: ${srh.data[0].published.from}*\n`;
    mang += `???? *Score: ${srh.data[0].scored}*\n`;
    mang += `???? *Popularity: ${srh.data[0].popularity}*\n`;
    mang += `???? *Favorites: ${srh.data[0].favorites}*\n`;
    mang += `??? *Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n???? *URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null)
      mang += `???? *Background:* ${srh.data[0].background}`;
    mang += `?????? *Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
botRATHIInc.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break
            break
case 'lyrics': {
		            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	    if (!text) return reply(`Use example ${prefix}lyrics Despacito`)
	reply(mess.wait)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    reply(`
${themeemoji} Title : *${result.title}*
${themeemoji} Author : ${result.author}
${themeemoji} Lyrics : ${result.lyrics}
${themeemoji} Url : ${result.link}
`.trim())
}
break
case 'earthquake':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
botRATHIInc.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'covidindo':
case 'covid':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
botRATHIInc.sendMessage(from, {text : `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`}, m)
break
case 'tvschedule':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Send orders *#tvschedule [channel]*')
reply(await jadwaltv(q))
break
case 'playstore': case 'apk':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply('what are you looking for?')
let play = await hx.playstore(q)
let storee = '?????????????????????????????????????????????????????????????????????\n'
for (let i of play){
storee += `\n*??? *PLAY STORE* ???*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n?????????????????????????????????????????????????????????????????????`
}
reply(storee)
break
case 'film':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
if (!q) return reply(`What film you wanna search?\nExample: ${prefix}film Spiderman`)
xeonkey.Film(q)
    .then(data => {console.log(data)
    let krl = `*??????  Film ${q} ???*\n*???? Author* : ${data[0].author}\n\n`
			    for (let i of data) {
                krl += (`\n????????????????????????????????????????????????????????????\n\n *????Title :* ${i.judul}\n *???? Quality :* ${i.quality}\n *??????? Type : ${i.type}*\n *??? Uploaded :* ${i.upload}\n *???? Source :* ${i.link}`)
                }
               botRATHIInc.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break
case 'img':
case 'image': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
		let { pinterest } = require('./lib/scraperW')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                botRATHIInc.sendMessage(m.chat, { image: { url: result }, caption: ` ${themeemoji} Media Url : `+result }, { quoted: m })
            }
            break
case 'mcserver': case 'mcquery': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.xeon.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return replay(`Where's your ip?`)
if (!portnya) return replay(`Where's the port??`)

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
replay(jsonformat(success));
return q.basicStat()
})
.then(success => {
replay(jsonformat(success));
q.close();
})
}
break
case 'mcpedl': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} shader`)
xeontod.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu????'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'happymod': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} mobile legend`)
xeontod.happymod(args.join(" ")).then(async(res) => {
teks = '```??? HappyMod Search ???```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu????'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'searchgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(`Example :\n${prefix}searchgc Classy Editor`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```??? Search Group ???```'
for (let i of res) {
teks += `\n\n???> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu????'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'servermc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
xeontod.servermc().then(async(res) => {
let teks = '*| MINECRAFT SERVER |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `${themeemoji} Server To ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu????'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'fajar-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "??????????????????????????????????????????????????????"
replay(teks) 
})
break
case "quotes":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
var res = await Quotes()
teks = "??????????????????????????????????????????????????????"
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += "??????????????????????????????????????????????????????"
replay(teks)
break
case "darkjoke":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
var res = await Darkjokes()
teks = "\nDarkjokes*"
botRATHIInc.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break
case 'cnn-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
CNNNews().then(res => {
no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "??????????????????????????????????????????????????????"
replay(teks) 
})
break
case 'tvsearch':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Where is the title?') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
  no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += `??????????????????????????????????????????????????????`
replay(teks) 
})
break
case 'cnbc-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
CNBCNews().then(async(res) => {
no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "??????????????????????????????????????????????????????"
botRATHIInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'tribun-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
TribunNews().then(async(res) => {
no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "??????????????????????????????????????????????????????"
botRATHIInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'indozone-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
IndozoneNews().then(async(res) => {
no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "??????????????????????????????????????????????????????"
botRATHIInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'kompas-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
KompasNews().then(async(res) => {

no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "??????????????????????????????????????????????????????"
botRATHIInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'detik-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
DetikNews().then(async(res) => {

no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "??????????????????????????????????????????????????????"
botRATHIInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'daily-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
DailyNews().then(async(res) => {

no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "??????????????????????????????????????????????????????"
botRATHIInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'inews-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
iNews().then(async(res) => {

no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "??????????????????????????????????????????????????????"
replay(teks) 
})
break
case 'okezone-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
OkezoneNews().then(async(res) => {

no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "??????????????????????????????????????????????????????"
botRATHIInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case 'sindo-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
SindoNews().then(async(res) => {

no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `News: ${i.berita}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "??????????????????????????????????????????????????????"
replay(teks) 
})
break
case 'tempo-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
TempoNews().then(async(res) => {

no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "??????????????????????????????????????????????????????"
botRATHIInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'antara-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AntaraNews().then(async(res) => {

no = 0
teks = "??????????????????????????????????????????????????????"
for (let i of res) {
no += 1
teks += `\n??? ${no.toString()} ???\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "??????????????????????????????????????????????????????"
botRATHIInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case "kontan-news":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  KontanNews().then(async (res) => {
    
    teks = "??????????????????????????????????????????????????????"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n??? ${no.toString()} ???\n`
      teks += `News: ${i.berita}\n`
      teks += `Type: ${i.berita_jenis}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "??????????????????????????????????????????????????????"
    botRATHIInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  break
case "merdeka-news":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  MerdekaNews().then(async (res) => {
    
    teks = "??????????????????????????????????????????????????????"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n??? ${no.toString()} ???\n`
      teks += `News: ${i.berita}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "??????????????????????????????????????????????????????"
    botRATHIInc.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  break

case "jalantikus-meme":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  var res = await JalanTikusMeme()
teks = "??????????????????????????????????????????????????????"
teks += "\nLaughing out loud?????\n"
teks += `\nSource: ${res}\n`
teks += "??????????????????????????????????????????????????????"
botRATHIInc.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break
case 'cinemaschedule': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(`Example: ${prefix + command} jakarta`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/jadwalbioskop?kota=${text}&apikey=hdiiofficial`)
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += ` Title: ${i.title}\n`
            capt += ` Thumbnail: ${i.thumb}\n`
            capt += ` Url: ${i.url}\n\n??????????????????????????????????????????????????????????????????\n`
            }
            botRATHIInc.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
case 'shortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*List*\n${prefix}shortstory Anak\n${prefix}shortstory Bahasa Daerah\n${prefix}shortstory Bahasa Inggris\n${prefix}shortstory Bahasa Jawa\n${prefix}shortstory Bahasa Sunda\n${prefix}shortstory Budaya\n${prefix}shortstory Cinta\n${prefix}shortstory Cinta Islami\n${prefix}shortstory Cinta Pertama\n${prefix}shortstory Cinta Romantis\n${prefix}shortstory Cinta Sedih\n${prefix}shortstory Cinta Segitiga\n${prefix}shortstory Cinta Sejati\n${prefix}shortstory Galau\n${prefix}shortstory Gokil\n${prefix}shortstory Inspiratif\n${prefix}shortstory Jepang\n${prefix}shortstory Kehidupan\n${prefix}shortstory Keluarga\n${prefix}shortstory Kisah Nyata\n${prefix}shortstory Korea\n${prefix}shortstory Kristen\n${prefix}shortstory Liburan\n${prefix}shortstory Lingkungan\n${prefix}shortstory Lucu\n${prefix}shortstory Malaysia\n${prefix}shortstory Mengharukan\n${prefix}shortstory Misteri\n${prefix}shortstory Motivasi\n${prefix}shortstory Nasihat\n${prefix}shortstory Nasionalisme\n${prefix}shortstory Olahraga\n${prefix}shortstory Patah Hati\n${prefix}shortstory Penantian\n${prefix}shortstory Pendidikan\n${prefix}shortstory Pengalaman Pribadi\n${prefix}shortstory Pengorbanan\n${prefix}shortstory Penyesalan\n${prefix}shortstory Perjuangan\n${prefix}shortstory Perpisahan\n${prefix}shortstory Persahabatan\n${prefix}shortstory Petualangan\n${prefix}shortstory Ramadhan\n${prefix}shortstory Remaja\n${prefix}shortstory Renungan\n${prefix}shortstory Rindu\n${prefix}shortstory Rohani\n${prefix}shortstory Romantis\n${prefix}shortstory Sastra\n${prefix}shortstory Sedih\n${prefix}shortstory Sejarah\n${prefix}shortstory Slice Of Life\n${prefix}shortstory Terjemahan\n${prefix}shortstory Thriller`)
let cerpe = await cerpen(q)
reply(`${global.themeemoji} _*Title :*_ ${cerpe.title}\n${global.themeemoji} _*Author :*_ ${cerpe.author}\n${global.themeemoji} _*Category :*_ ${cerpe.kategori}\n${global.themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${global.themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'loveshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`Cinta segitiga`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'islamicshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`Cinta segitiga`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'disturbingshorystoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`galau`)
       reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'friendshipshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`persahabatan`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'sacrificeshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`Pengorbanan`)
reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'animequotes': case 'animequote': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		let { quotesAnime } = require('./lib/scraperW')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'wallpaper': case 'animewallpaper': case 'animewall': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!args.join(" ")) return reply("What picture are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

case 'wiki': case 'wikipedia':
 	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply('What Are You Looking For?? ')
const res2 = await botRATHIIncWiki(q).catch(e => {
return reply('_[ ! ] Error Result Not Found_') 
}) 
const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
botRATHIInc.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break
            case 'wikimedia': {
            	 	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Enter Query Title`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '??????Next Image??????'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
                    footer: botRATHIInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
            	 	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: '??????Next??????'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'nomerhoki': case 'nomorhoki': {
			   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!Number(text)) return reply(`Example : ${prefix + command} 916909137213`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Phone Number :* ${anu.message.nomer_hp}\n${themeemoji} *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n${themeemoji} *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n${themeemoji} *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Dream :* ${anu.message.mimpi}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Solution :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_anda.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_anda.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Husband's Name :* ${anu.message.suami.nama}\n${themeemoji} *Husband Born :* ${anu.message.suami.tgl_lahir}\n${themeemoji} *Wife's Name :* ${anu.message.istri.nama}\n${themeemoji} *Born Wife :* ${anu.message.istri.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Your Name :* ${anu.message.nama_anda.nama}\n${themeemoji} *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan.nama}\n${themeemoji} *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n${themeemoji} *Positive Side :* ${anu.message.sisi_positif}\n${themeemoji} *Negative Side :* ${anu.message.sisi_negatif}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika Ardianta`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Life Path :* ${anu.message.life_path}\n${themeemoji} *Destiny :* ${anu.message.destiny}\n${themeemoji} *Destiny Desire :* ${anu.message.destiny_desire}\n${themeemoji} *Personality :* ${anu.message.personality}\n${themeemoji} *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika|Novia`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendImage(m.chat,  anu.message.gambar, `${themeemoji} *Your Name :* ${anu.message.nama_anda}\n${themeemoji} *Couple Name :* ${anu.message.nama_pasangan}\n${themeemoji} *Positive Side :* ${anu.message.sisi_positif}\n${themeemoji} *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Wedding Date :* ${anu.message.tanggal}\n${themeemoji} *Characteristics :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n${themeemoji} *Business :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n${themeemoji} *Sustenance :* ${anu.message.rejeki}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.hari_lahir}\n?? *Profession :* ${anu.message.pekerjaan}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Analysis :* ${anu.message.analisa}\n${themeemoji} *Root Number :* ${anu.message.angka_akar}\n${themeemoji} *Nature :* ${anu.message.sifat}\n${themeemoji} *Element :* ${anu.message.elemen}\n${themeemoji} *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Analysis :* ${anu.message.analisa}\n${themeemoji} *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendImage(m.chat, anu.message.image, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Tarot Symbol :* ${anu.message.simbol_tarot}\n${themeemoji} *Meaning :* ${anu.message.arti}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tahun_lahir}\n${themeemoji} *Gender :* ${anu.message.jenis_kelamin}\n${themeemoji} *Kua Number :* ${anu.message.angka_kua}\n${themeemoji} *Group :* ${anu.message.kelompok}\n${themeemoji} *Character :* ${anu.message.karakter}\n${themeemoji} *Good Sector :* ${anu.message.sektor_baik}\n${themeemoji} *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *When Challenged :* ${anu.message.kala_tinantang}\n${themeemoji} *Info :* ${anu.message.info}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Info :* ${anu.message.info}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Fateful Day :* ${anu.message.hari_naas}\n${themeemoji} *Info :* ${anu.message.catatan}\n${themeemoji} *Notes :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Day Of Birth :* ${anu.message.hari_lahir}\n${themeemoji} *Date Of Birth :* ${anu.message.tgl_lahir}\n${themeemoji} *Sustenance Direction :* ${anu.message.arah_rejeki}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return (`Example : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Date :* ${anu.message.tanggal}\n${themeemoji} *Number Of Neptune :* ${anu.message.jumlah_neptu}\n${themeemoji} *Day Character :* ${anu.message.watak_hari}\n${themeemoji} *Dragon Day :* ${anu.message.naga_hari}\n${themeemoji} *Good Hour :* ${anu.message.jam_baik}\n${themeemoji} *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Name :* ${anu.message.nama}\n${themeemoji} *Born :* ${anu.message.tgl_lahir}\n${themeemoji} *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Date :* ${anu.message.tgl_memancing}\n${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return (`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} First Day Of Menstruation Cycle`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Results :* ${anu.message.result}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix+ command} 7 7 2005`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Zodiac :* ${anu.message.zodiak}\n${themeemoji} *Number :* ${anu.message.nomor_keberuntungan}\n${themeemoji} *Aroma :* ${anu.message.aroma_keberuntungan}\n${themeemoji} *Planet :* ${anu.message.planet_yang_mengitari}\n${themeemoji} *Flower :* ${anu.message.bunga_keberuntungan}\n${themeemoji} *Color :* ${anu.message.warna_keberuntungan}\n${themeemoji} *Stone :* ${anu.message.batu_keberuntungan}\n${themeemoji} *Element :* ${anu.message.elemen_keberuntungan}\n${themeemoji} *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n${themeemoji} *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                botRATHIInc.sendText(m.chat, `${themeemoji} *Results :* ${anu.message}`, m)
            }
            break
	    case 'tiktok':{
  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!q) return reply('Where is the link?')
  reply(mess.wait)
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await botRATHIIncTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const xeontiktokop = musim_rambutan.result.watermark
texttk = `Wanna download no watermark or audio?
_Please choose the button below_`
let buttons = [
{buttonId: `ttnowm ${q}`, buttonText: {displayText: 'No Watermark ???'}, type: 1},
{buttonId: `ttaud ${q}`, buttonText: {displayText: 'Audio ????'}, type: 1}
]
let buttonMessage = {
video: {url:xeontiktokop},
caption: texttk,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${ownername}`,
body: `${pushname}`,
thumbnail: log0,
mediaType:1,
mediaUrl: q,
sourceUrl: q
}}
}
botRATHIInc.sendMessage(from, buttonMessage, {quoted:m})
}
break
  case 'tiktoknowm': case 'ttnowm':{
  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!q) return reply('Where is the link?')
  reply(mess.wait)
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await botRATHIIncTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const rathitiktoknowm = musim_rambutan.result.nowatermark
    botRATHIInc.sendMessage(from, { video: { url: rathitiktoknowm }, caption: "Here you go!" }, { quoted: m })
   }
  break
  case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!q) return reply('Where is the audio?')
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await botRATHIIncTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const rathitiktokaudio = musim_rambutan.result.nowatermark
    botRATHIInc.sendMessage(from, { audio: { url: rathitiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break
	case 'music': case 'play': case 'song': case 'ytplay': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let ytvc = await hx.youtube(anu.url)
let buttons = [
{buttonId: `ytvd ${ytvc.link}`, buttonText: {displayText: '??? Video'}, type: 1},
{buttonId: `ytad ${ytvc.mp3}`, buttonText: {displayText: '??? Audio'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `*| YOUTUBE PLAY |*

${global.themeemoji} Title : ${anu.title}
${global.themeemoji} Ext : Search
${global.themeemoji} ID : ${anu.videoId}
${global.themeemoji} Duration : ${anu.timestamp}
${global.themeemoji} Viewers : ${anu.views}
${global.themeemoji} Uploaded : ${anu.ago}
${global.themeemoji} Author : ${anu.author.name}
${global.themeemoji} Channel : ${anu.author.url}
${global.themeemoji} Description : ${anu.description}
${global.themeemoji} Url : ${anu.url}`,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: anu.title,
body: `${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: anu.url,
sourceUrl: anu.url
}}
}
botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'getmusic': case 'getvideo': case 'yt': case 'youtube': case 'ytvideo': case 'ytmp3': case 'ytmp4': case 'ytmusic': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*| YOUTUBE DOWNLOADER |*

${global.themeemoji} Title : ${res.title}
${global.themeemoji} Size : ${res.size}
${global.themeemoji} Quality : ${res.quality}

_Select video or audio and wait a while_`
let buttons = [
{buttonId: `ytvd ${res.link}`, buttonText: {displayText: '??? Video'}, type: 1},
{buttonId: `ytad ${res.mp3}`, buttonText: {displayText: '??? Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: `${global.ownername}`,
thumbnail: {url:res.thumb},
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
botRATHIInc.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
reply("Link error!")
}
}
break
case 'ytvd': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
botRATHIInc.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
}
break
case 'ytad': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
botRATHIInc.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.botname}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
}
break
            case 'ytdl': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)        
                if (anu.filesize_video >= 999999) return reply('*File Over Limit* '+util.format(anu))
                tummb = await getBuffer(anu.thumb)
                audio = await getBuffer(anu.audio)        
                botRATHIInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => reply(mess.error))
                botRATHIInc.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => reply(mess.error))
            }
            break
case 'ytshorts': case 'shorts': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if (!text) return reply(`*Use ${prefix + command} put yt shorts link*`)
  if (!isUrl(args[0]) && !args[0].includes('youtube')) return reply(`The link you provided is not valid`)
  xeonkey.Youtube(`${text}`).then(async (data) => {
  if (data.medias[0].formattedSize.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(data)) 
  cap = `
*YOUTUBE SHORTS*

*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}\n*${themeemoji}DURATION* ${data.duration}\n*${themeemoji}ID:* ${data.medias[0].cached}\n*${themeemoji}LINK:* ${data.url}\n\n*${botname}*`
  buf = await getBuffer(data.thumbnail)
  botRATHIInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
  botRATHIInc.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break
	  case 'pinterest': case 'pin': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply("What picture are you looking for?")
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `pinterest ${args.join(" ")}`, buttonText: {displayText: 'Next Image ????'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption:  `${global.rathiemoji} Title : ` + args.join(" ") + `\n${global.rathiemoji} Media Url : `+imgnyee,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}
}
botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch(_ => _)
} catch {
reply("Error")
}
}
break
case 'mediafire': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
botRATHIInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
            case 'umma': case 'ummadl': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	        if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '????Audio????'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '???????Video???????'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
${themeemoji} Title : ${anu.title}
${themeemoji} Author : ${anu.author.name}
${themeemoji} Like : ${anu.like}
${themeemoji} Caption : ${anu.caption}
${themeemoji} Url : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
			footer: botRATHIInc.user.name,
			buttons,
			headerType: 4
		    }
		    botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        botRATHIInc.sendMessage(m.chat, { image: { url }, caption: `${themeemoji} Title : ${anu.title}\n${themeemoji} Author : ${anu.author.name}\n${themeemoji} Like : ${anu.like}\n${themeemoji} Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
        	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
		if (!text) return reply(`Where is the ringtone name noob?, Example : ${prefix + command} charlie puth`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		botRATHIInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'tempo': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
var req = args.join(' ')
media = await botRATHIInc.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
botRATHIInc.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
botRATHIInc.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
reply("Send video/audio")
}
}
break
case 'volume': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await botRATHIInc.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
botRATHIInc.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
botRATHIInc.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
reply("Send video/audio")
}
}
break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
		if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await botRATHIInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                botRATHIInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                botRATHIInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                botRATHIInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '??? DATABASE LIST ???\n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n????????????????????????????????????????????????????????????????????????\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
	    case 'anonymous': {
		if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: '????Start????' }, type: 1 }
                ]
                botRATHIInc.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await botRATHIInc.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, botRATHIInc.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '????Start????' }, type: 1 }
                    ]
                    await botRATHIInc.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await botRATHIInc.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '????Stop????' }, type: 1 }
                    ]
                    await botRATHIInc.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, botRATHIInc.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '???Skip???' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '????Stop????' }, type: 1 }
                    ]
                    await botRATHIInc.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, botRATHIInc.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await botRATHIInc.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, botRATHIInc.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '????Stop????' }, type: 1 }
                    ]
                    await botRATHIInc.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, botRATHIInc.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '????Start????' }, type: 1 }
                    ]
                    await botRATHIInc.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await botRATHIInc.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '???Skip???' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '????Stop????' }, type: 1 }
                    ]
                    await botRATHIInc.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, botRATHIInc.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await botRATHIInc.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, botRATHIInc.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '????Stop????' }, type: 1 }
                    ]
                    await botRATHIInc.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, botRATHIInc.user.name, m)
                }
                break
            }
            case 'public': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                botRATHIInc.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                botRATHIInc.public = false
                reply('Successful Change To Self Usage')
            }
            break
case 'setstatuts':
case 'setbio':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Send orders *#setbio text*')
botRATHIInc.setStatus(`${q}`)
reply(mess.success)
break
case 'antitag': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return
if (args.length < 1) return replay(`Type on to enable\nType off to disable`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
replay(`Successfully activated antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
replay(`Successfully deactivated antitag!`)
} else {
replay('Choose on or off')
}
}
break
            case 'ping': case 'p': case 'botstatus': case 'statusbot': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

???? Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'speedtest': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                botRATHIInc.sendContact(m.chat, global.vcardowner, m)
            }
            break
  case 'setmenu': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!isCreator) return reply(mess.owner)
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = false
                reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateDocument = false
                reply(mess.success)
                //} else if (args[0] === 'templateMessage'){
                /////setbot.templateImage = false
                /////setbot.templateVideo = false
                /////setbot.templateGif = false
                /////setbot.templateMsg = true
                //////setbot.templateDocument = false
                //////reply(mess.success)
                } else if (args[0] === 'templateDocument'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = true
                reply(mess.success)
                } else {
                let sections = [
                {
                title: "????CHANGE BOT MENU????",
                rows: [
                {title: "Image Menu", rowId: `setmenu templateImage`, description: `Tap to change bot menu to Image Menu`},
                {title: "Gif Menu", rowId: `setmenu templateGif`, description: `Tap to change bot menu to Gif Menu`},
                {title: "Video Menu", rowId: `setmenu templateVideo`, description: `Tap to change bot menu to Video Menu`},
                ///////////////{title: "Text Menu", rowId: `setmenu templateMessage`, description: `Tap to change bot menu to Text Menu`},
                {title: "Document Menu", rowId: `setmenu templateDocument`, description: `Tap to change bot menu to Document Menu`}
                ]
                },
                ]
                botRATHIInc.sendListMsg(m.chat, `Please select the menu you want to change!`, ` `, botRATHIInc.user.name, `Click Here`, sections, m)
                }
            }
            break
case 'request': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} hello dev please add a downloader feature`)
teks = `*| REQUEST |*`
teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSuccessfully sent to owner`
for (let i of owner) {
botRATHIInc.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
botRATHIInc.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
                    case 'bug': case 'report': {
                    	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                    	if(!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
                    	botRATHIInc.sendMessage(`${owner}@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break
case 'sc': case 'script': case 'github': case 'donate': case 'code': case 'updatebot': case 'cekbot': case 'sourcecode': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
teks = `*??? ${global.botname} Script ???*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nDont forget to donate ????`
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu ????'}, type: 1}
]
let buttonMessage = {
image: thum,
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"I deserve something for my hardwork",
body: "Click to donate", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/8737b098fd5702daeb7e0.jpg',
sourceUrl: "https://telegra.ph/file/8737b098fd5702daeb7e0.jpg"
}}
}
botRATHIInc.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'alive': case 'panel': case 'list': case 'menu': case 'help': case '?': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
botRATHIInc.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
	                let btn = [{
                                urlButton: {
                                    displayText: 'YouTube ????',
                                    url: `${websitex}`
                                }
                            }, {
                                callButton: {
                                    displayText: '???? Github ????',
                                    url: `${botscript}`
                                }
                            },{
                                quickReplyButton: {
                                    displayText: '???? Menu ????',
                                    id: 'command'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '???? OWNER ????',
                                    id: 'owner'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        botRATHIInc.send5ButImg(m.chat, menulist, global.botname, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        botRATHIInc.send5ButGif(m.chat, menulist, global.botname, global.vidmenu, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        botRATHIInc.send5ButVid(m.chat, anu, global.botname, global.vidmenu, btn, global.thumb)
                        } else if (setbot.templateVideo) {
                        botRATHIInc.send5ButVid(m.chat, menulist, global.botname, global.vidmenu, btn, global.thumb)
                        /////////} else if (setbot.templateMsg) {
                        /////////botRATHIInc.send5ButMsg(m.chat, menulist, global.botname, btn)
                        } else if (setbot.templateDocument) {
                        let buttonmenu = [
        	{ urlButton: { displayText: `YouTube ????`, url : `${websitex}` } },
            { urlButton: { displayText: `???? Github ????`, url: `${botscript}` } },
            { quickReplyButton: { displayText: `???? Menu ????`, id: 'command'} },
            { quickReplyButton: { displayText: `???? OWNER ????`, id: 'owner'} }
        	]
        	botRATHIInc.sendMessage(m.chat, { caption: menulist, document: fs.readFileSync('./XeonMedia/theme/cheems.xlsx'), mimetype: `${docs}`, fileName: `${ownername}`, templateButtons: buttonmenu, footer: `${botname}`, mentionedJid: [m.sender] })
                        }
                     }
            break
                case 'command': {
                	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `Please Choose The Menu\n(????????? ???????????? ?????? ??????????????????.)\n\n`,
                    buttonText: "Menu",
                    footerText: `${global.botname}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
                        "rows": [
                            {
                                "title": "?????? Thanks To ??????",
                                "description": "Displays The List Of Credit Of The Bot !!",
                                "rowId": `${prefix}thanks`
                            }
								]
							},
							{
								"title": "???? Bot Features ????",
								"rows": [
									{
										"title": "???? Menu Titles ????",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}menutitles`
									},
									{
										"title": "???? Owner Menu ????",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
									},
									{
										"title": "???? Group Menu ????",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
									},
                                    {
										"title": "???? Logo Menu????",
										"description": "Displays The List Of Logo Features",
										"rowId": `${prefix}logomenu`
									},
									{
										"title": "???? Download Menu ????",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "???? Sticker Menu ????",
										"description": "Displays The List Of Sticker Features",
										"rowId": `${prefix}stickermenu`
									},
									{
										"title": "???? Search Menu ????",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "?????? Tool Menu ??????",
										"description": "Displays The List Of Tool Features",
										"rowId": `${prefix}toolmenu`
									},
									{
										"title": "??????? Image Menu ???????",
										"description": "Displays The List Of Image Effect Features",
										"rowId": `${prefix}imagemenu`
									},
									{ 
										"title": "???? Emoji Menu ????",
										"description": "Displays The List Of Emoji Features",
										"rowId": `${prefix}emojimenu`
									},
									{
										"title": "?????? Convert Menu ??????",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
									},
                                    {
                                        "title": "???? Thanks For Using RATHI MD ????",
                                        "description": "Displays The List Of Convert Features",
                                        "rowId": ``
                                    }
								]
							},
							{
								"title": "???? Features Of Bot ????",
								"rows": [
									{
										"title": "Other ???",
										"description": "Displays The List Of Other Features",
										"rowId": `${prefix}othermenu`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            botRATHIInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
//???????????? ?????????
            case 'menutitles':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Menu Titles')
await botRATHIInc.send5ButImg(from, `
???? OWNER MENU\n
???? GROUP MENU\n
???? DOWNLOAD MENU\n
???? STICKER MENU\n
???? SEARCH MENU\n
???? TOOL MENU\n
???? IMAGE MENU\n
???? EMOJI MENU\n
???? CONVERT MENU\n

` + '' + ' ', `${botname}`,Lollipop, [{"urlButton": {"displayText": "???? TEXT ME ????","url": `https://wa.me/94712448370?text=HI%20RATHI????`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate ????","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner ????","id": 'owner'}}] )
break
case 'ownermenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Owner Menu')
await botRATHIInc.send5ButImg(from, `

????????????[OWNER MENU]
???? self
???? public
???? antitag
???? ban [add/del]
???? banchat [on/off]
???? join [link]
???? leavegc
???? setbio
???? block [user]
???? unblock [user]
???? bcgroup [text]
???? bcall [text]
???? bcimage [image]
???? bcvideo [video]
???? bcaudio [audio]
???? bcloc [text]
???? setppbot [image]
???? setexif
????????????????????????????????????????????????
` + '' + ' ', `${botname}`,Lollipop, [{"urlButton": {"displayText": "???? TEXT ME ????","url": `https://wa.me/94712448370?text=HI%20RATHI????`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate ????","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner ????","id": 'owner'}}] )
break
case 'groupmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Group Menu')
await botRATHIInc.send5ButImg(from, `
????????????[GROUP MENU]	
???? groupsetting
???? grouplink
???? setname [text]
???? setdesc [text]
???? group
???? resetgrouplink
???? editinfo [option]
???? add [user]
???? kick [reply/tag]
???? hidetag [text]
???? tagall [text]
???? autosticker [on/off]
???? autostickerpc [on/off]
???? react [reply emoji]
???? getpp [reply user]
????????????????????????????????????????????????
` + '' + ' ', `${botname}`,Lollipop, [{"urlButton": {"displayText": "???? TEXT ME ????","url": `https://wa.me/94712448370?text=HI%20RATHI????`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate ????","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner ????","id": 'owner'}}] )
break
case 'logomenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Logo Menu')
await botRATHIInc.send5ButImg(from, `
????????????[LOGO MENU]	
???? candy
???? 8bit
???? horror
???? hoorror
???? retro
???? blackpinkrathi
???? deepsea
???? scifi
???? fiction
???? berry
???? fruitjuice
???? biscuit
???? wood
???? chocolate
???? matrix
???? blood
???? halloween
???? wicker
???? darkgold
???? firework
???? skeleton
???? sand
???? glue
???? leaves
???? magma
???? lava
???? rock
???? bloodglas
???? underwater
???? textmaker
???? honey
???? ice
???? watercolor
???? multicolor
???? snow
???? harrypot
???? harrypotter
???? brokenglass
???? waterpipe
???? spooky
???? circuit
???? metallic
???? demon
???? sparklechristmas
???? christmas
???? 3dchristmas
???? 3dbox
???? waterdrop
???? lion2
???? papercut
???? transformer
???? neondevil
???? 3davengers
???? 3dstone
???? 3dstone2
???? summertime
???? thunder
???? window
???? graffiti
???? graffitibike
???? pornhub
???? glitch
???? blackpink
???? glitch2
???? glitch3
???? 3dspace
???? lion
???? 3dneon
???? greenneon
???? bokeh
???? holographic
???? bear
???? wolf
???? joker
???? dropwater
???? dropwater2
???? thewall
???? neonlight
???? natural
???? carbon
???? pencil
???? blackpink2
???? neon
???? neonlight2
???? toxic
???? strawberry
???? discovery
???? 1917
???? sci_fi
???? ancient
???? fabric
???? hoorror
???? whitebear
???? juice
???? batman
???? multicolor
???? collwall
???? wonderful
???? cool
???? sketch
???? marvel
???? foggy
???? writing
???? halloweenfire
???? halloween
???? watercolor
???? classic
????????????????????????????????????????????????
` + '' + ' ', `${botname}`,Lollipop, [{"urlButton": {"displayText": "???? TEXT ME ????","url": `https://wa.me/94712448370?text=HI%20RATHI????`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate ????","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner ????","id": 'owner'}}] )
break
case 'downloadmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Download Menu')
await botRATHIInc.send5ButImg(from, `
????????????[DOWNLOAD MENU]	
???? ytmp3 [url|quality]
???? ytmp4 [url|quality]
???? facebook [url]
???? fbmp3 [url]
???? twitter [url]
???? twittermp3 [url]
???? tiktok [url]
???? tiktokaudio [url]
???? instagram [url]
???? mediafire [url]
???? getmusic [yt link]
???? getvideo [yt link]
???? gitclone [repo link]
???? soundcloud [url]
???? zippyshare [url]
????????????????????????????????????????????????
` + '' + ' ', `${botname}`,Lollipop, [{"urlButton": {"displayText": "???? TEXT ME ????","url": `https://wa.me/94712448370?text=HI%20RATHI????`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate ????","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner ????","id": 'owner'}}] )
break
case 'searchmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Search Menu')
await botRATHIInc.send5ButImg(from, `
????????????[SEARCH MENU]		
???? play [query]
???? song [query]
???? yts [query]
???? lyrics [query]
???? google [query]
???? gimage [query]
???? pinterest [query]
???? image [query]
???? film [query]
???? playstore [query]
???? wallpaper [query]
???? searchgc [query]
???? happymod [query]
???? wikimedia [query]
???? ytsearch [query]
???? ringtone [query]
????????????????????????????????????????????????
` + '' + ' ', `${botname}`,Lollipop, [{"urlButton": {"displayText": "???? TEXT ME ????","url": `https://wa.me/94712448370?text=HI%20RATHI????`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate ????","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner ????","id": 'owner'}}] )
break
case 'convertmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Convert Menu')
await botRATHIInc.send5ButImg(from, `
????????????[CONVERT MENU]	
???? toimage [reply stick]
???? sticker [reply img|gif]
???? take [reply img|gif|stik]
???? smeme [reply img]
???? emoji [emoji]
???? tovideo [reply img]
???? togif [reply stick]
???? tourl [reply img]
???? tovn [reply aud]
???? tomp3 [reply vn]
???? toaudio [reply vid]
???? ebinary [reply txt]
???? dbinary [reply txt]
???? tinyurl [link]
???? styletext [text]
???? volume [reply aud]
???? tempo [reply aud]
???? bass [reply aud]
???? blown [reply aud]
???? deep [reply aud]
???? earrape [reply aud]
???? fast [reply aud]
???? fat [reply aud]
???? nightcore [reply aud]
???? reverse [reply aud]
???? robot [reply aud]
???? slow [reply aud]
???? squirrel [reply aud]
????????????????????????????????????????????????
` + '' + ' ', `${botname}`,Lollipop, [{"urlButton": {"displayText": "???? TEXT ME ????","url": `https://wa.me/94712448370?text=HI%20RATHI????`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate ????","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner ????","id": 'owner'}}] )
break
case 'emojimenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Emoji Menu')
await botRATHIInc.send5ButImg(from, `
????????????[EMOJI MENU]		
???? instagramemoji
???? facebookemoji
???? iphoneemoji
???? samsungemoji
???? joyemoji
???? skypeemoji
???? twitteremoji
???? whatsappemoji
???? microsoftemoji
???? googleemoji
???? pediaemoji
???? microsoftemoji
????????????????????????????????????????????????
` + '' + ' ', `${botname}`,Lollipop, [{"urlButton": {"displayText": "???? TEXT ME ????","url": `https://wa.me/94712448370?text=HI%20RATHI????`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate ????","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner ????","id": 'owner'}}] )
break
case 'imagemenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Image Effect Menu')
await botRATHIInc.send5ButImg(from, `
????????????[IMG EFFECT MENU]
???? wanted
???? blur
???? framed
???? gayeffect
???? imagesketch
???? invert
???? burn
???? triggeredwebp
???? shit
???? rip
???? jail
???? beautifuleffect
???? deleteeffect
???? pixelate
????????????????????????????????????????????????
` + '' + ' ', `${botname}`,Lollipop, [{"urlButton": {"displayText": "???? TEXT ME ????","url": `https://wa.me/94712448370?text=HI%20RATHI????`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate ????","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner ????","id": 'owner'}}] )
break
case 'stickermenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Sticker Menu')
await botRATHIInc.send5ButImg(from, `
????????????[STICKER MENU]	
???? patrick
???? emoji
???? emojimix
???? attp
???? ttp
????????????????????????????????????????????????
` + '' + ' ', `${botname}`,Lollipop, [{"urlButton": {"displayText": "???? TEXT ME ????","url": `https://wa.me/94712448370?text=HI%20RATHI????`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate ????","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner ????","id": 'owner'}}] )
break
case 'toolmenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Tool Menu')
await botRATHIInc.send5ButImg(from, `
????????????[TOOL MENU]	
???? translate [text]
???? fliptext [text]
???? toletter [number]
????????????????????????????????????????????????
` + '' + ' ', `${botname}`,Lollipop, [{"urlButton": {"displayText": "???? TEXT ME ????","url": `https://wa.me/94712448370?text=HI%20RATHI????`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate ????","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner ????","id": 'owner'}}] )
break
case 'othermenu':
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Other Menu')
await botRATHIInc.send5ButImg(from, `
????????????[OTHER MENU]		
???? afk
???? chatinfo
???? script
???? speedtest
???? ping
???? owner
???? delete
???? chatinfo
???? quoted
???? request
???? donate
???? report [bug]
?????????????????????????????????????????????
` + '' + ' ', `${botname}`,Lollipop, [{"urlButton": {"displayText": "???? TEXT ME ????","url": `https://wa.me/94712448370?text=HI%20RATHI????`}},{"urlButton": {"displayText": "Script????","url": `${botscript}`}},{"quickReplyButton": {"displayText": "Donate ????","id": 'donate'}},{"quickReplyButton": {"displayText": "Owner ????","id": 'owner'}}] )
break
case 'thanks': 
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(`
Thanks to\n
Xeon(For Base)\n
My parents\n
& Me????
And all friends who helped assemble this sexy script !!!`)
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			//anti-tag
const listTag = [`${global.ownertag}@s.whatsapp.net`]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
//anti-tag 2
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./XeonMedia/theme/yourtag.webp')
botRATHIInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
botRATHIInc.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
//anti-tag 3
if (budy.includes(`${global.ownertag}`)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./XeonMedia/theme/yourtag.webp')
botRATHIInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
botRATHIInc.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    botRATHIInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
