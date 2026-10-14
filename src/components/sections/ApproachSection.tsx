import { SectionHeading } from "./shared/SectionHeading";
import { DataCardGrid } from "./shared/DataCardGrid";
import { approachSteps } from "./data";

export function ApproachSection() {
  return (
    <section className="site-section site-section-alt" id="approach">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our approach"
          title="From science to deployment."
          description="Biotechnology becomes useful when biological potential is developed and validated for practical application."
        />
        <DataCardGrid items={approachSteps} className="site-grid-3" />
      </div>
    </section>
  );
}
