import figure from "../assets/figure.gif";
import "../scss/dailyQuotes.scss";

export const DailyQuotes = () => {
  return (
    <div className="daily-quotes">
      <figure className="figure-container">
        <img className="figure-img" src={figure} alt="Figure" />
      </figure>
    </div>
  );
};
