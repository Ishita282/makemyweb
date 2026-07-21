interface Props {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({
  role,
  content,
}: Props) {
  return (
    <div
      className={
        role === "user"
          ? "text-right"
          : "text-left"
      }
    >
      <div>{content}</div>
    </div>
  );
}
