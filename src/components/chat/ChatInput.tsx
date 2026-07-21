interface Props {
  value: string;
  onChange(value: string): void;
  onSend(): void;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
}: Props) {
  return (
    <div>
      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />

      <button onClick={onSend}>
        Send
      </button>
    </div>
  );
}
