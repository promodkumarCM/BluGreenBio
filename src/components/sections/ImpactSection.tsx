import { SectionHeading } from "./shared/SectionHeading";
import { DataCardGrid } from "./shared/DataCardGrid";
import { impactAreas, sdgs } from "./data";

export function ImpactSection() {
  return (
    <section className="site-section" id="impact">
      <div className="site-container">
        <SectionHeading
          eyebrow="Sustainability & impact"
          title="Cleaner planet. Healthier water. Valuable biomass."
          description="Our sustainability philosophy is rooted in biological systems that recover value and connect resources, biology, products, and circularity."
        />
        <DataCardGrid items={impactAreas} className="site-grid-3" />
        <div className="site-subheading"><span className="site-eyebrow">Sustainability alignment</span><h3>Our work connects to global goals.</h3></div>
        <DataCardGrid items={sdgs} className="site-grid-3" />
      </div>
    </section>
  );
}
