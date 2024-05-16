import SubFeature from "./SubFeature";
import Feature1Image from "../../assets/Feature1.webp";
import Feature2Image from "../../assets/Feature2.webp";
import Feature3Image from "../../assets/Feature3.webp";

const SubFeatures = () => {
  return (
    <div className="features md:flex mb-16">
      <SubFeature title="Limitless Possibilities" image={Feature1Image}>
        In the digital age, the only limit is your imagination. From interactive
        storytelling to cutting-edge virtual reality experiences, we offer a
        diverse range of content that pushes the boundaries of what&apos;s
        possible.
      </SubFeature>
      <SubFeature title="Accessible Entertainment" image={Feature2Image}>
        Whether you&apos;re at home or on the go, our platform provides seamless
        access to entertainment anytime, anywhere. With just a few clicks, you
        can dive into a world of captivating stories, thrilling games, and
        engaging multimedia experiences.
      </SubFeature>
      <SubFeature title="Personalized Experiences" image={Feature3Image}>
        We understand that every user is unique, which is why we tailor our
        content to suit your preferences. Through advanced algorithms and
        machine learning techniques, we deliver personalized recommendations
        that keep you coming back for more.
      </SubFeature>
    </div>
  );
};

export default SubFeatures;
