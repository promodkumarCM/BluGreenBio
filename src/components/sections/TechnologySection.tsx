import { SectionHeading } from "./shared/SectionHeading";
import { DataCardGrid } from "./shared/DataCardGrid";
import { technologyItems } from "./data";

export function TechnologySection() {
  return (
    <section className="site-section site-section-alt" id="technology">
      <div className="site-container">
        {/* <SectionHeading
          eyebrow="Our technology"
          title="Biology, engineering, and data — working together."
          description="Our technology development spans cultivation, photobioreactors, phycoremediation, sensors, biomass utilisation, and digital platforms."
        /> */}
        <DataCardGrid items={technologyItems} className="site-grid-3" />
      </div>
    </section>
  );
}
