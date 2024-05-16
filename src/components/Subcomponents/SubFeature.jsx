import PropTypes from "prop-types";

function SubFeature({ title, children, image }) {
  return (
    <div className="md:w-1/3 hover:shadow-[0_0px_15px_0px_rgba(0,0,0,0.1)] duration-500 p-5 lg:p-10 rounded-xl">
      <div className="flex flex-col items-center text-center">
        <img className="h-20 w-auto" src={image} alt={title} />
        <h3 className="text-2xl mt-5 md:mt-10 mb-3 font-bold">{title}</h3>
        <p className="text-gray-600 leading-7">{children}</p>
      </div>
    </div>
  );
}

SubFeature.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.string,
};

export default SubFeature;
