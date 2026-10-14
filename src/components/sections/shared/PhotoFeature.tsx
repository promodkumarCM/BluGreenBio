import type { SitePhoto } from "../photos";

/** Wide photo with a caption overlaid on a soft gradient. */
export function PhotoBanner({ photo, eyebrow, caption }: { photo: SitePhoto; eyebrow: string; caption: string }) {
  return (
    <figure className="site-photo-banner">
      <img src={photo.src} alt={photo.alt} loading="lazy" />
      <figcaption>
        <span className="site-eyebrow">{eyebrow}</span>
        <p>{caption}</p>
      </figcaption>
    </figure>
  );
}

/** A row of captioned photos (stacks on mobile). */
export function PhotoBand({ items }: { items: { photo: SitePhoto; caption: string }[] }) {
  return (
    <div className="site-photo-band">
      {items.map(({ photo, caption }) => (
        <figure key={photo.src}>
          <img src={photo.src} alt={photo.alt} loading="lazy" />
          <figcaption>{caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
