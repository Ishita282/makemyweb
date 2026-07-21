"use client";

import { useState } from "react";

import { SendHorizontal } from "lucide-react";

import { useChat } from "@/src/hooks/useChat";

export default function Chat() {
  const { messages, loading, sendMessage } = useChat();

  const [input, setInput] = useState("");

  async function handleSend() {
    if (!input.trim()) return;

    const message = input;

    setInput("");

    await sendMessage(message);
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] w-[380px] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-2xl">
      {/* Header */}
      <div className="border-b border-white/10 p-4">
        <h3 className="font-semibold text-white">
          🤖 Webby
        </h3>

        <p className="text-sm text-neutral-400">
          AI Assistant
        </p>
      </div>

      {/* Messages */}
      <div className="h-[420px] space-y-3 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                message.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-800 text-white"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-sm text-neutral-400">
            Webby is thinking...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2 border-t border-white/10 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask Webby anything..."
          className="flex-1 rounded-xl bg-neutral-800 px-4 py-3 text-white outline-none"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="rounded-xl bg-blue-600 p-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          <SendHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}
