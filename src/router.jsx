import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CompareProduct from "./pages/CompareProduct";
import Favorite from "./pages/Favorite";
import Sign from "./pages/Sign";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Privacy from "./pages/Privacy";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
// do in the last project 8:33h
// import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "store",
        element: <OurStore />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      // same page for Blogs and Blog Deatails
      // if find { id } params then open Blog Deatails else open Blogs
      {
        path: "blog/:id",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "compare-product",
        element: <CompareProduct />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
      {
        path: "login",
        element: <Sign />,
      },
      {
        path: "signup",
        element: <Sign />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      // {
      //   path: "checkout",
      //   element: <Checkout />,
      // },
    ],
  },
]);

export default router;
