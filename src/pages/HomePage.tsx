import { NewNavbar } from "../components/NewNavbar";
import { Contact } from "../components/Contact";
import { AboutText } from "../components/AboutText";
import "../scss/homePage.scss";
import "../scss/header.scss";
import "../scss/footer.scss";

export const HomePage = () => {
  return (
    <>
      <header>
        <NewNavbar></NewNavbar>
      </header>
      <main>
        <div id="banner">
          <h1 className="header-title">Ida Lindgren</h1>
          <p>Frontend Developer</p>
        </div>
        <AboutText></AboutText>
      </main>
      <footer id="footer">
        <Contact></Contact>
      </footer>
    </>
  );
};
