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
      title: "Restaurant",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga natus quisquam nemo dicta non? Quibusdam nulla et ullam illo at. Doloremque beatae optio dignissimos eum quisquam temporibus ipsa cumque enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos delectus unde harum hic",
    },
    {
      id: 2,
      image: "image2.jpg",
      title: "CatBox",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga natus quisquam nemo dicta non? Quibusdam nulla et ullam illo at. Doloremque beatae optio dignissimos eum quisquam temporibus ipsa cumque enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos delectus unde harum hic",
    },
    {
      id: 3,
      image: "image3.jpg",
      title: "TicTacToe",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga natus quisquam nemo dicta non? Quibusdam nulla et ullam illo at. Doloremque beatae optio dignissimos eum quisquam temporibus ipsa cumque enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos delectus unde harum hic",
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
              <div key={box.id} className="box">
                <div className="box-container">
                  <img src={box.image} alt={box.title} className="box-image" />
                  <h2 className="box-title">{box.title}</h2>
                  <p className="box-text">{box.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
