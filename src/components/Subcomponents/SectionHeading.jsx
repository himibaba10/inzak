import PropTypes from "prop-types";
import titleIcon from "../../assets/titleIcon.webp";

const SectionHeading = ({ children, subtitle, align = "items-center" }) => {
  return (
    <div className={`flex flex-col gap-2 ${align}`}>
      <img height={60} width={60} src={titleIcon} alt="" />
      <p className="font-medium mt-2 text-gray-500 uppercase">{subtitle}</p>
      <h2 className="text-3xl lg:text-5xl font-medium leading-[1.15]">
        {children}
      </h2>
    </div>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default SectionHeading;
