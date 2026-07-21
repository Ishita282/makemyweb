"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useSpeech() {
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const voicesLoaded = useRef(false);

  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    synthRef.current = window.speechSynthesis;

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();

      if (voices.length > 0) {
        voicesLoaded.current = true;
        console.log(`Loaded ${voices.length} voices`);
      }
    };

    loadVoices();

    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const stop = useCallback(() => {
    const synth = synthRef.current;

    if (!synth) return;

    synth.cancel();
    setSpeaking(false);
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      const synth = synthRef.current;

      if (!synth) return;

      // Stop anything already speaking
      synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      const voices = synth.getVoices();

      const voice =
        voices.find(
          (v) =>
            v.lang.startsWith("en") &&
            v.name.includes("Microsoft")
        ) ||
        voices.find(
          (v) =>
            v.lang.startsWith("en") &&
            v.name.includes("Google")
        ) ||
        voices.find((v) => v.lang.startsWith("en")) ||
        null;

      if (voice) {
        utterance.voice = voice;
      }

      utterance.lang = "en-US";
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => {
        console.log("🔊 Speaking...");
        setSpeaking(true);
      };

      utterance.onend = () => {
        console.log("✅ Finished speaking");
        setSpeaking(false);
      };

      utterance.onerror = (event) => {
        if (event.error !== "interrupted") {
          console.error("Speech error:", event.error);
        }

        setSpeaking(false);
      };

      // Small delay so cancel() completes
      setTimeout(() => {
        synth.speak(utterance);
      }, 150);
    },
    []
  );

  return {
    speaking,
    speak,
    stop,
  };
}
