import { SectionHeading } from "./shared/SectionHeading";
import { DataCardGrid } from "./shared/DataCardGrid";
import { values, divisions } from "./data";
import { photos } from "./photos";
import { PhotoBand } from "./shared/PhotoFeature";

export function AboutSection() {
  return (
    <section className="site-section" id="about">
      <div className="site-container">
        <SectionHeading
          eyebrow="Who we are"
          title="Science-led. Women-led. Built for real world application."
          description="BluGreen Bioventures is a women-owned and women-led biotechnology and climate-tech company based in Kerala, India. We connect biological science with engineering, validation, and commercial application."
        />
        <p className="site-statement">Where biology meets application.</p>
        <PhotoBand
          items={[
            { photo: photos.scientistCultureFlask, caption: "Science-led microalgal research" },
            { photo: photos.benchPhotobioreactor, caption: "Photobioreactor cultivation systems" },
            { photo: photos.spirulinaMicrograph, caption: "Microalgae, up close" },
          ]}
        />
        <DataCardGrid items={values} className="site-grid-3" />
        <div className="site-subheading"><span className="site-eyebrow">Our business</span><h3>Two divisions. One integrated biological platform.</h3></div>
        <DataCardGrid items={divisions} className="site-grid-2" />
      </div>
    </section>
  );
}
