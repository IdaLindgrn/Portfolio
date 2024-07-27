import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import portrait from "../assets/portrait.png";

export const AboutPage = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <Header />
      <main className="about-container">
        <h1 className="header-title">{t("headers.aboutTitle")}</h1>
        <div className="about-me">
          <div className="portrait-container">
            <img className="portrait" src={portrait} alt="A portrait of me" />
          </div>
          <div className="about-me-container">
            <h2 className="about-me-title">{t("headers.homeTitle")}</h2>
            <p className="about-me-text">
              Passionerad frontend-utvecklare med ett brinnande intresse för
              design och problemlösning. Med en mångsidig kompetens och flera
              års studier inom olika programmeringsspråk och ramverk, strävar
              jag efter att skapa användarvänliga och estetiskt tilltalande
              digitala upplevelser.
            </p>
            <a
              href="path/to/your/file.pdf"
              download="filename.pdf"
              className="download-link"
            >
              Download CV
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
