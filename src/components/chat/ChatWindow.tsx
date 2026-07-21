import type { Message } from "./types";
import ChatMessage from "./ChatMessage";

interface Props {
  messages: Message[];
}

export default function ChatWindow({ messages }: Props) {
  return (
    <div>
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          role={message.role}
          content={message.content}
        />
      ))}
    </div>
  );
}
