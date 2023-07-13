import { Outlet } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";

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
