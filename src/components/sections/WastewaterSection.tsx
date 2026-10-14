import { SectionHeading } from "./shared/SectionHeading";
import { DataCardGrid } from "./shared/DataCardGrid";
import { wastewaterFlow, wastewaterSteps } from "./data";
import { photos } from "./photos";
import { PhotoBanner } from "./shared/PhotoFeature";

export function WastewaterSection() {
  return (
    <section className="site-section" id="wastewater">
      <div className="site-container">
        <SectionHeading
          eyebrow="Wastewater bioremediation & nutrient recovery"
          title="Wastewater → biomass → resources."
          description="Phycoremediation combines microalgae and beneficial bacteria to support biological treatment, nutrient uptake, and resource recovery."
        />
        <PhotoBanner
          photo={photos.algaeLagoons}
          eyebrow="Phycoremediation in practice"
          caption="Microalgae take up nutrients from water and turn them into biomass that can be recovered and reused."
        />
        <div className="site-process-flow">
          {wastewaterFlow.map((step, index) => (
            <div className="site-process-node" key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>
          ))}
        </div>
        <DataCardGrid items={wastewaterSteps} className="site-grid-5" />
      </div>
    </section>
  );
}
