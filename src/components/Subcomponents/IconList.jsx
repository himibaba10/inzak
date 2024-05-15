import PropTypes from "prop-types";
import CheckIcon from "../../utils/CheckIcon";

const IconList = ({ children }) => {
  return (
    <li className="flex items-center gap-2">
      <CheckIcon />
      <span>{children}</span>
    </li>
  );
};

IconList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IconList;
