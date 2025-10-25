import fetch from "node-fetch";

export async function handleTelegram(input) {
  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: input.chat_id, text: input.message }),
  });
  const data = await response.json();
  return { type: "response", data };
}
