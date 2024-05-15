import { useState } from "react";
import { useEffect } from "react";
import NavLinks from "./Subcomponents/NavLinks";

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldFixHeader = scrollPosition > 100; // Adjust this value based on your needs

      setIsHeaderFixed(shouldFixHeader);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between items-center top-0 left-0 w-full px-2.5 md:px-10 py-5 transition-all duration-300 ease-in-out ${
        isHeaderFixed ? "fixed bg-black/60 shadow-md" : "absolute"
      } z-10`}
    >
      <div className="text-5xl">LOGO</div>
      <NavLinks />
    </header>
  );
};

export default Header;
