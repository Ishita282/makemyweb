"use client";

import { useEffect } from "react";

import Mascot from "../mascot/Mascot";
import SpeechBubble from "./SpeechBubble";
import { useWebby } from "./useWebby";

export default function Webby() {
  const {
    state,
    listening,
    thinking,
    speaking,
    lastReply,
    startListening,
  } = useWebby();

  useEffect(() => {
    console.log("Webby State:", state);
  }, [state]);

  return (
    <>
      <Mascot />

      <SpeechBubble
        visible={speaking || thinking}
        message={
          thinking
            ? "Thinking..."
            : lastReply
        }
      />

      <button
        onClick={startListening}
        disabled={thinking}
        className="
fixed
bottom-8
right-8
z-[9999]
h-16
w-16
rounded-full
bg-blue-600
text-white
shadow-xl
transition
hover:scale-105
disabled:opacity-50
disabled:cursor-not-allowed
"
      >
        {listening
          ? "🎙️"
          : speaking
          ? "🔊"
          : thinking
          ? "⏳"
          : "🎤"}
      </button>

      {listening && (
        <div
          className="
fixed
bottom-28
right-8
text-blue-600
font-medium
"
        >
          Listening...
        </div>
      )}
    </>
  );
}
