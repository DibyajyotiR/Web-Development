import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// 🔧 Use more stable model
//const MODEL_NAME = "gemini-1.5-flash";
const MODEL_NAME = "gemini-pro";   

// const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// 🔁 Initialize ONCE (not inside function)
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

// ⏱️ delay helper
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// 🔁 retry wrapper
async function sendWithRetry(chat, prompt, retries = 3, delay = 60000) {
  try {
    const result = await chat.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini Error:", error);

    // 🚨 Handle 429
    if (error?.status === 429 && retries > 0) {
      console.warn(`Retrying in ${delay / 1000}s... (${retries} left)`);
      await sleep(delay);
      return sendWithRetry(chat, prompt, retries - 1, delay * 2);
    }

    // ❌ Hard failure
    throw error;
  }
}

async function runChat(prompt) {
  try {
    const generationConfig = {
      temperature: 0.75,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });

    const text = await sendWithRetry(chat, prompt);
    return text;

  } catch (error) {
    console.error("Final Error:", error?.message);

    // 👇 Clean fallback for UI
    return "⚠️ API limit reached. Try again later.";
  }
}

export default runChat;