import PropTypes from "prop-types";
import CheckIcon from "../../utils/CheckIcon";

const NavLink = ({ children }) => {
  return (
    <li className="flex items-center gap-2">
      <CheckIcon />
      <span>{children}</span>
    </li>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavLink;
