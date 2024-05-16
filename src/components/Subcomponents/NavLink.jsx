import PropTypes from "prop-types";
const NavLink = ({ children, href, setIsMenuOpen }) => {
  return (
    <li className={`font-medium hover:text-black transition duration-300`}>
      <a href={href} onClick={() => setIsMenuOpen(false)}>
        {children}
      </a>
    </li>
  );
};

NavLink.propTypes = {
  href: PropTypes.string,
  setIsMenuOpen: PropTypes.func,
  children: PropTypes.string,
};

export default NavLink;
