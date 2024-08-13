import { Link } from "react-router-dom";
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
            <div className="navText">{t("header.navHome")}</div>
          </Link>
        </li>
        <li>
          <Link
            className={`navLink ${
              location.pathname === "/about" ? "active" : ""
            }`}
            to="/about"
          >
            <div className="navText">{t("header.navAbout")}</div>
          </Link>
        </li>
        <li>
          <Link
            className={`navLink ${
              location.pathname === "/gallery" ? "active" : ""
            }`}
            to="/gallery"
          >
            <div className="navText">{t("header.navGallery")}</div>
          </Link>
        </li>
        <div
          id="contact"
          className="navLink"
          style={{ marginLeft: "auto", margin: "auto" }}
        >
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
