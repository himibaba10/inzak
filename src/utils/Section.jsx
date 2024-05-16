import PropTypes from "prop-types";

const Section = ({ children, className = "", id = "" }) => {
  return (
    <section
      id={id}
      className={`max-w-[1400px] mx-auto px-2.5 md:px-5 lg:px-20 ${className} bg-no-repeat`}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Section;
