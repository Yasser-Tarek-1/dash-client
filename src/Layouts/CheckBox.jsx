const CheckBox = ({ label, id }) => {
  return (
    <div className="flex items-center cursor-pointer gap-2">
      <input
        id={id}
        type="checkbox"
        className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-300 focus:ring-2 cursor-pointer"
      />
      <label
        htmlFor={id}
        className="text-sm text-gray-900 dark:text-gray-300 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
