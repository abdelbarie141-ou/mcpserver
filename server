import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// Example endpoint the AI will call
app.post("/mcp", async (req, res) => {
  const { tool, input } = req.body;

  // Example: trigger an n8n webhook
  if (tool === "run_workflow") {
    try {
      const response = await fetch("https://YOUR_N8N_URL/webhook/from-mcp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      const data = await response.json();
      return res.json({ type: "response", data });
    } catch (err) {
      return res.status(500).json({ error: "Failed to call n8n", details: err.message });
    }
  }

  // Example local tool
  if (tool === "hello") {
    return res.json({ type: "response", data: `👋 Hello ${input.name || "friend"}!` });
  }

  res.status(400).json({ error: "Unknown tool" });
});

// Root route
app.get("/", (req, res) => {
  res.send("✅ MCP Server running successfully!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 MCP Server running on port ${PORT}`));
