import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import NavLink from "./NavLink";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav
        className={`
        fixed md:static z-10 transition-all duration-500 w-full top-0
        ${
          isMenuOpen
            ? "bg-black/70 md:bg-transparent left-0 md:left-auto md:top-auto"
            : "md:block -left-full"
        }`}
      >
        <ul
          className={`flex flex-col p-10 md:p-0 md:flex-row gap-5 md:gap-12 text-lg font-light text-white justify-end`}
        >
          <NavLink>Home</NavLink>
          <NavLink>Why Digital Playground</NavLink>
          <NavLink>Virtual Tryons</NavLink>
          <NavLink>Contact</NavLink>
        </ul>
      </nav>
      <HamburgerMenu isMenuOpen={isMenuOpen} onClick={toggleMenu} />
    </>
  );
};

export default NavLinks;
