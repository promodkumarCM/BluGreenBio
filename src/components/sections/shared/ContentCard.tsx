import type { ContentCardProps } from "./types";

export function ContentCard({ title, text, label, index }: ContentCardProps) {
  return (
    <article className="site-card">
      {index && <span className="site-card-index">{index}</span>}
      {label && <span className="site-tag">{label}</span>}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
