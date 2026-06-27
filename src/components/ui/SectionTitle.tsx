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
      {badge && (
        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {badge}
        </span>
      )}

      <Heading className="mt-5 text-4xl md:text-5xl">
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
