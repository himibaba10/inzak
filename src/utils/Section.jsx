import PropTypes from "prop-types";

const Section = ({ children, className = "" }) => {
  return (
    <section
      className={`max-w-[1400px] mx-auto px-2.5 md:px-5 lg:px-20 ${className} bg-no-repeat`}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Section;
