import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../images/LOGO.png";
const Navbar = () => {
  return (
    <header className="nav">
      <Link to="/">
        <img src={logo} alt="logo Kasa" className="nav-logo" />
      </Link>
      <div className="nav-links__container">
        <Link className="nav-links__link" to="/">
          Accueil
        </Link>
        <Link className="nav-links__link" to="/about">
          A Propos
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
