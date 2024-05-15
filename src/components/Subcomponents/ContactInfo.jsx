import SectionHeading from "./SectionHeading";

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
          className="text-3xl hover:underline hover:text-[#998dff]"
        >
          support@inzack.com
        </a>
      </div>
      <p className="font-light text-xl">
        our Instagram link:{" "}
        <a
          href="https://www.instagram.com/myinzack"
          className="hover:text-[#998dff]"
        >
          https://www.instagram.com/myinzack
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
