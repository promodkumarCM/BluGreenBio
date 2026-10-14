import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { LandingNav } from "./AppLayout";
import { SiteFooter } from "./sections/SiteFooter";
import { useScrollReveal } from "../lib/useScrollReveal";
import type { SitePhoto } from "./sections/photos";

export function SiteLayout({ children }: { children: ReactNode }) {
  useScrollReveal();

  return (
    <div className="landing-page site-page">
      <LandingNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  photo?: SitePhoto;
}

export function PageHero({ eyebrow, title, description, photo }: PageHeroProps) {
  return (
    <section className={`site-page-hero${photo ? " has-photo" : ""}`}>
      <div className="site-container site-page-hero-grid">
        <div className="site-page-hero-copy">
          <nav className="site-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{eyebrow}</span>
          </nav>
          <span className="site-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {photo && (
          <figure className="site-page-hero-photo">
            <img src={photo.src} alt={photo.alt} fetchPriority="high" />
          </figure>
        )}
      </div>
    </section>
  );
}
