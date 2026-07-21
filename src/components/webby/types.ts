export type WebbyState =
  | "idle"
  | "greeting"
  | "listening"
  | "thinking"
  | "speaking";


export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
