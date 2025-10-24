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

## 🧩 How It Works

The MCP server exposes a simple HTTP endpoint `/mcp`  
where you can send requests like:

```json
{
  "tool": "hello",
  "input": { "name": "Abdelbarie" }
}
