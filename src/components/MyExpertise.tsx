import Software from "../assets/expertise/software-dev.png";
import Frontend from "../assets/expertise/frontend-dev.png";
import Native from "../assets/expertise/native-dev.png";
import { useTranslation } from "react-i18next";

export const MyExpertise = () => {
  const [t] = useTranslation("global");

  return (
    <article>
      <h2 className="heading">{t("homePage.subtitle")}</h2>
      <div className="expertise-text">
        <div className="expertise-1">
          <img className="expertise-icon" src={Software} alt="Computer icon" />
          <div className="expertise-div">
            <h3 className="expertise-title">{t("homePage.softDev")}</h3>
            <p className="expertise-info">{t("homePage.softDevText")}</p>
          </div>
        </div>
        <div className="expertise-2">
          <img className="expertise-icon" src={Frontend} alt="React icon" />
          <div className="expertise-div">
            <h3 className="expertise-title">{t("homePage.frontDev")}</h3>
            <p className="expertise-info">{t("homePage.frontDevText")}</p>
          </div>
        </div>
        <div className="expertise-3">
          <img className="expertise-icon" src={Native} alt="Mobile icon" />
          <div className="expertise-div">
            <h3 className="expertise-title"> {t("homePage.androidDev")}</h3>
            <p className="expertise-info">{t("homePage.androidDevText")}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
