import { Link } from "react-router-dom";
import logo from "../assets/logo/horizontal_logomobile_.svg";

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="BluGreen BioVentures home">
      <img src={logo} width="148" height="60" alt="BluGreen BioVentures" />
    </Link>
  );
}
