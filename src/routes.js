import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <HomePage /> },
  { path: "/cart", element: <CartPage /> },
];

export default routes;
