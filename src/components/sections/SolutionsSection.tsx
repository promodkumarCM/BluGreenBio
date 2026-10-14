import { SectionHeading } from "./shared/SectionHeading";
import { solutions } from "./data";
import { useState } from "react";

export function SolutionsSection() {
  const [selected, setSelected] = useState(0);
  const solution = solutions[selected];

  return (
    <section className="site-section" id="solutions">
      <div className="site-container">
{/*         <SectionHeading
          eyebrow="Our solutions"
          title="From environmental challenge to biological opportunity."
          description="Environmental challenges rarely exist in isolation. Carbon, water, biological resources and operational data are often interconnected. BluGreen develops integrated biological approaches that bring together microalgal and fungal biotechnology, environmental systems, resource recovery and digital technologies."
        /> */}
        <div className="site-solution-layout">
          <div className="site-tab-list" role="tablist" aria-label="BluGreen solution areas">
            {solutions.map((item, index) => (
              <button
                className={`site-tab${selected === index ? " is-selected" : ""}`}
                key={item.title}
                role="tab"
                aria-selected={selected === index}
                aria-controls="solution-detail"
                id={`solution-tab-${index}`}
                onClick={() => setSelected(index)}
              >
                <span className="site-tab-number">{String(index + 1).padStart(2, "0")}</span>
                <span><strong>{item.title}</strong><small>{item.text}</small></span>
              </button>
            ))}
          </div>
          <div className="site-detail-panel" role="tabpanel" id="solution-detail" aria-labelledby={`solution-tab-${selected}`}>
            <span className="site-tag site-tag-blue">Selected solution</span>
            <h3>{solution.title}</h3>
            <p>{solution.detail}</p>
            <ul className="site-fact-list">{solution.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
