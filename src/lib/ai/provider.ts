import OpenAI from "openai";

import { buildSystemPrompt } from "./prompt";
import { ChatMessage } from "./types";

const apiKey = getEnv("OPENROUTER_API_KEY");

function getEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

const client = new OpenAI({
  apiKey,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function askAI(
  message: string,
  history: ChatMessage[] = [],
  currentPage?: string
): Promise<string> {
  try {
    const systemPrompt = buildSystemPrompt(
      message,
      currentPage
    );
    // Keep only the latest conversation.
    const recentHistory = history.slice(-8);

    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: systemPrompt,
      },

      ...recentHistory.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),

      {
        role: "user",
        content: message,
      },
    ];

    const response = await client.chat.completions.create({
      model: getEnv("OPENROUTER_MODEL"),

      messages,
      temperature: 0.4,
      max_tokens: 120,
    });

    console.log(
      "OpenRouter Response:",
      JSON.stringify(response, null, 2)
    );

    const reply =
      response.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      throw new Error(
        "OpenRouter returned an empty response."
      );
    }

    return reply;
  } catch (error) {
    console.error("========== OPENROUTER ERROR ==========");

    if (error instanceof Error) {
      console.error("Message:", error.message);
      console.error(error.stack);
    } else {
      console.error(error);
    }

    return "Sorry, I couldn't answer that right now.";
  }
}
