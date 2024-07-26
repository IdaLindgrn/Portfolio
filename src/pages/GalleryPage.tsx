import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../scss/galleryPage.scss";
import { useTranslation } from "react-i18next";
import Catbox from "../assets/catbox.png";
import TicTacToe from "../assets/tictactoe.png";
import Webshop from "../assets/webshop.png";
import { useState } from "react";

export const GalleryPage = () => {
  const [t] = useTranslation("global");
  const [hoveredBox, setHoveredBox] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleHover = (boxId: any) => {
    setHoveredBox(boxId);
  };

  const handleLeave = () => {
    setHoveredBox(null);
  };

  const filters = ["all", "react", "vue", "typescript", "python"];
  const boxes = [
    {
      id: 1,
      image: Catbox,
      title: "CatBox",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      link: "https://cat-box.netlify.app/",
      category: "react",
    },
    {
      id: 2,
      image: TicTacToe,
      title: "TicTacToe",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      link: "https://ida-lindgren-tictactoe.netlify.app/",
      category: "vue",
    },
    {
      id: 3,
      image: Webshop,
      title: "Webshop",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      link: "",
      category: "typescript",
    },
  ];

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filteredBoxes =
    selectedFilter === "all"
      ? boxes
      : boxes.filter((box) => box.category === selectedFilter);

  return (
    <>
      <Header />
      <main className="gallery-container">
        <div className="gallery-header">
          <h1 className="header-title">{t("headers.galleryTitle")}</h1>
          <p className="gallery-subheading">{t("headers.gallerySubheading")}</p>
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
                    className={`box-container ${
                      hoveredBox === box.id ? "hovered" : ""
                    }`}
                  >
                    <img
                      src={box.image}
                      alt={box.title}
                      className="box-image"
                    />
                    <h2 className="box-title">{box.title}</h2>
                    <p className="box-text">{box.text}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
