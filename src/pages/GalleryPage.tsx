import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import MobileApplication from "../assets/mobile-application.png";
import BrowserExtension from "../assets/browser-extension.png";
import Catbox from "../assets/catbox.png";
import TicTacToe from "../assets/tictactoe.png";
import Webshop from "../assets/webshop.png";
import { useState } from "react";

export const GalleryPage = () => {
  const [t] = useTranslation("global");
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleHover = (boxId: number) => {
    setHoveredBox(boxId);
  };

  const handleLeave = () => {
    setHoveredBox(null);
  };

  const filters = ["All", "React", "Vue", "TypeScript", "JavaScript", "Python"];
  const boxes = [
    {
      id: 1,
      image: MobileApplication,
      title: "Mobile Application",
      text: "Med denna app kan du få pengar tillbaka när du handlar online från över 600 butiker. Pengarna delas mellan dig och en valfri förening.",
      link: "https://play.google.com/store/apps/details?id=com.sponsorhuset&hl=sv",
      categories: ["React Native", "TypeScript", "Expo"],
    },
    {
      id: 2,
      image: BrowserExtension,
      title: "Browser Extension",
      text: "Ett webbläsarverktyg som förenklar när du handlar med Sponsorhuset online.",
      link: "https://www.sponsorhuset.se/start/tips-till-foreningen/handla-smart",
      categories: ["React", "TypeScript", "SASS"],
    },
    {
      id: 3,
      image: Catbox,
      title: "CatBox",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      link: "https://cat-box.netlify.app/",
      categories: ["React", "TypeScript", "Supabase"],
    },
    {
      id: 4,
      image: TicTacToe,
      title: "TicTacToe",
      text: "Ett enkelt TicTacToe-spel för två spelare där målet är att få tre i rad.",
      link: "https://ida-lindgren-tictactoe.netlify.app/",
      categories: ["Vue", "TypeScript"],
    },
    {
      id: 5,
      image: Webshop,
      title: "Webshop [Länk saknas]",
      text: "Ett grupparbete som gjordes under min utbildning på medieinstiutet. En tapeter webshop.",
      link: "",
      categories: ["TypeScript", "JavaScript", "SASS"],
    },
  ];

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filteredBoxes =
    selectedFilter === "All"
      ? boxes
      : boxes.filter((box) => box.categories.includes(selectedFilter));

  return (
    <>
      <Header />
      <div className="background-container"></div>
      <div className="gallery-wrapper">
        <main className="gallery-container">
          <div className="gallery-header">
            <h2 className="header-title">{t("headers.galleryTitle")}</h2>
            <p className="gallery-subheading">
              {t("headers.gallerySubheading")}
            </p>
            <div className="filter-container">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-button ${
                    selectedFilter === filter ? "active" : ""
                  }`}
                  onClick={() => handleFilterChange(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="projects-container">
            <div className="box-container">
              {filteredBoxes.map((box) => (
                <div
                  key={box.id}
                  className="box"
                  onMouseEnter={() => handleHover(box.id)}
                  onMouseLeave={handleLeave}
                >
                  <a
                    href={box.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="box-a"
                  >
                    <div
                      className={`box-content ${
                        hoveredBox === box.id ? "hovered" : ""
                      }`}
                    >
                      <div className="image-container">
                        <img
                          src={box.image}
                          alt={box.title}
                          className="box-image"
                        />
                        <div className="box-text-overlay">
                          <p className="box-text">{box.text}</p>
                        </div>
                      </div>
                      <div className="box-text-container">
                        <h2 className="box-title">{box.title}</h2>
                        <div className="box-categories">
                          {box.categories.map((category, index) => (
                            <span key={index} className="category-bubble">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
