// import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-full flex-col">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
