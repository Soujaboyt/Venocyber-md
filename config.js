//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "brax6265@gmail.com;
global.location = "Nairobi,Kenya.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.kenya || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Cronix/Brax-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "254741733741";
global.sudo = process.env.SUDO || "254741733741";
global.owner = process.env.OWNER_NUMBER || "254741733741";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 7;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://braxqr-956a7ad0e005.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5reFdDbHIweHNlRXcydmFJK2xmakNmR2s2ZHM4YjU0NlhLS1I4ZytYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGlwWUhmWkFKUk0rN1ZoNHRxWVZhWFdYUUVrcHYrYW1yWVV4YUNvZ2lGdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3R1phaFhualZsQjJpL0NjTWluOXAvMHVYcDQyZkd0NEZTRlNtSVRIOTJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDdHQrVTZkVzFCMDdqL2xxS3FhMHV1YzFobWtsWVpmWHlqeUhnSUNhZEZNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRGV25DVTl5SnJLaVduYlQ1NEE5RjZVS1R4M25XZTNJc3hXOFpUbm9Bblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks4TlR5aDlMbUhyamRDcTRySkt3RHUvZ2daUTlVNDYvY3FFQjBLRzJxVTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUlqYmxiaHFDM0tjRlhabjlRMHNtTVJxdzJ5Z2NvWFRqV3duVEpocDduTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2FxcjJxcWMwV3VvenBheHVHdkQ5RDBSaUFESDRBUGhJNVdxWnVOMkdDRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCZklSOEM3dVNzQ1BQUzlwRWRvRFlJTzQzTEpoZ0FEVnhYMUxzUVp3OFRqTDBnb1JIL0g5RjArc1ZmMkVWckcxYnEwV05KcWZnU3VWdnRKSUxucmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiMDdJQ1l4RDB4TGR2dVJlREYwOHduNHVjN3lXZFp5UFNVaVQwbWFkZDNudz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NDE3MzM3NDFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0M0QzYwMTY2RUVDMkRBMTgyMTg0ODYyODkwMjhGODUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTI0NjUwOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoid3FLd0xDTmxSRmFiV3laSUdVSi1jQSIsInBob25lSWQiOiJhOGU4ZmQyNS1kZWQ2LTQ1NzMtODFmNi0yMzIzYjcwMTc1NGEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlpsTjJicnRjVUxHdS9SWTlDNkt2bkc1NmF3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkgzY1R1NHdrbVJKV0hicEhaSHhyRE9pOE56ND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJHUlpHMVY5MiIsIm1lIjp7ImlkIjoiMjU0NzQxNzMzNzQxOjQ5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNObVNzZHdIRUp2RzRMUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJtVHg3KzJzNnU1Q1hlc1M2UFpCMEVHa2wyNWVRTElMOFh1MlNZNHZPVUZRPSIsImFjY291bnRTaWduYXR1cmUiOiI1ZFBIU0xObVMrcEVIdnhCSkVRQzhHVlhsZWVoSzZVUHVobi9KaDZSNDl4SEdENkRFZHNZeUNBWWd2Ukg3Q0hOZUhNRm9tVVNpSkhLSHFNOUp3R2lBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYklheUxjYTdHMDVZRWE2Z1g2RGhWb1B5aWVPNkRyTTU4WGxVYmpTZk1tOTdEaE5CZEJvRjMyWjRHNFJ3QkErcTBsUFVscFBPbXEvak80U2VnVVhialE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NDE3MzM3NDE6NDlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWms4ZS90ck9ydVFsM3JFdWoyUWRCQnBKZHVYa0N5Qy9GN3RrbU9MemxCVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTI0NjUwNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEQXcifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-brax-𝐌𝐃😍 with supported by he.is.me checked by Wasi-ser | oyyy enjoy safe chuddy buddy any problem then https://rb.gy/izabex | don't worry we are not here to ban your accounts 😁 🦜🌝 ( https://rb.gy/izabex )",
  author: process.env.PACK_AUTHER || "brax",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BRAX-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "BRAX",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
