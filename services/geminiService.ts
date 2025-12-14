import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateNailArtDesign = async (prompt: string): Promise<string | null> => {
  try {
    // Using gemini-2.5-flash-image (Nano Banana) for image generation
    const model = 'gemini-2.5-flash-image';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          {
            text: `High quality, photorealistic, professional nail art photography. Close up shot of manicured hands. Style: ${prompt}. Clean lighting, magazine editorial style, 4k resolution.`,
          },
        ],
      },
      config: {
        // Image generation specific config if needed, or default
      },
    });

    // Extract image from response
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    
    return null;
  } catch (error) {
    console.error("Error generating nail art:", error);
    throw error;
  }
};