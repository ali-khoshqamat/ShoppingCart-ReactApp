const BooleanCheckBoxInput = ({ formik, name }) => {
  return (
    <div className="flex flex-col">
      {formik.errors[name] && formik.touched[name] && (
        <label htmlFor={name} className="mb-0.5 text-sm text-red-600">
          {formik.errors[name]}
        </label>
      )}
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          id={name}
          name={name}
          value={true}
          onChange={formik.handleChange}
          checked={formik.values[name]}
        />
        <label htmlFor={name} className="text-sm">
          Terms and Conditions!
        </label>
      </div>
    </div>
  );
};

export default BooleanCheckBoxInput;
