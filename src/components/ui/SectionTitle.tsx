import Badge from "./Badge";
import Heading from "./Heading";
import Text from "./Text";

interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {badge && <Badge>{badge}</Badge>}

      <Heading
        level={2}
        className="mt-5 text-4xl md:text-5xl"
      >
        {title}
      </Heading>

      {description && (
        <Text className="mt-5 text-lg">
          {description}
        </Text>
      )}
    </div>
  );
}
