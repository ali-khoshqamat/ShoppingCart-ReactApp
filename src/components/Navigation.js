import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";

const items = [
  { name: "Home", to: "/" },
  { name: "Cart", to: "/cart" },
];

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between border-b bg-slate-100 py-4 px-8 font-bold shadow dark:border-slate-800 dark:bg-slate-900">
      <ul className="flex items-center gap-x-3.5">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-sky-500 py-5 px-0.5 text-sky-500"
                  : "py-5 px-0.5 hover:text-sky-500/90"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <DarkMode />
    </nav>
  );
};

export default Navigation;
