import Section from "../utils/Section";
import SectionHeading from "./Subcomponents/SectionHeading";
import SubFeatures from "./Subcomponents/SubFeatures";
import movingPerson from "../assets/moving-avatar 1.webp";
import ImageBG from "../assets/Why digital background image.webp";

const WhyDigitalPlayground = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ImageBG})`,
      }}
      className="bg-no-repeat bg-[length:350px] md:bg-[length:450px] md:bg-left-top bg-[0%_400px] pt-20"
    >
      <Section id="why-digital-playground">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1"></div>
          <div className="flex-1">
            <SectionHeading
              align="items-start"
              subtitle="DISCOVER THE FEATURES"
            >
              Why Digital Playground
            </SectionHeading>
            <p className="text-gray-600 leading-7 mt-8">
              The digital playground for e-commerce portals is designed to
              revolutionize the online shopping experience by introducing
              virtual showrooms, interactive product exploration and enhance
              customer engagement, with the integration of a digital playground
              within e-commerce portals represents a cutting-edge approach to
              enhance online shopping experience.
            </p>
          </div>
          <div className="flex-1">
            <img className="ml-auto" src={movingPerson} alt="" />
          </div>
        </div>

        <SubFeatures />
      </Section>
    </div>
  );
};

export default WhyDigitalPlayground;
