import SingupForm from "../components/SingupForm";

const SingupPage = () => {
  return (
    <main className="flex flex-col items-center gap-y-8">
      <h2 className="p-5 text-center text-xl font-bold">Create your account</h2>
      <SingupForm />
    </main>
  );
};

export default SingupPage;
