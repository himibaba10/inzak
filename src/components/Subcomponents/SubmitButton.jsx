const SubmitButton = () => {
  return (
    <input
      className="text-white font-medium text-lg border-[6px] rounded-full border-[rgba(204,_241,_255,1)] self-start py-3 px-20 mt-5 translate-y-7 bg-gradient-to-r from-[#70bafe] from-0% via-[#998dff] via-50% to-[#70bafe] to-100% bg-[length:150%] bg-left hover:bg-right transition-all duration-500"
      type="submit"
      value="Send"
    />
  );
};

export default SubmitButton;
