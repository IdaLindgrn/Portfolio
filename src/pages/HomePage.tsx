import { Contact } from "../components/Contact";
import { AboutText } from "../components/AboutText";
import { Section1 } from "../components/Section1";
import "../scss/homePage.scss";
import "../scss/footer.scss";
import { Section2 } from "../components/Section2";
import { useTranslation } from "react-i18next";
import { Header } from "../components/Header";

export const HomePage = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <Header />
      <main>
        <div id="banner">
          <h1 className="header-title">{t("headers.homeTitle")}</h1>
          <p>{t("headers.homeSubheading")}</p>
        </div>
        <AboutText></AboutText>
        <Section1></Section1>
        <Section2></Section2>
      </main>
      <footer id="footer">
        <Contact></Contact>
      </footer>
    </>
  );
};
