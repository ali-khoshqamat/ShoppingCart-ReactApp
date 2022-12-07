import { NavLink } from "react-router-dom";
import { useCart } from "../Providers/CartProvider";
import DarkMode from "./DarkMode";

const items = [
  { name: "Home", to: "/" },
  { name: "Cart", to: "/cart" },
];

const Navigation = () => {
  const { total } = useCart();

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
              <div className="absolute top-3.5 -right-5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-sky-500 text-sm text-slate-200 dark:text-slate-900">
                {total}
              </div>
            )}
          </li>
        ))}
      </ul>
      <DarkMode />
    </nav>
  );
};

export default Navigation;
