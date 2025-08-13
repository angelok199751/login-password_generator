import fs from 'fs';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const REPORT_URL = process.env.REPORT_URL; // Добавь в .env

async function sendTelegramMessage(text) {
  const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "Markdown",
    }),
  });

  if (!res.ok) {
    console.error("Ошибка отправки в Telegram:", await res.text());
  } else {
    console.log("Сообщение отправлено успешно!");
  }
}

function getStatsFromJson(jsonPath) {
  const report = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  const total = report.stats.expected + report.stats.unexpected + report.stats.skipped;
  const passed = report.stats.expected;
  const failed = report.stats.unexpected;
  const skipped = report.stats.skipped;
  const durationMs = report.stats.duration;

  return { total, passed, failed, skipped, durationMs };
}

async function main() {
  try {
    const stats = getStatsFromJson('./test-results.json');

    const durationSec = (stats.durationMs / 1000).toFixed(2);

    const message = 
      `✅ *Тесты завершены!*\n` +
      `Всего тестов: *${stats.total}*\n` +
      `✔️ Пройдено: *${stats.passed}*\n` +
      `❌ Провалено: *${stats.failed}*\n` +
      `⏭ Пропущено: *${stats.skipped}*\n` +
      `⏱ Время выполнения: *${durationSec}* секунд\n\n` +
      `📊 Отчёт доступен [здесь](${REPORT_URL})`;

    await sendTelegramMessage(message);
  } catch (err) {
    console.error("Ошибка при отправке отчёта:", err);
  }
}

main();
