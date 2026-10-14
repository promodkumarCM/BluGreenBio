

import { Link } from "react-router-dom";
import { footerGroups } from "./data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer-grid">
          <div><h2>BluGreen Bioventures</h2><p>Women-owned and women-led biotechnology and climate-tech company developing biological solutions across carbon, water, biomass, products, and digital intelligence.</p></div>
          {footerGroups.map((group) => (
            <div className="site-footer-column" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) =>
                link.href.startsWith("mailto:")
                  ? <a href={link.href} key={link.label}>{link.label}</a>
                  : <Link to={link.href} key={link.label}>{link.label}</Link>,
              )}
            </div>
          ))}
        </div>
        <div className="site-footer-bottom"><span>© {new Date().getFullYear()} BluGreen Bioventures Private Limited. All rights reserved.</span><span>Ernakulam, Kerala, India · <Link to="/credits">Photo credits</Link></span></div>
      </div>
    </footer>
  );
}
