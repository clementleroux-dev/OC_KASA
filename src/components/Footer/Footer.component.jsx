import "./Footer.scss";
import logo from "../../images/LOGO-white.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo Kasa" className="nav-logo" />
      </div>
      <p>&#169; {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
  );
};
export default Footer;
