//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "princenjiprospper@gmail.com";
global.location = "Buea,Cameroon.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaEW2eE3WHTU7fTQht19";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "237673805208";
global.sudo = process.env.SUDO || "237673805208";
global.owner = process.env.OWNER_NUMBER || "237673805208";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUpPR1NjUzZGeWo2NWFSMWlqM2g2TmdBR2tSZ01IRnYwMEpQVEhXNHhsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2J5K0RJTDZMM3pEU3dCblVDVG1lY0twcEpMeHdvV0w2NnNhWTlLUzlTST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjR3FZbTNmdndZT2NRRzhPYVVtaDNRQVdieGxCeDQ2Z25ka2M0U0NCeFVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxRXJyWlZwRldZZTFoWWlqTGZHc1hMMm1EejVEMGVXbUlmWXQ1MWQrakJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldMdTNJbEtMNHVab1lWSy8vVStVTWFFc1R0YnpOZCtQMzYxQVBSeVFmWDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1xVERvcldud0w4K3NiZEQwNkxzYXo1RUJEdW5vMzZveVZjdC9EWTdZMzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0E3N0FlY1hHd2pSWmVMaFRudU1Kbm13QTRLaCs1Q2ZTRG1BVk9Cck1XUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjRzREdtNVFCU2VIVnFtV1JUV0pmZTVYYVRtRlRFMDNTYk0xN0gxSkhTUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFuaXFzamlkenZzZFpSNWhMYy96N29uWGh4K1NHUWIyVVpBaU9tVjdQUXlFZm05aU5yak5MTHhWQmg0L0NpK1JSTS8vK3pRYmdVQWJRNmg0QlU5U2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiJ1NHlWc29IUkpFMkY4S0pobHh2UFMrSUF3b0tWUTI3QnMwVkRNSU5rT1dZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuck9vbmNBSFRhQ2w4SzFvbjAyeERRIiwicGhvbmVJZCI6ImM4MmMyN2JhLTZlN2QtNDU2ZC04YjQxLWY1ZmEzNjBiZDc3ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQ2lhRkR3WHd0VFRwbHh5eUR1dGJvMEtCc0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUt1YzcvTStyT3VjUkViQmg5c0lnbHRML1NzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlQzOVEzOERHIiwibWUiOnsiaWQiOiIyMzc2NzMyODM1MzM6OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnFWbGVvREVKZVM3clFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibmhQdmh0ZllPbHhMVkE2QW96M3VHMUxsNGtyVEZqTXVqUW5uRVZ5WDZDND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWVhZYjNEQ1RkdHZMcGs1clBtdFFYZmxHL2lFRCtvQWtUd1Bob2p6ekdzMGlqTnI0NG5EaUErN1NCV3pQWHd4UERiQW54eW1nV25pMmFaVkhuUGVORFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjZPbTZOZGY1dkxnVEpURUhpZzN5WDh1MVdpSCs2aVkxUFpwdlcrTnU4S0ErckNZWmsrOGNVb2JRWUNTSUJoU0ZnOC91R0JiaTRnNGtQV05yTHF0cGpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjczMjgzNTMzOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjRUNzRiWDJEcGNTMVFPZ0tNOTdodFM1ZUpLMHhZekxvMEo1eEZjbCtndSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTQ2OTIyMH0="
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".,!,#,/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 𝐏𝐫𝐨𝐓𝐞𝐜𝐡 𝐟𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧",
  author: process.env.PACK_AUTHER || "PROTECH",
  packname: process.env.PACK_NAME || "🤝",
  botname: process.env.BOT_NAME || "Pro-Md",
  ownername: process.env.OWNER_NAME || "PROTECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "Us2pP4zzoiWjzaWQnoEkUq3Q",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0385228b961473710eff4e7daed873e8",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "PROTECH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
