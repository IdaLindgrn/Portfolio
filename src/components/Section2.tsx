import { Link } from "react-router-dom";
import "../scss/navbar.scss";
import "../scss/section.scss";
import dreamyCloudsImage from "../assets/dreamy-clouds.png";

export const Section2 = () => {
  return (
    <div className="container" id="container2">
      <section id="section-container2">
        <h3 className="heading">Gallery</h3>
        <p id="section-text">
          Get a deep dive into some of my previous projects:
        </p>
        <ul className="dot-list">
          <li>
            <span className="dot"></span>The Restaurant
          </li>
          <li>
            <span className="dot"></span>CatBox
          </li>
          <li>
            <span className="dot"></span>TicTacToe
          </li>
        </ul>
        <div id="shortcuts">
          <Link id="footerLink" to="/about">
            Learn More
          </Link>
        </div>
      </section>
      <figure className="image-container">
        <img src={dreamyCloudsImage} alt="Dreamy clouds" />
      </figure>
    </div>
  );
};
