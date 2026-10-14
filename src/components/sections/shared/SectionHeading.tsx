import type { SectionHeadingProps } from "./types";

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="site-section-heading">
      <div>
        <span className="site-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </header>
  );
}
