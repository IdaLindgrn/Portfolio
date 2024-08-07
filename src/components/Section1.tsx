import { Link } from "react-router-dom";
import dreamyCloudsImage from "../assets/dreamy-clouds.png";

export const Section1 = () => {
  return (
    <div className="container">
      <figure className="image-container">
        <img src={dreamyCloudsImage} alt="Dreamy clouds" />
      </figure>
      <section id="section-container1">
        <p className="nav-text">About</p>
        <h2 className="heading">Who am I?</h2>
        <p id="section-text">
          Curious to delve deeper into my professional journey or establish a
          connection? Explore my comprehensive CV for a detailed overview of my
          experience and achievements. Feel free to reach out and drop me a
          message if you'd like to discuss potential collaborations or simply
          connect!
        </p>
        <div id="shortcuts">
          <Link id="shortcutsLink" to="/about">
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
};
