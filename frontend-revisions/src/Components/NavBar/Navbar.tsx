import { NavLink } from "react-router-dom";
import { CONTINENTS, COUNTRIES, COUNTRY } from "../../path";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navMenu">
      <NavLink className="link" to={COUNTRIES}>
        Countries
      </NavLink>
      <NavLink className="link" to={COUNTRY}>
        Country
      </NavLink>
      <NavLink className="link" to={CONTINENTS}>
        Continents
      </NavLink>
      <div className="dot"></div>
    </div>
  );
};

export default Navbar;

