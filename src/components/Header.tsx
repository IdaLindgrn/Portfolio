import { useTranslation } from "react-i18next";
import { Navbar } from "./NavBar/Navbar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
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
        <img src={logo} alt="My name as the logo" />
        <Navbar />
        <div className="dropdown">
          <div
            className="dropdown-toggle"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div
              className={`dropdown-container ${showDropdown ? "active" : ""}`}
            >
              <p className="dropdown-text">
                {i18n.language === "en" ? t("header.en") : t("header.sv")}
              </p>
              {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          {showDropdown && (
            <div className="dropdown-menu">
              <select
                value={i18n.language}
                onChange={(e) => handleChangeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="sv">Svenska</option>
              </select>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
