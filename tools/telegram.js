import fetch from "node-fetch";

export async function handleTelegram(input) {
  const token = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID; // fixed chat
  const message = input.message || "Hello from MCP Server!";

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  const data = await response.json();
  return { type: "response", data };
}
