import { SectionHeading } from "./shared/SectionHeading";
import { environments, architectureLayers } from "./data";
import { useState } from "react";

export function IampSection() {
  const [environmentIndex, setEnvironmentIndex] = useState(0);
  const [layerIndex, setLayerIndex] = useState(0);
  const environment = environments[environmentIndex];
  const layer = architectureLayers[layerIndex];

  return (
    <section className="site-section" id="iamp">
      <div className="site-container">
        <SectionHeading
          eyebrow="Digital algae monitoring · IAMP"
          title="From sensor data to biological intelligence."
          description="The Intelligent Algae Management Platform is being developed to turn biological-system data into information operators can understand and use."
        />
        <div className="site-iamp-panel">
          <div className="site-tabs" role="tablist" aria-label="IAMP biological environments">
            {environments.map((item, index) => (
              <button key={item.title} role="tab" aria-selected={environmentIndex === index} onClick={() => setEnvironmentIndex(index)}>
                {item.title}
              </button>
            ))}
          </div>
          <div className="site-environment" role="tabpanel" aria-label={environment.title}>
            <div>
              <span className="site-tag">Common digital backbone</span>
              <h3>{environment.title}</h3>
              <p>{environment.description}</p>
            </div>
            <div className="site-chip-list">{environment.measures.map((measure) => <span key={measure}>{measure}</span>)}</div>
          </div>
          <div className="site-architecture">
            <div className="site-layer-list" role="tablist" aria-label="IAMP architecture layers">
              {architectureLayers.map((item, index) => (
                <button key={item.title} role="tab" aria-selected={layerIndex === index} onClick={() => setLayerIndex(index)}>
                  <span>{index + 1}</span>{item.title}
                </button>
              ))}
            </div>
            <div className="site-layer-detail" role="tabpanel" aria-label={layer.title}>
              <span className="site-eyebrow">Layer {layerIndex + 1}</span>
              <h3>{layer.title}</h3>
              <p>{layer.text}</p>
              <span className="site-tag site-tag-blue">Outcome · {layer.output}</span>
            </div>
          </div>
          <p className="site-note">Data comes first: advanced predictive capabilities require reliable, representative, and consistently measured historical data.</p>
        </div>
      </div>
    </section>
  );
}
