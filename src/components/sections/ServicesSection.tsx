import { SectionHeading } from "./shared/SectionHeading";
import { ServiceIcon } from "./shared/ServiceIcon";
import { services } from "./data";

export function ServicesSection() {
  return (
    <section className="site-section site-section-alt" id="services">
      <div className="site-container">
        <SectionHeading
          eyebrow="Services"
          title="From feasibility to deployment."
          description=""
        />
        <div className="site-service-grid">
          {services.map((service) => (
            <article className="site-service-card" key={service.title}>
              <span className="site-service-icon">
                <ServiceIcon name={service.icon} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
