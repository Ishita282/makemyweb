"use client";

import { useCallback, useRef, useState } from "react";

import { ChatMessage } from "./types";

export function useConversation() {
  const historyRef = useRef<ChatMessage[]>([]);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [thinking, setThinking] = useState(false);

  const ask = useCallback(async (message: string): Promise<string> => {
    const text = message.trim();

    if (!text) return "";

    const userMessage: ChatMessage = {
      role: "user",
      content: text,
    };

    const updatedHistory = [
      ...historyRef.current,
      userMessage,
    ];

    historyRef.current = updatedHistory;

    setMessages(updatedHistory);
    setThinking(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history: updatedHistory,
          currentPage:
            typeof window !== "undefined"
              ? window.location.pathname
              : "/",
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed (${response.status})`);
      }

      const data: { reply?: string } =
        await response.json();

      const reply =
        data.reply ??
        "Sorry, I couldn't answer that.";

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: reply,
      };

      const finalHistory = [
        ...updatedHistory,
        assistantMessage,
      ];

      historyRef.current = finalHistory;

      setMessages(finalHistory);

      return reply;
    } catch (error) {
      console.error("Conversation Error:", error);

      const reply =
        "Sorry, I couldn't answer right now.";

      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: reply,
      };

      const finalHistory = [
        ...updatedHistory,
        assistantMessage,
      ];

      historyRef.current = finalHistory;

      setMessages(finalHistory);

      return reply;
    } finally {
      setThinking(false);
    }
  }, []);

  const clearConversation = useCallback(() => {
    historyRef.current = [];
    setMessages([]);
  }, []);

  return {
    messages,
    thinking,
    ask,
    clearConversation,
  };
}
