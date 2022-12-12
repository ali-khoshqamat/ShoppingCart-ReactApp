const Input = ({ label, name, type, formik }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-0.5 flex items-center justify-between gap-x-4">
        <label htmlFor={name} className="text-sm font-bold">
          {label}
        </label>
        {formik.errors[name] && formik.touched[name] && (
          <label htmlFor={name} className="text-sm text-red-600">
            {formik.errors[name]}
          </label>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        {...formik.getFieldProps(name)}
        className="rounded-md border border-gray-300 py-1.5 px-2.5 outline-none dark:text-slate-900"
      />
    </div>
  );
};

export default Input;
