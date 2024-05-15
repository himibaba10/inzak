const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-5 absolute top-0 left-0 w-full">
      <div className="text-5xl">LOGO</div>
      <nav>
        <ul className="flex gap-12 text-lg font-light text-white">
          <li className="drop-shadow-[0_0px_2px_rgba(0,0,0,0.4)]">Home</li>
          <li className="drop-shadow-[0_0px_2px_rgba(0,0,0,0.4)]">
            Why Digital Playground
          </li>
          <li className="drop-shadow-[0_0px_2px_rgba(0,0,0,0.4)]">
            Virtual Tryons
          </li>
          <li className="drop-shadow-[0_0px_2px_rgba(0,0,0,0.4)]">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
