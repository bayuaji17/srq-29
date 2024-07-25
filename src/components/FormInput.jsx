export default function FormInput({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  label,
  min,
}) {
  return (
    <>
      <div>
        <label htmlFor={id} className="flex flex-col text-lg my-2">
          {label}
          <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            min={min}
            className="px-4 border-b-2 border-[#f0ebf8] h-10 my-1 w-1/2 placeholder:text-sm"
          />
        </label>
      </div>
    </>
  );
}
