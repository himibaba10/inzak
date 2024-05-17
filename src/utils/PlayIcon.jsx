import PropTypes from "prop-types";

const PlayIcon = ({
  color = "text-white",
  fill = "none",
  stroke = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke={stroke}
      className={`w-20 h-20 ${color}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
      />
    </svg>
  );
};

PlayIcon.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

export default PlayIcon;
