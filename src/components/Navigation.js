import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";
import DarkMode from "./DarkMode";

const items = [
  { name: "Home", to: "/" },
  { name: "Cart", to: "/cart" },
];

const Navigation = () => {
  const { total } = useSelector((state) => state.cart);
  const userData = useAuth();

  return (
    <nav className="flex items-center justify-between border-b bg-slate-100 px-8 font-bold shadow dark:border-slate-800 dark:bg-slate-900">
      <ul className="flex items-center gap-x-3.5">
        {items.map((item) => (
          <li key={item.to} className="relative flex items-center">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 !border-sky-500 py-4 px-0.5 text-sky-500"
                  : "py-4 px-0.5 hover:text-sky-500/90"
              }
            >
              {item.name}
            </NavLink>
            {item.name === "Cart" && total > 0 && (
              <div className="flex">
                <div className="absolute top-3.5 -right-5 h-[18px] w-[18px] animate-ping rounded-full bg-sky-500"></div>
                <div className="absolute top-3.5 -right-5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-sky-500 text-sm text-slate-200 dark:text-slate-900">
                  {total}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-x-4">
        <NavLink
          to={userData ? "/profile" : "/login"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 !border-sky-500 py-4 px-0.5 text-sky-500"
              : "py-4 px-0.5 hover:text-sky-500/90"
          }
        >
          {userData ? "profile" : "login/singup"}
        </NavLink>
        <DarkMode />
      </div>
    </nav>
  );
};

export default Navigation;
