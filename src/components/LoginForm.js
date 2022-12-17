import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "../common/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/CRUDUserService";
import { useAuthActions } from "../Providers/AuthProvider";
import { useQuery } from "../Hooks/useQuery";

const LoginForm = () => {
  const redirect = useQuery().get("redirect") || "/";
  const setAuth = useAuthActions();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const onSubmit = (values) => {
    loginUser(values)
      .then(({ data }) => {
        console.log(data);
        setAuth(data);
        setError(null);
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
    <section className="flex w-[30rem] flex-col gap-y-5 rounded-2xl border border-slate-200 bg-slate-100 p-5 dark:border-none dark:bg-slate-800">
      <h2 className="text-center font-bold">Login Form</h2>
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

        <button
          type="submit"
          disabled={!formik.isValid}
          className="mt-3.5 mb-1 w-full rounded-md border border-slate-300 bg-slate-200 py-1.5 px-3 font-bold shadow-sm enabled:!text-sky-500 enabled:hover:border-sky-500 disabled:opacity-30 dark:border-slate-600 dark:bg-slate-700 dark:enabled:hover:border-sky-500 "
        >
          Login
        </button>
        {error && <p className="text-red-600">{error}</p>}
        <Link to={`/signup?redirect=${redirect}`}>
          <p className="text-sm hover:text-sky-500">Not singup yet?</p>
        </Link>
      </form>
    </section>
  );
};

export default LoginForm;

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Eamil Format!")
    .required("Email is Required!"),
  password: Yup.string().required("Password is Required!"),
});
const inputOptions = [
  { label: "Email Address", name: "email", type: "email" },
  { label: "Password", name: "password", type: "password" },
];
