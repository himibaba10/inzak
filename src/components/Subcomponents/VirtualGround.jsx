import PropTypes from "prop-types";
import { useState } from "react";
import CrossIcon from "../../utils/CrossIcon";
import PlayIcon from "../../utils/PlayIcon";

const VirtualGround = ({ link, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="h-screen w-full fixed top-0 left-0 z-50 bg-black/50">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 cursor-pointer"
          >
            <CrossIcon />
          </div>
          <iframe className="w-full h-full" src={link}></iframe>
        </div>
      )}
      <div className="flex-1 relative">
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer absolute w-full h-full bg-black/50 flex justify-end items-end p-2"
        >
          <div className="absolute w-full h-full flex justify-center items-center">
            <PlayIcon />
          </div>
          <h3 className="text-2xl font-medium text-white">{title}</h3>
        </div>
        <iframe className="w-full h-60 lg:h-80" src={link}></iframe>
      </div>
    </>
  );
};

VirtualGround.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VirtualGround;
