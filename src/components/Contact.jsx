import titleIcon from "../assets/titleIcon.webp";
import Section from "../utils/Section";
import Button from "./Subcomponents/Button";
import InputArea from "./Subcomponents/InputArea";
import InputField from "./Subcomponents/InputField";

const Contact = () => {
  return (
    <Section className="my-16 py-8 ">
      <div className="md:flex gap-12 ">
        <div className="md:w-1/2 space-y-4 flex flex-col justify-center">
          <InputField title="Name" />
          <InputField title="Email" />
          <InputField title="Subject" />
          <InputArea />
          <Button />
        </div>
        <div className=" md:w-1/2 my-8 space-y-8">
          <img src={titleIcon} alt="" />
          <p className="font-semibold text-gray-500">SAY HELLO</p>
          <h6 className="text-4xl font-bold leading-10">
            Get in touch, send us an e-mail or call us
          </h6>
          <p className="text-sm font-semibold text-gray-400">
            Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis.
            Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a
            orci facilisis rutrum
          </p>
          <h6 className="text-sm text-blue-400">Call Us Now</h6>
          <h4 className=" text-gray-800 text-2xl font-semibold">
            +880178 6987 937
          </h4>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
