import { NavLink } from "react-router-dom";

const items = [
  { name: "Home", to: "/" },
  { name: "Cart", to: "/cart" },
];

const Navigation = () => {
  return (
    <nav className="flex items-center py-5 px-8 font-bold text-sm bg-[#24292f] text-white">
      <ul className="flex items-center gap-x-4">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-red-600" : "hover:opacity-70"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
