import Section from "../utils/Section";
import ContactForm from "./Subcomponents/ContactForm";
import ContactInfo from "./Subcomponents/ContactInfo";

const Contact = () => {
  return (
    <Section className="md:my-16 md:py-8 ">
      <div className="flex flex-col md:flex-row gap-10 md:gap-28">
        <ContactForm />
        <ContactInfo />
      </div>
    </Section>
  );
};

export default Contact;
