import { SectionHeading } from "./shared/SectionHeading";
import { industries } from "./data";
import { useState } from "react";

export function IndustriesSection() {
  const [selected, setSelected] = useState(0);
  const industry = industries[selected];

  return (
    <section className="site-section" id="industries">
      <div className="site-container">
        <SectionHeading eyebrow="Industries" title="Biological solutions for diverse operating environments." description="BluGreen develops technologies around the needs and conditions of each application." />
        <div className="site-industry-layout">
          <div className="site-industry-list" role="tablist" aria-label="Industry applications">
            {industries.map((item, index) => (
              <button key={item.title} role="tab" aria-selected={selected === index} onClick={() => setSelected(index)}>
                {item.title}<span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <div className="site-industry-detail" role="tabpanel" aria-label={industry.title}>
            <span className="site-tag">Selected environment</span><h3>{industry.title}</h3>
            <h4>Challenges</h4><ul className="site-fact-list">{industry.challenges.map((item) => <li key={item}>{item}</li>)}</ul>
            <p><strong>Our approach:</strong> {industry.approach}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
