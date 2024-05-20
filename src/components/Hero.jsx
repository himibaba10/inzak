import Section from "../utils/Section";
import GIF from "../assets/mydesignvideo.gif";
import Hero_bg from "../assets/Hero_bg.webp";
import IconList from "./Subcomponents/IconList";

const Hero = () => {
  return (
    <div
      id="hero"
      className="bg-no-repeat bg-cover lg:bg-contain bg-top xl:bg-right"
      style={{
        backgroundImage: `url(${Hero_bg})`,
      }}
    >
      <Section className="pt-28 md:py-40">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
          <div className="md:w-1/2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl !leading-tight">
              Introducing <span className="font-bold">Digital Playground</span>{" "}
              @ecommerce world
            </h1>
            <img
              src={GIF}
              className="block md:hidden my-10 rounded-2xl shadow-[0_0px_60px_0px_rgba(0,0,0,0.5)]"
            />
            <ul className="space-y-2.5 text-lg md:text-xl font-light mt-10">
              <IconList>Try-on virtual Environments</IconList>
              <IconList>Enhance Customer Engagement</IconList>
              <IconList>Entertainment and Recreation</IconList>
            </ul>
          </div>
          <div className="hidden md:block md:w-1/2 relative">
            <img
              src={GIF}
              className="rounded-2xl shadow-[0_0px_60px_0px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
