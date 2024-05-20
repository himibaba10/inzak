import SectionHeading from "./SectionHeading";
import instaIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/Linkedin.png";

const ContactInfo = () => {
  return (
    <div className="md:w-1/2 my-8">
      <SectionHeading align="items-start" subtitle="SAY HELLO">
        Get in touch, send us
        <br />
        an e-mail or call us
      </SectionHeading>
      <div className="mt-10 mb-2">
        <a
          href="mailto:support@inzack.com"
          className="text-3xl hover:underline text-black hover:text-[#998dff] transition"
        >
          support@inzack.com
        </a>
      </div>
      <p className="font-light sm:text-xl flex items-center gap-2 underline mt-4">
        <a
          href="https://www.instagram.com/myinzack"
          target="_blank"
          className="text-black hover:text-[#998dff] transition"
        >
          <img className="w-full max-w-8" src={instaIcon} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/vijay-krishna-6681019"
          target="_blank"
          className="text-black hover:text-[#998dff] transition"
        >
          <img className="w-full max-w-8" src={linkedinIcon} alt="" />
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
