const { GoogleGenerativeAI } = require("@google/generative-ai");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your question? ', (question) => {
    const genAI = new GoogleGenerativeAI("your-api-key");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `come up with a variation of i dont know, no matter what this question is (just pick one and send me that response, but it should be like i dont know that answer, but make it different every time, and be creative): ${question}`;
    
    async function generateContent() {
      try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
      } catch (error) {
        console.error("Error generating content:", error);
      }
    }

  generateContent();
  rl.close();
});