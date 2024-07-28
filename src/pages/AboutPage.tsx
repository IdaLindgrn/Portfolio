import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import portrait from "../assets/portrait.png";
import { FaPhone } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import ScrollDownArrow from "../assets/scroll-down-arrow.png";

export const AboutPage = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <Header />
      <div className="background-container"></div>
      <div className="gallery-wrapper">
        <main className="gallery-container">
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
                  <a className="contact-symbol" href="tel:0709821050">
                    <FaPhone style={{ width: "40px", height: "40px" }} />
                  </a>
                  <a href="tel:0709821050" className="info">
                    070 982 10 50
                  </a>
                </div>
                <div className="contact-text">
                  <a
                    className="contact-symbol"
                    href="mailto:ida-lindgren@hotmail.com"
                  >
                    <GrMail style={{ width: "40px", height: "40px" }} />
                  </a>
                  <a href="mailto:ida-lindgren@hotmail.com" className="info">
                    ida-lindgren@hotmail.com
                  </a>
                </div>
              </div>
              <div className="about-me-container">
                <p className="about-me-hello">Hello, I'm</p>
                <h2 className="about-me-title">{t("headers.homeTitle")}</h2>
                <p className="about-me-frontend">
                  A <span className="highlight">Frontend Developer</span> from{" "}
                  <span className="highlight">Stockholm</span>
                </p>
                <p className="about-me-text">
                  Passionerad frontend-utvecklare med ett brinnande intresse för
                  design och problemlösning. Med en mångsidig kompetens och
                  flera års studier inom olika programmeringsspråk och ramverk,
                  strävar jag efter att skapa användarvänliga och estetiskt
                  tilltalande digitala upplevelser.
                </p>
                <div>
                  <a
                    href="path/to/your/file.pdf"
                    download="filename.pdf"
                    className="download-link cv-link"
                  >
                    Download CV
                  </a>
                  <a
                    href="path/to/your/file.pdf"
                    download="filename.pdf"
                    className="download-link contact-link"
                  >
                    Contact
                  </a>
                </div>
                <img
                  style={{ width: "150px" }}
                  className="scroll-down-arrow"
                  src={ScrollDownArrow}
                  alt="An arrow indicating the user to scroll down."
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="gallery-wrapper">
        <main className="gallery-container">
          <div className="gallery-header">
            <h2 className="header-title">Get in touch</h2>
            <p className="gallery-subheading">
              Wanna get in touch? Ask me anything
            </p>
            <form className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="send-button">
                Send Message
              </button>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
