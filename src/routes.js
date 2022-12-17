import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import SingupPage from "./pages/SingupPage";

const routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <HomePage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/checkout", element: <CheckOutPage /> },
  { path: "/signup", element: <SingupPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/profile", element: <ProfilePage /> },
];

export default routes;
