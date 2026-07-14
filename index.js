const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.BOT_TOKEN;
const ADMIN_ID = process.env.ADMIN_ID;

const bot = new TelegramBot(TOKEN, { polling: true });


bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "سلام 👋\nبه ربات خوش آمدید 🌹\n\nکلمه مورد نظر را ارسال کنید."
  );
});


bot.on("message", (msg) => {

  const text = msg.text;

  if (!text) return;

  if (text === "رقص") {
    bot.sendMessage(msg.chat.id, "فیلم‌های مربوط به رقص ارسال می‌شود 🎬");
  }

  else if (text === "عقل") {
    bot.sendMessage(msg.chat.id, "فیلم‌های مربوط به عقل ارسال می‌شود 🎬");
  }

});index.js