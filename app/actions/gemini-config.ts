'use server';
import { SYSTEM_INSTRUCTION } from "@/components/constants";

export async function getGeminiConfig() {
  return {
    systemInstruction: {
      parts: [{
        text: SYSTEM_INSTRUCTION
      }]
    },
    model: 'models/gemini-3.1-flash-live-preview',
    // Config matches GoogleGenAI.LiveConfig
    config: {
      responseModalities: ["AUDIO"],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: {
            voiceName: 'Aoede',
          }
        }
      },
      // Hardcoded for now as server doesn't import from web SDK
      mediaResolution: "MEDIA_RESOLUTION_MEDIUM",
      activity_handling: {
          mode: "START_OF_ACTIVITY_INTERRUPTS" 
      },
      contextWindowCompression: {
          triggerTokens: '25600',
          slidingWindow: { targetTokens: '12800' },
      },
      outputTranscription: { model: "gemini-3.1-flash-lite-preview" }, 
    }
  };
}
