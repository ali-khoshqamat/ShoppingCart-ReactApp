import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "../common/Input";
import RadioInput from "../common/RadioInput";
import { useEffect, useState } from "react";
import axios from "axios";
import SelectInput from "../common/SelectInput";
import CheckBoxInput from "../common/CheckBoxInput";
import BooleanCheckBoxInput from "../common/BooleanCheckBoxInput";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../services/CRUDUserService";
import { useAuthActions } from "../Providers/AuthProvider";
import { useQuery } from "../Hooks/useQuery";

const SingupForm = () => {
  const redirect = useQuery().get("redirect") || "";
  const setAuth = useAuthActions();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const onSubmit = (values) => {
    const { name, email, password, phoneNumber } = values;
    const user = { name, email, password, phoneNumber };
    signupUser(user)
      .then(({ data }) => {
        console.log(data);
        setAuth(data);
        setError(null);
        // setSavedFormValues(null);
        navigate(`/${redirect}`);
      })
      .catch((error) => {
        console.log(error);
        error.response &&
          error.response.data.message &&
          setError(error.response.data.message);
      });
  };
  const [savedFormValues, setSavedFormValues] = useState(null);
  const formik = useFormik({
    initialValues: savedFormValues || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/users/1")
  //     .then(({ data }) => {
  //       setSavedFormValues(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <section className="flex w-[40rem] flex-col gap-y-5 rounded-2xl border border-slate-200 bg-slate-100 p-5 dark:border-none dark:bg-slate-800">
      <h2 className="text-center font-bold">Singup Form</h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-2.5">
        {inputOptions.map((input) => (
          <Input
            key={input.name}
            name={input.name}
            label={input.label}
            type={input.type}
            formik={formik}
          />
        ))}
        <div className="flex items-center justify-between">
          <RadioInput
            name="gender"
            radioOptions={GenderRadioOptions}
            formik={formik}
          />
          <CheckBoxInput
            name="intrests"
            formik={formik}
            checkBoxOption={IntrestsCheckOptions}
          />
        </div>
        <SelectInput
          name="nationality"
          formik={formik}
          selectOptions={NationalitySelectOptions}
        />
        <BooleanCheckBoxInput name="terms" formik={formik} />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="mt-3.5 mb-1 w-full rounded-md border border-slate-300 bg-slate-200 py-1.5 px-3 font-bold shadow-sm enabled:!text-sky-500 enabled:hover:border-sky-500 disabled:opacity-30 dark:border-slate-600 dark:bg-slate-700 dark:enabled:hover:border-sky-500 "
        >
          Signup
        </button>
        {error && <p className="text-red-600">{error}</p>}
        <Link to={`/login?redirect=${redirect}`}>
          <p className="text-sm hover:text-sky-500">Already login?</p>
        </Link>
      </form>
    </section>
  );
};

export default SingupForm;

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
  gender: "",
  nationality: "",
  intrests: [],
  terms: false,
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required!")
    .min(8, "Name length must be at least 8 characters!"),
  email: Yup.string()
    .email("Invalid Eamil Format!")
    .required("Email is Required!"),
  phoneNumber: Yup.string()
    .required("Phone Number is Required!")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number!")
    .nullable(),
  password: Yup.string()
    .required("Password is Required!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirmation: Yup.string()
    .required("Password Confirmation is Required!")
    .oneOf([Yup.ref("password"), null], "Passwords must Match!"),
  gender: Yup.string().required("Gender is Required!"),
  nationality: Yup.string().required("Nationnality ir Required!"),
  intrests: Yup.array().required("Intrest is Required!").min(1),
  terms: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});
const inputOptions = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email Address", name: "email", type: "email" },
  { label: "Phone Number", name: "phoneNumber", type: "tel" },
  { label: "Password", name: "password", type: "password" },
  {
    label: "Password Confirmation",
    name: "passwordConfirmation",
    type: "password",
  },
];
const GenderRadioOptions = [
  { label: "Male", value: "0" },
  { label: "Female", value: "1" },
];
const NationalitySelectOptions = [
  { value: "", label: "Select Nationality.." },
  { value: "IR", label: "Iran" },
  { value: "GER", label: "Germany" },
  { value: "US", label: "USA", isDisabled: true },
];
const IntrestsCheckOptions = [
  { label: "React.js", value: "react.js" },
  { label: "Vue.js", value: "vue.js" },
  { label: "Angular.js", value: "angular.js" },
];
