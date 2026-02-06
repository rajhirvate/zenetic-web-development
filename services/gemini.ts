
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Zenetic AI, the virtual consultant for Zenetic Web Development.
Zenetic is a premium web development agency based in Pune, India.
We specialize in:
1. Full-Stack Web Development (Next.js, WordPress, PHP, HTML/CSS)
2. Performance Marketing (ROI-focused growth)
3. Local SEO (specializing in Pune's local search dominance)

Your goal is to provide concise, professional, and inspiring consultations.
Zenetic's motto is: "We build websites that grow your business."
Always highlight that we are based in Pune and work with global standards.
Keep responses under 100 words. Use a sophisticated yet friendly tone.
Contact Raj Hirvate at +91 91670 41276 or rajhirvate@gmail.com if clients need a direct line.
`;

export async function getConsultationResponse(prompt: string) {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return "Zenetic AI is currently offline. Please use our contact form or call us at +91 91670 41276.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.95,
        maxOutputTokens: 250,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Would you like to schedule a call with our Pune team?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble thinking right now. Please reach out to Raj at rajhirvate@gmail.com directly.";
  }
}
