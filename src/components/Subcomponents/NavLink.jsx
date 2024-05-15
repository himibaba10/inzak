import PropTypes from "prop-types";
const NavLink = ({ children }) => {
  return (
    <li className="drop-shadow-[0_0px_2px_rgba(0,0,0,0.4)]">{children}</li>
  );
};

NavLink.propTypes = {
  children: PropTypes.string,
};

export default NavLink;
