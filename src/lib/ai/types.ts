export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  message: string;
  history?: ChatMessage[];
  currentPage?: string;
}

export interface ChatResponse {
  reply: string;
}
