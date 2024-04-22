import { useTranslation } from "react-i18next";
import { DailyQuotes } from "./DailyQuotes";
import { Navbar } from "./NavBar/Navbar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

export const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header className="home-header">
        <DailyQuotes />
        <Navbar />
        <div className="dropdown">
          <div
            className="dropdown-toggle"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {i18n.language === "en" ? t("header.en") : t("header.sv")}
            {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {showDropdown && (
            <div className="dropdown-menu">
              <select
                name="lang-select"
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
