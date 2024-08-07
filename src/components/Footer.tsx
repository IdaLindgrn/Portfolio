import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { IoIosArrowUp } from "react-icons/io";
import figure from "../assets/figure.gif";
import { useTranslation } from "react-i18next";

interface Quote {
  id: number;
  character: string;
  quote: string;
  character_avatar_url: string;
}

export const Footer = () => {
  const [t] = useTranslation("global");
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

  const MAX_QUOTE_LENGTH = 150;

  const truncateQuote = (quote: any) => {
    if (quote.length > MAX_QUOTE_LENGTH) {
      return quote.substring(0, MAX_QUOTE_LENGTH) + "...";
    }
    return quote;
  };

  return (
    <footer id="footer">
      <a href="#header">
        <div className="to-top-container">
          <IoIosArrowUp className="to-top-arrow" />
        </div>
      </a>
      <div className="footer-content-container">
        <div className="footer-socials">
          <div className="div-links">
            <a href="https://github.com/IdaLindgrn">
              <BsGithub className="socials-icon" />
            </a>
            <p className="name-links">{t("footer.github")}</p>
          </div>
          <div className="div-links">
            <a href="https://www.linkedin.com/in/ida-lindgren-0b6099207/">
              <BsLinkedin className="socials-icon" />
            </a>
            <p className="name-links">{t("footer.linkedIn")}</p>
          </div>
          <div className="div-links">
            <a href="mailto:ida-lindgren@hotmail.com">
              <GrMail className="socials-icon" />
            </a>
            <p className="name-links">{t("footer.mail")}</p>
          </div>
        </div>
        <div className="tablet-and-above">
          <div className="quote-container">
            <figure className="figure-container">
              <img className="figure-img" src={figure} alt="Figure" />
            </figure>

            <p className="quote-title">{t("footer.quote")}</p>
            <div className="quote">
              <div className="quote-content">
                {quote && (
                  <>
                    <p>{truncateQuote(quote.quote)}</p>
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
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};
