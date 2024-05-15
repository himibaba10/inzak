import Section from "../utils/Section";
import movingPerson from "../assets/moving-avatar 1.webp";
import Hero_bg from "../assets/Hero_bg.webp";
import NavLink from "./Subcomponents/NavLink";

const Hero = () => {
  return (
    <div
      className="bg-no-repeat bg-contain bg-right"
      style={{
        backgroundImage: `url(${Hero_bg})`,
      }}
    >
      <Section className="py-32">
        <div className="flex items-center">
          <div className="w-2/3">
            <h1 className="text-6xl font-medium leading-tight">
              Introducing Digital Playground to change ecommerce world
            </h1>
            <p className="mt-10 mb-4 text-4xl font-light">
              The following are the key advantages
            </p>
            <ul className="space-y-2.5 text-xl font-light">
              <NavLink>Try-on virtual Environments</NavLink>
              <NavLink>Enhance Customer Engagement</NavLink>
              <NavLink>Entertainment and Recreation</NavLink>
            </ul>
          </div>
          <div className="w-1/3">
            <img className="ml-auto" src={movingPerson} alt="" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
