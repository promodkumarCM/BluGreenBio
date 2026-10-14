import { Link } from "react-router-dom";
import { heroPillars } from "./data";
import { photos } from "./photos";
import { PillarIcon } from "./shared/PillarIcon";

export function HeroSection() {
  return (
    <section className="lab-hero" id="home">
      <div className="site-container lab-hero-grid">
        <div className="lab-hero-copy">
          <span className="lab-hero-label">// microalgal &amp; fungal biotechnology</span>
          <h1>
            Biology for a <span>Brighter Tomorrow</span>
          </h1>
          <p>
            Microalgal and fungal biotechnology for cleaner air, healthier water, valuable biomass,
            and scalable bio-based solutions.
          </p>
          <div className="lab-hero-actions">
            <Link className="lab-button lab-button-primary" to="/solutions">Explore our solutions <span aria-hidden="true">→</span></Link>
            <Link className="lab-button lab-button-ghost" to="/about">Discover BluGreen</Link>
          </div>
        </div>

        <figure className="lab-scope">
          <span className="lab-scope-ring" aria-hidden="true" />
          <img className="lab-scope-lens" src={photos.microalgaeCells.src} alt={photos.microalgaeCells.alt} width="960" height="630" fetchPriority="high" />
          <figcaption>
            <span className="lab-scope-tag lab-scope-tag-1">CO₂ → biomass</span>
            <span className="lab-scope-tag lab-scope-tag-2">Microalgae · live culture</span>
            <span className="lab-scope-tag lab-scope-tag-3">Phycoremediation</span>
          </figcaption>
        </figure>
      </div>

      <div className="site-container lab-pillars">
        {heroPillars.map((pillar) => (
          <article key={pillar.title}>
            <PillarIcon name={pillar.icon} />
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
