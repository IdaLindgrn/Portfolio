import { Link } from "react-router-dom";
import "../scss/navbar.scss";
import "../scss/section.scss";
import dreamyCloudsImage from "../assets/dreamy-clouds.png";

export const Section1 = () => {
  return (
    <div className="container">
      <figure className="image-container">
        <img src={dreamyCloudsImage} alt="Dreamy clouds" />
      </figure>
      <section id="section-container1">
        <h3>CV</h3>
        <p id="section-text">
          I'm a frontend developer with a passion for creating beautiful and
          functional web interfaces. I believe that the best web interfaces are
          not only functional but also aesthetically pleasing. That's why I
          approach my work with an artist's eye.
        </p>
        <div id="contact">
          <Link id="hej" to="/about">
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
};
