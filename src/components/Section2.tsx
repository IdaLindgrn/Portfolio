import { Link } from "react-router-dom";
import "../scss/navbar.scss";
import "../scss/section.scss";
import dreamyCloudsImage from "../assets/dreamy-clouds.png";

export const Section2 = () => {
  return (
    <div className="container">
      <section id="section-container2">
        <h3 className="heading">Gallery</h3>
        <p id="section-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga natus
          quisquam nemo dicta non? Quibusdam nulla et ullam illo at. Doloremque
          beatae optio dignissimos eum quisquam temporibus ipsa cumque enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos
          delectus unde harum hic.
        </p>
        <div id="contact">
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
