import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../scss/galleryPage.scss";
import { useTranslation } from "react-i18next";

export const GalleryPage = () => {
  const [t] = useTranslation("global");

  const boxes = [
    {
      id: 1,
      image: "image1.jpg",
      title: "Title 1",
      text: "Text 1",
    },
    {
      id: 2,
      image: "image2.jpg",
      title: "Title 2",
      text: "Text 2",
    },
    {
      id: 3,
      image: "image3.jpg",
      title: "Title 3",
      text: "Text 3",
    },
  ];

  return (
    <>
      <Header />
      <main className="gallery-container">
        <div className="gallery-header">
          <h1 className="header-title">{t("headers.galleryTitle")}</h1>
          <p>{t("headers.gallerySubheading")}</p>
        </div>
        <div className="projects-container">
          <div className="box-container">
            {boxes.map((box) => (
              <div key={box.id} className="box">
                {" "}
                <img src={box.image} alt={box.title} className="box-image" />
                <h2 className="box-title">{box.title}</h2>
                <p className="box-text">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
