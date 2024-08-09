import { Link } from "react-router-dom";
import cats from "../assets/cats.png";
import { useTranslation } from "react-i18next";

export const Section2 = () => {
  const [t] = useTranslation("global");

  return (
    <div className="container" id="container2">
      <section id="section-container2">
        <p className="nav-text">{t("header.navGallery")}</p>
        <h2 className="heading">{t("homePage.myProjects")}</h2>
        <p id="section-text">{t("homePage.myProjectsText")}</p>
        <Link id="shortcuts" to="/gallery">
          <div id="shortcutsLink">{t("homePage.buttonText")}</div>
        </Link>
      </section>
      <figure className="image-container">
        <img src={cats} alt="Cats sitting on a hill looking over the horizon" />
      </figure>
    </div>
  );
};
