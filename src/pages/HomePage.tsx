import { NewNavbar } from "../components/NewNavbar";
import { Contact } from "../components/Contact";
import { AboutText } from "../components/AboutText";
import { Section1 } from "../components/Section1";
import "../scss/homePage.scss";
import "../scss/header.scss";
import "../scss/footer.scss";
import { Section2 } from "../components/Section2";

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
        <Section1></Section1>
        <Section2></Section2>
      </main>
      <footer id="footer">
        <Contact></Contact>
      </footer>
    </>
  );
};
