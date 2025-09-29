
import { GoogleGenAI } from "@google/genai";
import { GEMINI_CONTEXT } from '../constants';

let ai: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
    if (!ai) {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY environment variable not set");
        }
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
};

export async function getAIResponse(prompt: string): Promise<string> {
    try {
        const client = getAIClient();
        
        const response = await client.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: GEMINI_CONTEXT,
                temperature: 0.5,
                topK: 40,
                topP: 0.95,
            }
        });

        const text = response.text;
        if (!text) {
             return "I'm sorry, I couldn't generate a response. Please try asking in a different way.";
        }
        return text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        // This could be a user-facing error message or a specific fallback.
        return "An error occurred while communicating with the AI. Please ensure your API key is configured correctly.";
    }
}
