import { SectionHeading } from "./shared/SectionHeading";
import { DataCardGrid } from "./shared/DataCardGrid";
import { futureWork, researchAreas } from "./data";

export function ResearchSection() {
  return (
    <section className="site-section site-section-alt" id="research">
      <div className="site-container">
        {/* <SectionHeading
          eyebrow="Research & innovation"
          title="Research that moves toward application."
          description="We connect biological discovery with practical use. Each technology progresses through concept, development, validation, pilot, application, and scale."
        /> */}
        <DataCardGrid items={researchAreas} className="site-grid-3" />
        <div className="site-subheading"><span className="site-eyebrow">Future directions</span><h3>Evidence should guide how technology is positioned.</h3></div>
        <DataCardGrid items={futureWork} className="site-grid-3" />
      </div>
    </section>
  );
}
