import InputArea from "./InputArea";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  return (
    <form className="md:w-1/2 space-y-4 flex flex-col justify-center">
      <div className="flex justify-between gap-5">
        <InputField title="Name" />
        <InputField title="Email" />
      </div>
      <InputArea />
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
