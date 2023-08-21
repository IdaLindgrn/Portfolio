import { Link } from "react-router-dom";
import "../../scss/navbar.scss";

export const NavLinks = () => {
  return (
    <ul>
      <div id="links">
        <li>
          <Link className="navLink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/gallery">
            Gallery
          </Link>
        </li>
        <div id="contact">
          <li>
            <a id="footerLink" href="#footer">
              Contact
            </a>
          </li>
        </div>
      </div>
    </ul>
  );
};
