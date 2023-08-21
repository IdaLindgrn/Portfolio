import { Link } from "react-router-dom";
import "../scss/newnavbar.scss";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export const NewNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobilwMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <nav>
      <div id="mobile-icon" onClick={toggleMobilwMenu}>
        <FaBars></FaBars>
      </div>
      <ul className={showMobileMenu ? "mobile-menu" : "desktop-menu"}>
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
              <a id="hej" href="#footer">
                Contact
              </a>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
};
