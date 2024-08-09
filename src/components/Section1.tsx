import { Link } from "react-router-dom";
import dreamyCloudsImage from "../assets/dreamy-clouds.png";
import { useTranslation } from "react-i18next";

export const Section1 = () => {
  const [t] = useTranslation("global");

  return (
    <div className="container">
      <figure className="image-container">
        <img src={dreamyCloudsImage} alt="Dreamy clouds" />
      </figure>
      <section id="section-container1">
        <p className="nav-text">{t("header.navAbout")}</p>
        <h2 className="heading">{t("homePage.aboutMe")}</h2>
        <p id="section-text">{t("homePage.aboutMeText")}</p>
        <Link id="shortcuts" to="/about">
          <div id="shortcutsLink">{t("homePage.buttonText")}</div>
        </Link>
      </section>
    </div>
  );
};
