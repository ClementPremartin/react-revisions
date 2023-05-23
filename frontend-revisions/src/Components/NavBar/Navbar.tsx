import { NavLink } from "react-router-dom";
import { CONTINENTS, COUNTRIES, COUNTRY } from "../../path";
const Navbar = () => {
  return (
    <div>
      <NavLink to={COUNTRIES}>Countries</NavLink>
      <NavLink to={COUNTRY}>Country</NavLink>
      <NavLink to={CONTINENTS}>Continents</NavLink>
    </div>
  );
};

export default Navbar;

