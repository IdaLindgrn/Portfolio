import { Link } from "react-router-dom";
import "../../scss/navbar.scss";
import { useTranslation } from "react-i18next";

export const NavLinks = () => {
  const [t] = useTranslation("global");

  return (
    <ul>
      <div id="links">
        <li>
          <Link
            className={`navLink ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            {t("header.navHome")}
          </Link>
        </li>
        <li>
          <Link
            className={`navLink ${
              location.pathname === "/about" ? "active" : ""
            }`}
            to="/about"
          >
            {t("header.navAbout")}
          </Link>
        </li>
        <li>
          <Link
            className={`navLink ${
              location.pathname === "/gallery" ? "active" : ""
            }`}
            to="/gallery"
          >
            {t("header.navGallery")}
          </Link>
        </li>
        <div id="contact" style={{ marginLeft: "auto", margin: "auto" }}>
          <li>
            <a id="footerLink" href="#footer">
              {t("header.navContact")}
            </a>
          </li>
        </div>
      </div>
    </ul>
  );
};
