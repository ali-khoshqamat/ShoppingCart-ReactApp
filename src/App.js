import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import CartProvider from "./Providers/CartProvider";
import routes from "./routes";

function App() {
  return (
    <div className="min-h-screen bg-[#F6F8FA] dark:bg-slate-900 dark:text-white">
      <CartProvider>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route {...route} key={route.path} />
            ))}
          </Routes>
        </Layout>
      </CartProvider>
    </div>
  );
}

export default App;
