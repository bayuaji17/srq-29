export default function RadioButton({ label, id, value, name, onChange }) {
  return (
    <>
      <div className="flex flex-col mt-3">
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className="peer appearance-none"
          required
        />
        <label
          htmlFor={id}
          className={`border-2 w-28 p-2 rounded-full font-medium text-lg hover:bg-cyan-600 hover:text-white hover:font-semibold peer-checked:font-semibold  peer-checked:bg-cyan-600 peer-checked:text-white text-center cursor-pointer font-sans `}
        >
          {label}
        </label>
      </div>
    </>
  );
}
