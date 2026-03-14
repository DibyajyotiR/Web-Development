import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-2.0-flash";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY



async function runChat(prompt) {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const chat = model.startChat({
      generationConfig: {
        temperature: 0.75,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
      history: [],
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response;

    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return error.message;
  }
}

export default runChat;