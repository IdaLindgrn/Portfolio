import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import portrait from "../assets/portrait.png";
import { FaPhone } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

export const AboutPage = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <Header />
      <div className="background-container"></div>
      <div className="gallery-wrapper">
        <main className="gallery-container">
          <div className="about-container">
            <h1 className="header-title"></h1>
            <div className="about-me">
              <div className="portrait-container">
                <div className="img-container">
                  <img
                    className="portrait"
                    src={portrait}
                    alt="A portrait of me"
                  />
                </div>
                <div className="contact-text">
                  <FaPhone />
                  <p>070 982 10 50</p>
                </div>
                <div className="contact-text">
                  <GrMail />
                  <p>ida-lindgren@hotmail.com</p>
                </div>
              </div>
              <div className="about-me-container">
                <h2 className="about-me-title">{t("headers.homeTitle")}</h2>
                <p className="about-me-text">
                  Passionerad frontend-utvecklare med ett brinnande intresse för
                  design och problemlösning. Med en mångsidig kompetens och
                  flera års studier inom olika programmeringsspråk och ramverk,
                  strävar jag efter att skapa användarvänliga och estetiskt
                  tilltalande digitala upplevelser.
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
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
