const Form = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="w-full h-full">
      {children}
    </form>
  );
};

const Control = ({
  htmlFor,
  label,
  type = "text",
  placeholder,
  onChange,
  id,
  name,
  onBlur,
  value,
  touched = false,
  errors = false,
}) => {
  // handel all about input, value and errors.
  return (
    <div className="w-full h-full flex items-start gap-2 flex-col capitalize my-2">
      <label
        className={`${touched && errors && "text-red-600"} text-sm font-medium`}
        htmlFor={htmlFor}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={`${
          touched && errors && "border-red-600 placeholder:text-red-600"
        } border w-full rounded-lg outline-none text-sm focus:ring-yellow-400 focus:border-yellow-400 block`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {touched && errors && <p className="text-red-600 text-sm">{errors}</p>}
    </div>
  );
};

Form.Control = Control;
export default Form;
