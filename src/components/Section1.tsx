import { Link } from "react-router-dom";
import dreamyCloudsImage from "../assets/dreamy-clouds.png";

export const Section1 = () => {
  return (
    <div className="container">
      <figure className="image-container">
        <img src={dreamyCloudsImage} alt="Dreamy clouds" />
      </figure>
      <section id="section-container1">
        <h3 className="heading">CV</h3>
        <p id="section-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga natus
          quisquam nemo dicta non? Quibusdam nulla et ullam illo at. Doloremque
          beatae optio dignissimos eum quisquam temporibus ipsa cumque enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos
          delectus unde harum hic.
        </p>
        <div id="shortcuts">
          <Link id="footerLink" to="/about">
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
};
