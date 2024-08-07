import Software from "../assets/expertise/software-dev.png";
import Frontend from "../assets/expertise/frontend-dev.png";
import Native from "../assets/expertise/native-dev.png";

export const MyExpertise = () => {
  return (
    <article>
      <h2 className="heading">My Expertise</h2>
      <div className="expertise-text">
        <div className="expertise-1">
          <img className="expertise-icon" src={Software} alt="Computer icon" />
          <div>
            <h3 className="expertise-title">Software Development</h3>
            <p className="expertise-info">
              Experiences in both functional and OOP: Python, JavaScript,
              TypeScript
            </p>
          </div>
        </div>
        <div className="expertise-2">
          <img className="expertise-icon" src={Frontend} alt="React icon" />
          <div>
            <h3 className="expertise-title">Frontend Dev</h3>
            <p className="expertise-info">
              Passionate about UI/UX. Over 2 years of development experience in
              HTML, CSS, JS, React and NextJS frameworks.
            </p>
          </div>
        </div>
        <div className="expertise-3">
          <img className="expertise-icon" src={Native} alt="Mobile icon" />
          <div>
            <h3 className="expertise-title">Android/iOS Dev</h3>
            <p className="expertise-info">
              Skilled in developing hybrid mobile apps and cross–platform
              solutions using the React Native framework.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
