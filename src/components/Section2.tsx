import { Link } from "react-router-dom";
import cats from "../assets/cats.png";

export const Section2 = () => {
  return (
    <div className="container" id="container2">
      <section id="section-container2">
        <p className="nav-text">Gallery</p>
        <h2 className="heading">My Projects</h2>
        <p id="section-text">
          Want to see what I have made? Take a look at some of the projects I’ve
          worked on. I have made counless personal projects and made huge
          impacts for the companies I’ve helped update there applications.
        </p>
        <div id="shortcuts">
          <Link id="footerLink" to="/about">
            Learn More
          </Link>
        </div>
      </section>
      <figure className="image-container">
        <img src={cats} alt="Cats sitting on a hill looking over the horizon" />
      </figure>
    </div>
  );
};
