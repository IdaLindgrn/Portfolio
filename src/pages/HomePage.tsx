import { MyExpertise } from "../components/MyExpertise";
import { Section1 } from "../components/Section1";
import { Section2 } from "../components/Section2";
import { useTranslation } from "react-i18next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  const [t] = useTranslation("global");
  return (
    <>
      <Header />
      <main>
        <div id="banner">
          <h1 className="header-title">{t("homePage.homeTitle")}</h1>
          <h3 className="header-subtitle">{t("homePage.homeSubheading")}</h3>
        </div>
        <MyExpertise />
        <Section1 />
        <Section2 />
      </main>
      <Footer />
    </>
  );
};
