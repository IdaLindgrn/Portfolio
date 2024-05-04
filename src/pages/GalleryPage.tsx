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

  const handleHover = (boxId: any) => {
    setHoveredBox(boxId);
  };

  const handleLeave = () => {
    setHoveredBox(null);
  };

  const boxes = [
    {
      id: 1,
      image: Catbox,
      title: "CatBox",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga natus quisquam nemo dicta non? Quibusdam nulla et ullam illo at. Doloremque beatae optio dignissimos eum quisquam temporibus ipsa cumque enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos delectus unde harum hic",
      link: "https://cat-box.netlify.app/",
    },
    {
      id: 2,
      image: TicTacToe,
      title: "TicTacToe",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga natus quisquam nemo dicta non? Quibusdam nulla et ullam illo at. Doloremque beatae optio dignissimos eum quisquam temporibus ipsa cumque enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos delectus unde harum hic",
      link: "https://ida-lindgren-tictactoe.netlify.app/",
    },
    {
      id: 3,
      image: Webshop,
      title: "Webshop",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga natus quisquam nemo dicta non? Quibusdam nulla et ullam illo at. Doloremque beatae optio dignissimos eum quisquam temporibus ipsa cumque enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos delectus unde harum hic",
      link: "",
    },
  ];

  return (
    <>
      <Header />
      <main className="gallery-container">
        <div className="gallery-header">
          <h1 className="header-title">{t("headers.galleryTitle")}</h1>
          <p className="gallery-subheading">{t("headers.gallerySubheading")}</p>
        </div>
        <div className="projects-container">
          <div className="box-container">
            {boxes.map((box) => (
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
