import clsx from "clsx";

function Input({
  label,
  type = "text",
  placeholder,
  name,
  register,
  rules,
  error,
  isRequired = false,
  className
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="text-sm font-medium">
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        {...(register && register(name, rules))}
        className={clsx(
          "w-full mt-2 px-8 py-3 bg-gray-100 rounded-xl focus:outline-none",
          className
        )}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default Input;