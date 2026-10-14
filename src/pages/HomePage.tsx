import { SiteLayout } from "../components/SiteLayout";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  LeadershipSection,
  ServicesSection,
  SignalStrip,
} from "../components/sections/SiteSections";

export function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <SignalStrip />
      <AboutSection />
      <ServicesSection />
      {/* <LeadershipSection /> */}
      <ContactSection />
    </SiteLayout>
  );
}
