import PropTypes from "prop-types";

const VirtualGround = ({ link }) => {
  return (
    <div className="flex-1">
      <iframe className="w-full h-80" src={link}></iframe>
    </div>
  );
};

VirtualGround.propTypes = {
  link: PropTypes.string.isRequired,
};

export default VirtualGround;
