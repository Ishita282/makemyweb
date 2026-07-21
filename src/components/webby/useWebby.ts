"use client";

import { useEffect, useRef, useState } from "react";

import { useConversation } from "./useConversation";
import { useRecognition } from "./useRecognition";
import { useSpeech } from "./useSpeech";

type WebbyState =
  | "idle"
  | "listening"
  | "thinking"
  | "speaking";

export function useWebby() {
  const greeted = useRef(false);

  const [lastReply, setLastReply] = useState("");

  const {
    ask,
    thinking,
  } = useConversation();

  const {
    listening,
    transcript,
    start,
    clearTranscript,
  } = useRecognition();

  const {
    speak,
    speaking,
    stop,
  } = useSpeech();

  // Greet once
  useEffect(() => {
    if (greeted.current) return;

    greeted.current = true;

    speak("Hi! I'm Webby. How can I help you today?");
  }, [speak]);

  // User speaks -> AI replies -> Speak reply
  useEffect(() => {
    if (!transcript) return;

    let cancelled = false;

    async function handleConversation() {
      const reply = await ask(transcript);

      if (cancelled) return;

      setLastReply(reply);

      clearTranscript();

      speak(reply);
    }

    handleConversation();

    return () => {
      cancelled = true;
    };
  }, [
    transcript,
    ask,
    speak,
    clearTranscript,
  ]);

  // Stop speech when component unmounts
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  function startListening() {
    if (thinking) return;

    if (speaking) {
      stop();
    }

    clearTranscript();

    start();
  }

  // Derived state (React 19 recommended)
  const state: WebbyState =
    speaking
      ? "speaking"
      : thinking
        ? "thinking"
        : listening
          ? "listening"
          : "idle";

  return {
    state,

    listening,

    thinking,

    speaking,

    lastReply,

    startListening,
  };
}
