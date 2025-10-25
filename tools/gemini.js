import fetch from "node-fetch";

export async function handlegemini(input) {
  /*
Replace `process.env.GEMINI_TOKEN` with your actual Gemini API key string
Example:
const GEMINI_API_KEY = "AIzaSyC0D-EXAMPLE123";
*/
  const GEMINI_TOKEN = process.env.GEMINI_TOKEN;
  /* Replace:
- `PROJECT_ID` → your Google Cloud project ID  
- `MODEL_ID` → e.g. `gemini-2.0-flash-001`  */

  const url = `https://aiplatform.googleapis.com/v1/projects/PROJECT_ID/locations/global/publishers/google/models/MODEL_ID:generateContent`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json",
              "Authorization": `Bearer ${process.env.GEMINI_API_KEY}` },
    body: JSON.stringify({
      chat_id: input.chat_id,
      text: input.message,
    }),
  });

  const data = await response.json();
  return { type: "response", data };
}
