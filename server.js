import express from "express";
import { handleTelegram } from "./tools/telegram.js";
import { handleN8n } from "./tools/n8n.js";
import { handlegemini } from "./tools/gemini.js";
import { handletavily } from "./tools/tavily.js";

// add imports for each new app

const app = express();
app.use(express.json());

app.post("/mcp", async (req, res) => {
  const { tool, input } = req.body;

  try {
    switch (tool) {
      case "telegram_api":
        return res.json(await handleTelegram(input));
      case "run_n8n":
        return res.json(await handleN8n(input));
      case "gemini_api":
        return res.json(await handlegemini(input));
      case "tavily_api":
        return res.json(await handletavily(input));
        
      // add more cases here...
      default:
        return res.json({ type: "error", message: "Unknown tool" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ type: "error", message: err.message });
  }
});

app.listen(3000, () => console.log("🚀 MCP Server ready"));
