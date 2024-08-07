import { useTranslation } from "react-i18next";
import { Navbar } from "./NavBar/Navbar";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header id="header">
        <Link to="/" className="logo-link">
          <img
            className="logo"
            src={logo}
            alt={t("logoAlt", "My name as the logo")}
          />
        </Link>
        <Navbar />
        <div className="dropdown">
          <div
            className="dropdown-toggle"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div
              className={`dropdown-container ${showDropdown ? "active" : ""}`}
            >
              <select
                value={i18n.language}
                onChange={(e) => handleChangeLanguage(e.target.value)}
                className="dropdown-text"
              >
                <option value="en">{t("language.english", "ENG")}</option>
                <option value="sv">{t("language.swedish", "SV")}</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
