import { PageHero, SiteLayout } from "../components/SiteLayout";
import { photos } from "../components/sections/photos";
import {
  AboutSection,
  ApproachSection,
  BiomassSection,
  ChallengeSection,
  ContactCallout,
  IampSection,
  ImpactSection,
  IndustriesSection,
  LiquidTreeSection,
  ProductsSection,
  ResearchSection,
  SolutionsSection,
  TechnologySection,
  WastewaterSection,
} from "../components/sections/SiteSections";

export function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        photo={photos.scientistCultureFlask}
        title="The people and principles behind BluGreen."
        description="Who we are, the environmental challenges we focus on, and how we take biological science from the lab to deployment."
      />
      <AboutSection />
      <ChallengeSection />
      <ApproachSection />
      <ContactCallout />
    </SiteLayout>
  );
}

export function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Solutions"
        photo={photos.outdoorPhotobioreactor}
        title="Biological solutions for real world environmental challenges."
        description="Integrated microalgal and fungal biotechnology solutions, designed around the industries and operating environments we serve."
      />
      <SolutionsSection />
      <IndustriesSection />
      <ContactCallout />
    </SiteLayout>
  );
}

export function TechnologyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Technology"
        photo={photos.benchPhotobioreactor}
        title="The science and systems behind our work."
        description="Our technology platform spans cultivation, photobioreactors, the Liquid Tree, phycoremediation, biomass valorisation, and digital algae monitoring."
      />
      <TechnologySection />
      <IampSection />
      <LiquidTreeSection />
      <WastewaterSection />
      <BiomassSection />
      <ContactCallout />
    </SiteLayout>
  );
}

export function ProductsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Products"
        photo={photos.algaeCultureFlasks}
        title="Our growing portfolio of bio-based products."
        description="A developing portfolio across environmental systems, biological inputs, functional products, and resource-derived ingredients."
      />
      <ProductsSection />
      <ContactCallout />
    </SiteLayout>
  );
}

export function ResearchPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Research & impact"
        photo={photos.algaeLabFlask}
        title="Research, impact, and the road ahead."
        description="Our research directions, and how our work contributes to a cleaner planet, healthier water, and the global sustainability goals."
      />
      <ResearchSection />
      <ImpactSection />
      <ContactCallout />
    </SiteLayout>
  );
}

export function CreditsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Photo credits"
        title="Image credits and licences."
        description="Some photographs on this site are from Wikimedia Commons and are used under the Creative Commons licences listed below."
      />
      <section className="site-section">
        <div className="site-container">
          <ul className="site-credits-list">
            {Object.values(photos).map((photo) => (
              <li key={photo.src}>
                <img src={photo.src} alt="" loading="lazy" />
                <div>
                  <strong>{photo.alt}</strong>
                  <span>
                    Photo by {photo.credit.author} ·{" "}
                    <a href={photo.credit.licenseUrl} target="_blank" rel="noreferrer">{photo.credit.license}</a> ·{" "}
                    <a href={photo.credit.source} target="_blank" rel="noreferrer">Source</a>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
