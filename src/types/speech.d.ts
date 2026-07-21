export {};

declare global {
  interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
  }

  interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    [index: number]: SpeechRecognitionAlternative;
  }

  interface SpeechRecognitionResultList {
    readonly length: number;
    [index: number]: SpeechRecognitionResult;
  }

  interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number;
    readonly results: SpeechRecognitionResultList;
  }

  interface SpeechRecognitionErrorEvent extends Event {
    readonly error: string;
    readonly message: string;
  }


  interface SpeechRecognition extends EventTarget {
    lang: string;
    continuous: boolean;
    interimResults: boolean;
    maxAlternatives: number;


    onstart: (() => void) | null;
    onend: (() => void) | null;

    onresult:
      ((event: SpeechRecognitionEvent) => void) | null;


    onerror:
      ((event: SpeechRecognitionErrorEvent) => void) | null;


    onaudiostart: (() => void) | null;
    onaudioend: (() => void) | null;

    onsoundstart: (() => void) | null;
    onsoundend: (() => void) | null;

    onspeechstart: (() => void) | null;
    onspeechend: (() => void) | null;

    onnomatch: (() => void) | null;


    start(): void;
    stop(): void;
    abort(): void;
  }



  interface SpeechRecognitionConstructor {
    new (): SpeechRecognition;
  }



  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;

    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}
