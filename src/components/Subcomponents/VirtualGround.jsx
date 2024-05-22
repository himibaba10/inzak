import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import CrossIcon from "../../utils/CrossIcon";
import PlayIcon from "../../utils/PlayIcon";

const VirtualGround = ({ link, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [htmlContent, setHtmlContent] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("/virtualHTML/demoFirst3.2.html")
      .then((response) => response.text())
      .then((data) => {
        setHtmlContent(data);
      })
      .catch((error) => console.error("Error fetching the HTML file:", error));
  }, [isOpen]);

  useEffect(() => {
    if (htmlContent && containerRef.current) {
      // Set the innerHTML
      containerRef.current.innerHTML = htmlContent;

      // Extract and execute script tags
      const scripts = containerRef.current.querySelectorAll("script");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        newScript.textContent = script.textContent;
        script.parentNode.replaceChild(newScript, script);
      });
    }
  }, [htmlContent, isOpen]);

  return (
    <>
      {isOpen && (
        <div className="h-screen w-full fixed top-0 left-0 z-50 bg-black/50">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 cursor-pointer z-10"
          >
            <CrossIcon />
          </div>
          <div ref={containerRef}></div>
        </div>
      )}
      <div className="flex-1 relative rounded-xl overflow-hidden">
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer absolute w-full h-full bg-black/50 flex justify-end items-end p-2 z-10"
        >
          <div className="absolute w-full h-full flex justify-center items-center">
            <PlayIcon />
          </div>
          <h3 className="text-2xl font-medium text-white">{title}</h3>
        </div>
        <div>
          <img
            className="h-72 w-full object-cover"
            src="/virtualHTML/ajio.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

VirtualGround.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VirtualGround;
