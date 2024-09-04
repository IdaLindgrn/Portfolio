import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import MobileApplication from "../assets/mobile-application.png";
import BrowserExtension from "../assets/browser-extension.png";
import Catbox from "../assets/catbox.png";
import TicTacToe from "../assets/tictactoe.png";
import houseGenerator from "../assets/house-generator.png";
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

  const filters = [
    t("galleryPage.all"),
    t("galleryPage.react"),
    t("galleryPage.vue"),
    t("galleryPage.reactNative"),
    t("galleryPage.typeScript"),
    t("galleryPage.reactThreeFiber"),
  ];
  const boxes = [
    {
      id: 1,
      image: MobileApplication,
      title: t("galleryPage.mobileApp"),
      text: t("galleryPage.mobileAppText"),
      link: "https://play.google.com/store/apps/details?id=com.sponsorhuset&hl=sv",
      categories: [
        t("galleryPage.reactNative"),
        t("galleryPage.typeScript"),
        t("galleryPage.expo"),
      ],
    },
    {
      id: 2,
      image: BrowserExtension,
      title: t("galleryPage.browserExtension"),
      text: t("galleryPage.browserExtensionText"),
      link: "https://www.sponsorhuset.se/start/tips-till-foreningen/handla-smart",
      categories: [
        t("galleryPage.react"),
        t("galleryPage.typeScript"),
        t("galleryPage.sass"),
      ],
    },
    {
      id: 3,
      image: houseGenerator,
      title: t("galleryPage.houseGenerator"),
      text: t("galleryPage.houseGeneratorText"),
      link: "",
      categories: [
        t("galleryPage.reactThreeFiber"),
        t("galleryPage.typeScript"),
      ],
    },
    {
      id: 4,
      image: Catbox,
      title: t("galleryPage.catBox"),
      text: t("galleryPage.catBoxText"),
      link: "https://cat-box.netlify.app/",
      categories: [
        t("galleryPage.react"),
        t("galleryPage.typeScript"),
        t("galleryPage.supabase"),
      ],
    },
    {
      id: 5,
      image: TicTacToe,
      title: t("galleryPage.tictactoe"),
      text: t("galleryPage.tictactoeText"),
      link: "https://ida-lindgren-tictactoe.netlify.app/",
      categories: [t("galleryPage.vue"), t("galleryPage.typeScript")],
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
            <h2 className="header-title">{t("galleryPage.projects")}</h2>
            <p className="gallery-subheading">{t("galleryPage.openProject")}</p>
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
