import { Link } from "react-router-dom";

export function ContactCallout() {
  return (
    <section className="site-cta-band">
      <div className="site-container site-cta-content">
        <div><span className="site-eyebrow">Let's build the right biological solution</span><h2>Move from biological potential to practical development.</h2><p>Explore a climate technology, wastewater application, biomass opportunity, product concept, or digital monitoring requirement with BluGreen.</p></div>
        <Link className="site-button site-button-light" to="/#contact">Talk to our team <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
