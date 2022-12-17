import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import CartProvider from "./Providers/CartProvider";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Providers/AuthProvider";

function App() {
  return (
    <div className="min-h-screen bg-[#F6F8FA] text-slate-700 dark:bg-slate-900 dark:text-slate-300">
      <ToastContainer />
      <AuthProvider>
        <CartProvider>
          <Layout>
            <Routes>
              {routes.map((route) => (
                <Route {...route} key={route.path} />
              ))}
            </Routes>
          </Layout>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
