import { SectionHeading } from "./shared/SectionHeading";
import { DataCardGrid } from "./shared/DataCardGrid";
import { products } from "./data";

export function ProductsSection() {
  return (
    <section className="site-section" id="products">
      <div className="site-container">
        {/* <SectionHeading
          eyebrow="Products"
          title="Products built from biological potential."
          description="A developing portfolio across environmental systems, biological inputs, functional products, and resource-derived ingredients."
        /> */}
        <DataCardGrid items={products} className="site-grid-4" />
        <div className="site-note"><strong>From biology to product:</strong> biological resource → ingredient evaluation → formulation → product development → validation → commercialisation.</div>
      </div>
    </section>
  );
}
