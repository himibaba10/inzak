// eslint-disable-next-line react/prop-types
function InputField({ title }) {
  return (
    <div>
      <div className="relative mt-2">
        <input
          type="text"
          name="name"
          id="name"
          className="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 px-2 outline-none italic"
          placeholder={title}
        />
        <div
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default InputField;
