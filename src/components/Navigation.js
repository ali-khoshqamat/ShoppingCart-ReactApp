import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";

const items = [
  { name: "Home", to: "/" },
  { name: "Cart", to: "/cart" },
];

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 font-bold bg-slate-100  dark:bg-slate-900 dark:text-white border-b dark:border-slate-800">
      <ul className="flex items-center gap-x-4">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-sky-500" : "hover:text-sky-500/90"
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
