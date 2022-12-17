import { useAuth } from "../Providers/AuthProvider";

const ProfilePage = () => {
  const userData = useAuth();
  return (
    <main className="flex flex-col items-center gap-y-8">
      <h2 className="p-5 text-center text-xl font-bold">Profile Page</h2>
      <section className="flex max-h-80 flex-col gap-y-5 rounded-2xl border bg-slate-100 p-5 shadow dark:border-none dark:bg-slate-800">
        <h3>
          <span className="font-bold">Eamil: </span>
          {userData.email}
        </h3>
        <p>
          <span className="font-bold">Password: </span>
          {userData.password}
        </p>
      </section>
    </main>
  );
};

export default ProfilePage;
