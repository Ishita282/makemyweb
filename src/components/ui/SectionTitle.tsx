import Badge from "./Badge";
import Heading from "./Heading";
import Text from "./Text";

interface Props {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  badge,
  title,
  description,
  align = "center",
}: Props) {
  return (
    <div
      className={`mb-16 max-w-3xl ${
        align === "center"
          ? "mx-auto text-center"
          : ""
      }`}
    >
      {badge && <Badge>{badge}</Badge>}

      <Heading
        level={2}
        className="mt-5"
      >
        {title}
      </Heading>

      {description && (
        <Text className="mt-5">
          {description}
        </Text>
      )}
    </div>
  );
}
