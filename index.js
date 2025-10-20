// MT2 Telegram Menu Bot (Telegraf)
// Shows a grid of URL buttons just like the screenshot.

import { Telegraf, Markup } from 'telegraf';

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error('❌ Missing BOT_TOKEN. Set it as an environment variable.');
  process.exit(1);
}

const bot = new Telegraf(token);

// ---- Button Layout (edit URLs anytime) ----
const MENU = Markup.inlineKeyboard([
  // Row 1
  [
    Markup.button.url('🔗 Visit Website', 'https://www.aep-org.com'),
    Markup.button.url('📜 Read Whitepaper', 'https://example.com/whitepaper') // <-- replace later
  ],
  // Row 2
  [ Markup.button.url('💬 Join Official Group', 'https://example.com/group') ], // or remove
  // Row 3
  [ Markup.button.url('❌ Follow on X', 'https://x.com/MT2_agency333') ],
  // Row 4
  [
    Markup.button.url('🇺🇸 English Info', 'https://t.me/MT2_English'),
    Markup.button.url('🇮🇩 Indonesia Info', 'https://example.com/id') // placeholder
  ],
  // Row 5
  [
    Markup.button.url('🇨🇳 Chinese Info', 'https://example.com/zh'),
    Markup.button.url('🇯🇵 Japanese Info', 'https://example.com/ja')
  ],
  // Row 6
  [
    Markup.button.url('🇰🇷 Korea Info', 'https://example.com/ko'),
    Markup.button.url('🇹🇼 Taiwan Info', 'https://example.com/tw')
  ],
  // Row 7
  [ Markup.button.url('🖼 Browse Media Materials', 'https://example.com/media') ],
  // Row 8
  [ Markup.button.url('🎓 Learn with Tutorial', 'https://example.com/tutorial') ],
  // Row 9
  [ Markup.button.url('🌍 Explore All Languages', 'https://example.com/languages') ]
]);

const WELCOME =
  'Welcome to MT2!\nChoose an option below to access official resources, updates, and media.';

// /start → show the menu
bot.start((ctx) => ctx.reply(WELCOME, MENU));

// Optional: "menu" keyword also shows buttons
bot.hears(/^(menu|Menu|MENU)$/i, (ctx) => ctx.reply(WELCOME, MENU));

// Add commands in Telegram UI
bot.telegram.setMyCommands([
  { command: 'start', description: 'Open main menu' },
  { command: 'menu', description: 'Show menu again' }
]).catch(() => {});

bot.launch().then(() => console.log('✅ MT2 bot is running'));
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
