import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../scss/aboutPage.scss";
import "../scss/section.scss";
import { useTranslation } from "react-i18next";

export const AboutPage = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <Header />
      <main className="about-container">
        <h1 className="header-title">{t("headers.aboutTitle")}</h1>
        <div className="about-me">
          <div className="portrait-container">
            <img className="portrait" src="" alt="hej" />
          </div>
          <div className="about-me-container">
            <h2 className="about-me-title">{t("headers.homeTitle")}</h2>
            <p className="about-me-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              natus quisquam nemo dicta non? Quibusdam nulla et ullam illo at.
              Doloremque beatae optio dignissimos eum quisquam temporibus ipsa
              cumque enim. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Tempora eos delectus unde harum hic.
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
