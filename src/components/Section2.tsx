import { Link } from "react-router-dom";
import "../scss/navbar.scss";
import "../scss/section.scss";
import dreamyCloudsImage from "../assets/dreamy-clouds.png";

export const Section2 = () => {
  return (
    <div className="container">
      <section id="section-container2">
        <h3>Gallery</h3>
        <p id="section-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          voluptatem cumque saepe culpa vero consequatur itaque, molestias vitae
          doloremque ad autem hic, quaerat expedita architecto ex vel asperiores
          temporibus quibusdam? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Maiores ipsum exercitationem doloremque. Aliquam ex
          quia, quis tempora velit, ad autem natus mollitia soluta, praesentium
          inventore nihil assumenda sint ratione at.
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
