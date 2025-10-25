import fetch from "node-fetch";

export async function handletavily(input) {
  const TAVILY_TOKEN = process.env.TAVILY_TOKEN;
  const url = `https://api.tavily.com/${TAVILY_TOKEN}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: input.chat_id,
      text: input.message,
    }),
  });

  const data = await response.json();
  return { type: "response", data };
}
