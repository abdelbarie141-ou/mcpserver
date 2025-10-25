# 🧠 MCP Server

A lightweight **Model Context Protocol (MCP)** server built with **Node.js + Express**,  
designed to connect your **AI models**, **Render hosting**, and **n8n workflows**.

---

## 🚀 Features

- Simple and fast setup — only two files (`server.js` + `package.json`)
- Supports custom tools (e.g., trigger n8n workflows, query APIs, etc.)
- 100% compatible with Render or any Node host
- JSON-based protocol ready for AI agent connections

---

⚙️ Setup

Clone the repo

  git clone https://github.com/YOUR_USERNAME/mcp-server.git
  cd mcp-server

---
Install dependencies

  npm install

---
Add .env file (never commit your secrets)

  PORT=3000
  N8N_WEBHOOK=https://YOUR_N8N_URL/webhook/from-mcp
  GEMINI_TOKEN=your_gemini_api_key
  TAVILY_TOKEN=your_tavily_api_key
  TELEGRAM_TOKEN=your_telegram_bot_token


Start the MCP server

  npm run build   # Compile TypeScript if needed
  npm start


The server runs on http://localhost:3000 by default.

🚀 Usage

Send a POST request to /mcp with a tool name and input data:

  curl -X POST http://localhost:3000/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "tool": "run_n8n",
    "input": {
      "message": "Hello from MCP!"
    }
  }'


Supported tools (examples):

  run_n8n → calls n8n workflow webhook

  send_telegram → sends a message via Telegram bot

  gemini → calls Gemini API

  tavily → calls Tavily API

🛡 Environment Variables

  N8N_WEBHOOK → URL of your n8n workflow webhook

  GEMINI_TOKEN → Gemini API key

  TAVILY_TOKEN → Tavily API key

  TELEGRAM_TOKEN → Telegram bot token

Tip: Never put secrets directly in code. Use .env and process.env.

🧩 Adding New Tools

Create a new file in /tools:

// tools/mytool.js
export async function runMyTool(input) {
  // Your code here
  return { type: "response", data: input };
}


Import it in server.js:

  import { runMyTool } from "./tools/mytool.js";

  if (tool === "mytool") {
    const result = await runMyTool(input);
    return res.json(result);
  }

📦 Deploy

 Render: set environment variables in the Render dashboard.
 Docker: mount .env or set environment variables.
