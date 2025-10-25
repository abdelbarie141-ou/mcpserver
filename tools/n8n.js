import fetch from "node-fetch";

/**
 * Call an n8n webhook from MCP server
 * @param {Object} input - The data to send to n8n workflow
 * @returns {Object} - JSON response from n8n
 */
export async function runN8n(input) {
  try {
    const N8N_WEBHOOK = process.env.N8N_WEBHOOK; // URL of your n8n workflow webhook

    const response = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    const data = await response.json();
    return { type: "response", data };
  } catch (err) {
    return { type: "error", message: err.message };
  }
}
