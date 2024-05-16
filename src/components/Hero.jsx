import Section from "../utils/Section";
import HeroImage from "../assets/trail3zgif.gif";
import Hero_bg from "../assets/Hero_bg.webp";
import IconList from "./Subcomponents/IconList";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-no-repeat bg-cover md:bg-contain bg-top md:bg-right"
      style={{
        backgroundImage: `url(${Hero_bg})`,
      }}
    >
      <Section className="pt-28 md:py-40">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="md:w-7/12">
            <h1 className="text-4xl md:text-5xl font-medium !leading-tight">
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
          <div className="md:w-5/12">
            <img className="ml-auto w-full" src={HeroImage} alt="" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
