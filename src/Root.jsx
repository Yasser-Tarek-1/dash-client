import { Outlet } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
