const { GoogleGenerativeAI } =require("@google/generative-ai")

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

// Recommended model
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const result = await model.generateContent("Explain AI in simple words");
// console.log(result.response.text());

async function generateContent(prompt) {
    const result = await model.generateContent(prompt)
    return result.response.text()
}
module.exports=generateContent