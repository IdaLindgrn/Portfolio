import { useTranslation } from "react-i18next";
import { Navbar } from "./NavBar/Navbar";
import { useState } from "react";
import "../scss/selectLanguage.scss";
import logo from "../assets/logo.png";

export const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header className="home-header">
        <img src={logo} alt={t("logoAlt", "My name as the logo")} />
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
