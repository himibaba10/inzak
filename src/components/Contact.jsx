import Section from "../utils/Section";
import ContactForm from "./Subcomponents/ContactForm";
import ContactInfo from "./Subcomponents/ContactInfo";

const Contact = () => {
  return (
    <Section id="contact" className="md:my-16 md:py-8 ">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-28">
        <ContactForm />
        <ContactInfo />
      </div>
    </Section>
  );
};

export default Contact;
