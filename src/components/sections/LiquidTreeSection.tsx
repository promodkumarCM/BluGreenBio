import { SectionHeading } from "./shared/SectionHeading";
import { developmentPath } from "./data";
import { photos } from "./photos";

export function LiquidTreeSection() {
  return (
    <section className="site-section site-section-alt" id="liquid-tree">
      <div className="site-container">
        <SectionHeading
          eyebrow="Carbon capture & utilisation"
          title="Biological carbon capture, designed for application."
          description="The Liquid Tree is a microalgae-based CCU concept combining biological carbon utilisation with engineered infrastructure, cultivation, monitoring, and biomass pathways."
        />
        <div className="site-highlight-panel">
          <div>
            <figure className="site-highlight-photo">
              <img src={photos.outdoorPhotobioreactor.src} alt={photos.outdoorPhotobioreactor.alt} loading="lazy" />
            </figure>
            <span className="site-tag">Visible · Modular · Measurable</span><h3>Liquid Tree</h3><p>Microalgae, photobioreactor systems, sensors, and biomass utilisation can come together in an application-specific biological system.</p></div>
          <div className="site-pathway">
            {developmentPath.map((step) => <div className="site-path-step" key={step.index}><span>{step.index}</span><strong>{step.title}</strong><p>{step.text}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
