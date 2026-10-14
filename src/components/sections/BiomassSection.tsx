import { SectionHeading } from "./shared/SectionHeading";
import { DataCardGrid } from "./shared/DataCardGrid";
import { biomassPanels } from "./data";
import { photos } from "./photos";
import { PhotoBanner } from "./shared/PhotoFeature";

export function BiomassSection() {
  return (
    <section className="site-section site-section-alt" id="biomass">
      <div className="site-container">
        <SectionHeading
          eyebrow="Biomass valorisation & circular bioeconomy"
          title="From biomass to value."
          description="Biomass is not the end of a biological process. It can be the beginning of another value chain."
        />
        <PhotoBanner
          photo={photos.algaeCultureFlasks}
          eyebrow="From culture to value chain"
          caption="Every microalgal culture is a source of biomass for ingredients, pigments, biological inputs, and functional products."
        />
        <DataCardGrid items={biomassPanels} className="site-grid-3" />
      </div>
    </section>
  );
}
