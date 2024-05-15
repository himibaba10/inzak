import titleIcon from "../assets/titleIcon.webp";
import Section from "../utils/Section";
import SubFeatures from "./Subcomponents/SubFeatures";

const Features = () => {
  return (
    <Section>
      <div>
        <div className=" flex flex-col gap-4 items-center">
          <img height={60} width={60} src={titleIcon} alt="" />
          <p className=" font-bold text-xs text-gray-500">
            DISCOVER THE FEATURES
          </p>
          <h3 className="text-5xl font-medium leading-7">
            We are young but bold
          </h3>
        </div>
        <div className="features md:flex my-16">
          <SubFeatures />
          <SubFeatures />
          <SubFeatures />
        </div>
      </div>
    </Section>
  );
};

export default Features;
