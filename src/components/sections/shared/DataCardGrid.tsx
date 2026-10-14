import type { ContentCardProps } from "./types";
import { ContentCard } from "./ContentCard";

export function DataCardGrid({
  items,
  className = "",
}: {
  items: ContentCardProps[];
  className?: string;
}) {
  return (
    <div className={`site-card-grid ${className}`.trim()}>
      {items.map((item, index) => (
        <ContentCard key={`${item.title}-${index}`} {...item} />
      ))}
    </div>
  );
}
