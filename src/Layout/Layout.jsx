import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
