export default function RadioButton({ label, id, value, name, onChange,checked }) {
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
          checked={checked}
          required
        />
        <label
          htmlFor={id}
          className={`border-2 border-black w-28 p-2 rounded-xl font-medium text-lg hover:bg-cyan-600 hover:text-white hover:font-semibold peer-checked:font-semibold peer-checked:bg-cyan-600 peer-checked:text-white text-center cursor-pointer font-sans peer-checked:border-none`}
        >
          {label}
        </label>
      </div>
    </>
  );
}
