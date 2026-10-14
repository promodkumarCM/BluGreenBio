import { SectionHeading } from "./shared/SectionHeading";
import { TeamCard } from "./shared/TeamCard";
import { leadership } from "./data";

export function LeadershipSection() {
  return (
    <section className="site-section" id="leadership">
      <div className="site-container">
        <SectionHeading
          eyebrow="Leadership"
          title="Science-led. Women-led. Entrepreneurial."
          description="The founding team brings together expertise across microalgal and fungal biotechnology, wastewater remediation, carbon capture, photobioreactors, and circular bioeconomy development."
        />
        <div className="site-card-grid site-grid-3">
          {leadership.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
