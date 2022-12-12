const SelectInput = ({ selectOptions, formik, name }) => {
  return (
    <div className="mt-1 flex flex-col">
      {formik.errors[name] && formik.touched[name] && (
        <label className="mb-0.5 self-start text-sm text-red-600">
          {formik.errors[name]}
        </label>
      )}
      <select
        name={name}
        {...formik.getFieldProps(name)}
        className="mb-2.5 self-start rounded-md border border-slate-300 bg-slate-200 py-1.5 px-3 text-sm outline-none dark:border-slate-600 dark:bg-slate-700 "
      >
        {selectOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
