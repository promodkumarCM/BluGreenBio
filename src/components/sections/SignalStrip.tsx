

import { signals } from "./data";

export function SignalStrip() {
  return (
    <section className="site-signal" aria-label="BluGreen focus areas">
      <div className="site-container site-signal-list">
        {signals.map((item) => <span key={item}><i aria-hidden="true" />{item}</span>)}
      </div>
    </section>
  );
}
