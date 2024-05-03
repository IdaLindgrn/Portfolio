import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

export const Contact = () => {
  return (
    <>
      <div className="footer-socials">
        <a href="https://github.com/IdaLindgrn">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/ida-lindgren-0b6099207/">
          <BsLinkedin />
        </a>
        <a href="mailto:ida-lindgren@hotmail.com">
          <GrMail />
        </a>
      </div>
      <div className="copyright">
        <p>© Copyright 2023. All Rights Reserved</p>
      </div>
    </>
  );
};

{
  /* <div id="mobile-icon" onClick={toggleMobilwMenu}>
<FaBars></FaBars>
</div> */
}