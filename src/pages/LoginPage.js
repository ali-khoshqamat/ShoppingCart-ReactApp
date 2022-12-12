import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center gap-y-8">
      <h2 className="p-5 text-center text-xl font-bold">Login Page</h2>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
