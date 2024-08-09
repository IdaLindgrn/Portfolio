import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import portrait from "../assets/portrait.png";
import { FaPhone } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
// import ScrollDownArrow from "../assets/scroll-down-arrow.png";

export const AboutPage = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <Header />
      <div className="background-container"></div>
      <div className="gallery-wrapper">
        <div className="gallery-container">
          <div className="about-container">
            <h2 className="header-title"></h2>
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
                  <a className="contact-icon" href="tel:0709821050">
                    <FaPhone className="contact-logo phone-icon" />
                  </a>
                  <a href="tel:0709821050" className="info">
                    <p>{t("aboutPage.myNumber")}</p>
                  </a>
                </div>
                <div className="contact-text">
                  <a
                    className="contact-icon"
                    href="mailto:ida-lindgren@hotmail.com"
                  >
                    <GrMail className="contact-logo mail-icon" />
                  </a>
                  <a href="mailto:ida-lindgren@hotmail.com" className="info">
                    <p>{t("aboutPage.myMail")}</p>
                  </a>
                </div>
              </div>
              <div className="about-me-container">
                <p className="about-me-hello">{t("aboutPage.hi")}</p>
                <h2 className="about-me-title">{t("homePage.homeTitle")}</h2>
                <p className="about-me-frontend">
                  {t("aboutPage.a")}{" "}
                  <span className="highlight">
                    {t("homePage.homeSubheading")}
                  </span>{" "}
                  {t("aboutPage.from")}{" "}
                  <span className="highlight">{t("aboutPage.stockholm")}</span>
                </p>
                <p className="about-me-text">
                  {t("aboutPage.frontendDeveloperText")}
                </p>
                <div>
                  <a
                    href="../../CV_2024_ENG.pdf"
                    download="CV_2024_ENG.pdf"
                    className="download-link cv-link"
                  >
                    {t("aboutPage.downloadCV")}
                  </a>
                  <a href="#footer" className="download-link contact-link">
                    {t("header.navContact")}
                  </a>
                </div>
                {/* <img
                  style={{ width: "150px" }}
                  className="scroll-down-arrow"
                  src={ScrollDownArrow}
                  alt="An arrow indicating the user to scroll down."
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-wrapper">
        <div className="gallery-container">
          <div className="gallery-header">
            <h2 className="header-title">{t("aboutPage.getInTouch")}</h2>
            <p className="gallery-subheading">
              {t("aboutPage.getInTouchText")}
            </p>
            <form className="contact-form">
              <div className="contact-name-email">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t("aboutPage.name")}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t("aboutPage.email")}
                    required
                  />
                </div>
              </div>
              <div style={{ marginTop: "-20px" }} className="form-group"></div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={t("aboutPage.subject")}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows={15}
                  placeholder={t("aboutPage.yourMessage")}
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-button">
                {t("aboutPage.sendMessage")}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
