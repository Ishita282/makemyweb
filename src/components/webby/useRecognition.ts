"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useRecognition() {
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("Speech Recognition is not supported.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      console.log("🎤 Listening...");
      setListening(true);
    };

    recognition.onend = () => {
      console.log("🛑 Recognition ended");
      setListening(false);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const result = event.results[event.resultIndex];

      if (!result.isFinal) return;

      const text = result[0].transcript.trim();

      console.log("✅ User:", text);

      setTranscript(text);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.warn("Speech Error:", event.error);

      switch (event.error) {
        case "aborted":
          break;

        case "no-speech":
          console.log("No speech detected.");
          break;

        case "audio-capture":
          console.error("No microphone found.");
          break;

        case "not-allowed":
          console.error("Microphone permission denied.");
          break;

        default:
          console.error(event.error);
      }

      setListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.abort();
      recognitionRef.current = null;
    };
  }, []);

  const start = useCallback(() => {
    const recognition = recognitionRef.current;

    if (!recognition) return;

    if (listening) return;

    setTranscript("");

    try {
      recognition.abort();

      setTimeout(() => {
        try {
          recognition.start();
        } catch (error) {
          console.log("Recognition start ignored:", error);
        }
      }, 200);
    } catch (error) {
      console.log(error);
    }
  }, [listening]);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
  }, []);

  const abort = useCallback(() => {
    recognitionRef.current?.abort();
  }, []);

  const clearTranscript = useCallback(() => {
    setTranscript("");
  }, []);

  return {
    listening,
    transcript,
    start,
    stop,
    abort,
    clearTranscript,
  };
}
