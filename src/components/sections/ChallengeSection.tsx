import { SectionHeading } from "./shared/SectionHeading";
import { DataCardGrid } from "./shared/DataCardGrid";
import { challenges } from "./data";

export function ChallengeSection() {
  return (
    <section className="site-section site-section-alt">
      <div className="site-container">
        <SectionHeading
          eyebrow="The challenge"
          title="Environmental challenges need biological solutions for the real world."
          description="Carbon emissions, wastewater, nutrient loss, and underused biological resources are connected challenges. BluGreen approaches them as interconnected opportunities."
        />
        <DataCardGrid items={challenges} className="site-grid-5" />
      </div>
    </section>
  );
}
