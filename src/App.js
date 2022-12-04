import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-[#F6F8FA]">
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
