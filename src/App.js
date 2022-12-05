import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";

function App() {
  return (
    <div className="h-screen bg-[#F6F8FA] dark:bg-slate-900 dark:text-white">
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
