import { useAuth } from "../Providers/AuthProvider";

const User = () => {
  const userData = useAuth();

  return (
    <div className="flex max-h-80 rounded-2xl border bg-slate-100 shadow dark:border-none dark:bg-slate-800">
      <div className="aspect-w-12 aspect-h-[3.2] basis-4/12">
        <img
          src=""
          alt="user"
          className="rounded-l-2xl bg-[#C9011B] object-cover"
        />
      </div>
      <div className="flex basis-8/12 items-center justify-between py-7 px-10 ">
        <div className="flex h-full flex-col">
          <h2 className="mb-5 text-lg font-bold">{userData.name}</h2>
          <div className="flex flex-col gap-y-1">
            <h3>{userData.email}</h3>
            <h3>{userData.phoneNumber}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
