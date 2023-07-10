import { Outlet } from "react-router-dom";
import Footer from "./components/Layout/Footer";

import Navbar from "./components/Layout/Navbar";
import { Suspense } from "react";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const WrappedRoot = () => {
  return (
    <Suspense fallback="loading...">
      <Root />
    </Suspense>
  );
};

export default WrappedRoot;
