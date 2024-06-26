import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import figure from "../assets/figure.gif";

interface Quote {
  id: number;
  character: string;
  quote: string;
  character_avatar_url: string;
}

export const Footer = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          "https://officeapi.akashrajpurohit.com/quote/random"
        );
        if (response.ok) {
          const data = await response.json();
          setQuote(data);
          localStorage.setItem("quote", JSON.stringify(data));
          localStorage.setItem("lastAPIFetchDate", new Date().toISOString());
        } else {
          throw new Error("Failed to fetch quote");
        }
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };
    const lastAPIFetchDate = localStorage.getItem("lastAPIFetchDate");
    if (lastAPIFetchDate) {
      const lastFetchDate = new Date(lastAPIFetchDate);
      const today = new Date();
      if (
        lastFetchDate.getFullYear() !== today.getFullYear() ||
        lastFetchDate.getMonth() !== today.getMonth() ||
        lastFetchDate.getDate() !== today.getDate()
      ) {
        fetchQuote();
      } else {
        const storedQuote = localStorage.getItem("quote");
        if (storedQuote) {
          setQuote(JSON.parse(storedQuote));
        }
      }
    } else {
      fetchQuote();
    }
  }, []);

  return (
    <footer id="footer">
      <div className="footer-content-container">
        <div className="footer-socials">
          <a href="https://github.com/IdaLindgrn">
            <BsGithub className="socials-icon" />
          </a>
          <a href="https://www.linkedin.com/in/ida-lindgren-0b6099207/">
            <BsLinkedin className="socials-icon" />
          </a>
          <a href="mailto:ida-lindgren@hotmail.com">
            <GrMail className="socials-icon" />
          </a>
        </div>
        <div className="tablet-and-above">
          <div className="quote-container">
            <figure className="figure-container">
              <img className="figure-img" src={figure} alt="Figure" />
            </figure>
            <p className="quote-title">The Office quote of the day</p>
            <div className="quote">
              <div className="quote-content">
                {quote && (
                  <>
                    <p>{quote.quote}</p>
                    <p>- {quote.character}</p>
                  </>
                )}
              </div>
              <div className="quote-triangle"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright 2023. All Rights Reserved</p>
      </div>
    </footer>
  );
};
