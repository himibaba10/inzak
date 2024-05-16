import { useForm } from "@formspree/react";
import InputArea from "./InputArea";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mbjnbwko");

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-1/2 flex flex-col justify-center"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-5">
        <InputField title="Name" label="name" />
        <InputField title="Email" label="email" />
      </div>
      <InputArea />
      <SubmitButton state={state} />
      {state.succeeded && (
        <p className="mt-16 text-green-600 text-lg">Thank you for submitting</p>
      )}
    </form>
  );
};

export default ContactForm;
