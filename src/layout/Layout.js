import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="flex flex-col items-center">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
