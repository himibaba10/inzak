import Section from "../utils/Section";
import HeroImage1 from "../assets/Pic1.png";
import HeroImage2 from "../assets/Pic2.png";
import HeroImage3 from "../assets/Pic3.png";
import HeroImage4 from "../assets/Pic4.png";
import Hero_bg from "../assets/Hero_bg.webp";
import IconList from "./Subcomponents/IconList";
import { useState } from "react";
import HeroModal from "./Subcomponents/HeroModal";
import PlayIcon from "../utils/PlayIcon";

const Hero = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div
      id="hero"
      className="bg-no-repeat bg-cover lg:bg-contain bg-top xl:bg-right"
      style={{
        backgroundImage: `url(${Hero_bg})`,
      }}
    >
      <Section className="pt-28 md:py-40">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="md:w-7/12">
            <h1 className="text-4xl lg:text-5xl !leading-tight">
              Introducing <span className="font-bold">Digital Playground</span>{" "}
              @ecommerce world
            </h1>
            {/* <p className="mt-10 mb-4 text-2xl md:text-4xl font-light">
              The following are the key advantages
            </p> */}
            <ul className="space-y-2.5 text-lg md:text-xl font-light mt-10">
              <IconList>Try-on virtual Environments</IconList>
              <IconList>Enhance Customer Engagement</IconList>
              <IconList>Entertainment and Recreation</IconList>
            </ul>
          </div>
          <div className="md:w-5/12">
            <HeroModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="grid grid-cols-2 relative">
              <div
                onClick={() => setIsOpen(true)}
                className="absolute w-full h-full flex justify-center items-center cursor-pointer"
              >
                <PlayIcon fill="white" stroke="black" />
              </div>
              <img
                className="ml-auto w-full cursor-pointer"
                src={HeroImage1}
                alt=""
              />
              <img
                className="ml-auto w-full cursor-pointer"
                src={HeroImage2}
                alt=""
              />
              <img
                className="ml-auto w-full cursor-pointer"
                src={HeroImage3}
                alt=""
              />
              <img
                className="ml-auto w-full cursor-pointer"
                src={HeroImage4}
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
