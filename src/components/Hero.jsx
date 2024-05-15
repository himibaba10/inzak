import Section from "../utils/Section";
import movingPerson from "../assets/moving-avatar 1.webp";
import Hero_bg from "../assets/Hero_bg.webp";
import IconList from "./Subcomponents/IconList";

const Hero = () => {
  return (
    <div
      className="bg-no-repeat bg-cover md:bg-contain bg-top md:bg-right"
      style={{
        backgroundImage: `url(${Hero_bg})`,
      }}
    >
      <Section className="pt-28 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-medium leading-tight">
              Introducing Digital Playground to change ecommerce world
            </h1>
            <p className="mt-10 mb-4 text-2xl md:text-4xl font-light">
              The following are the key advantages
            </p>
            <ul className="space-y-2.5 text-lg md:text-xl font-light">
              <IconList>Try-on virtual Environments</IconList>
              <IconList>Enhance Customer Engagement</IconList>
              <IconList>Entertainment and Recreation</IconList>
            </ul>
          </div>
          <div className="md:w-1/3">
            <img className="ml-auto" src={movingPerson} alt="" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
