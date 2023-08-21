import { useState } from "react";
import { NavLinks } from "./NavLinks";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FaBars
      className="hamburger"
      size="30px"
      color="#76697B"
      onClick={() => setOpen(!open)}
    ></FaBars>
  );

  const closeIcon = (
    <IoIosClose
      className="hamburger"
      size="60px"
      color="#76697B"
      onClick={() => setOpen(!open)}
    ></IoIosClose>
  );

  return (
    <nav className="mobile-navigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  );
};
