import { useEffect, useState } from "react";
import {
  arrowTop,
  arrowBottom,
  cycle,
  person,
  favorite,
  cart,
  category,
} from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [langShow, setLangShow] = useState(false);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  const langHandler = (lang) => {
    i18n.changeLanguage(lang);
    setLangShow(false);

    if (lang == "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  };

  return (
    <header>
      <div className="bg-[#131921] min-h-[36px] border-b border-gray-600 text-white tracking-wider flex items-center">
        <div className="container mx-auto px-4 text-xs">
          <div className="flex items-center justify-between flex-col gap-1 py-1 md:flex-row">
            <p className="text-center">Free Shipping Over $199.</p>
            <div className="flex items-center relative">
              <p className="text-center">
                Hotline: <a href="tel:+201016736238">+201016736238</a>
              </p>
              <span className="w-[1px] block h-[26px] mx-3 bg-gray-600" />
              <button
                className="text-center flex items-center"
                onClick={() => setLangShow(!langShow)}
              >
                <span className="w-4 uppercase">{lang.slice(0, 2)}</span>
                <img
                  src={!langShow ? arrowBottom : arrowTop}
                  alt="arrow"
                  className="w-4"
                />
              </button>
              {langShow && (
                <div className="flex items-center flex-col gap-1 bg-gray-600 rounded-lg p-2 absolute bottom-[-60px] right-[-4px]">
                  <button
                    className="text-center px-3 uppercase"
                    onClick={() => langHandler("en")}
                  >
                    En
                  </button>
                  <span className="w-[30px] block h-[1px] bg-[#131921]" />
                  <button
                    className="text-center px-3 uppercase"
                    onClick={() => langHandler("ar")}
                  >
                    Ar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#131921] min-h-[64px] border-b border-gray-600 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-white justify-between gap-1 flex-col md:flex-row">
            <h1 className="text-3xl font-bold py-1 md:py-0">
              <Link to="/">Dash.</Link>
            </h1>
            <div className="bg-white rounded-lg w-full mb-1 md:w-[600px] flex items-center">
              <input
                className="border-none bg-transparent outline-none text-black w-full block px-4 text-sm"
                placeholder="Search..."
              />
              <button className="btn bg-yellow-400 hover:bg-yellow-500">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-[#131921]"
                />
              </button>
            </div>
            <div className="flex items-center gap-4  py-1 md:py-0">
              <Link to="/compare-product">
                <button className="flex items-center text-sm font-[300] gap-1">
                  <img src={cycle} alt="cycle" className="w-12" />
                  <div>
                    <span>Compare</span>
                    <br /> <span>Products</span>
                  </div>
                </button>
              </Link>
              <Link to="/favorite">
                <button className="flex items-center text-sm font-[300] gap-1">
                  <img src={favorite} alt="favorite" className="w-12" />
                  <div>
                    <span>Favorite</span>
                    <br /> <span>Wishlist</span>
                  </div>
                </button>
              </Link>
              <Link to="/login">
                <button className="flex items-center text-sm font-[300] gap-1">
                  <img src={person} alt="person" className="w-12" />
                  <div>
                    <span>Login</span>
                    <br /> <span>Myaccount</span>
                  </div>
                </button>
              </Link>
              <Link to="/cart">
                <button className="flex items-center text-sm font-[300] gap-1">
                  <img src={cart} alt="cart" className="w-12" />
                  <div>
                    <span className="badge bg-yellow-400 border-none text-[#131921]">
                      0
                    </span>
                    <br /> <span>$0.00</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#232f3e] min-h-[36px] border-b border-gray-600 text-white tracking-wider flex items-center py-1 md:py-0">
        <div className="container mx-auto px-4 text-xs">
          <div className="flex items-center gap-8">
            <div className="relative flex items-center">
              <div className="dropdown">
                <label
                  tabIndex={0}
                  className="cursor-pointer m-1 text-white uppercase text-[16px] font-[100] flex items-center gap-2"
                >
                  <img src={category} alt="category" className="w-9" />
                  <span className="mb-[-3px]">Shop Categories</span>
                </label>
                {/* <ul
                  tabIndex={0}
                  className="dropdown-content z-[99] menu p-2 shadow  rounded-box w-52 bg-gray-600"
                >
                  <div className="md:hidden">
                    <li className="hover:bg-yellow-500 rounded-lg transition-all">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="hover:bg-yellow-500 rounded-lg transition-all">
                      <Link to="/store">Ouer Store</Link>
                    </li>
                    <li className="hover:bg-yellow-500 rounded-lg transition-all">
                      <Link to="/blogs">Blogs</Link>
                    </li>
                    <li className="hover:bg-yellow-500 rounded-lg transition-all">
                      <Link to="/contact">Contact</Link>
                    </li>
                  </div>
                  <li className="hover:bg-yellow-500 rounded-lg transition-all">
                    <Link to="/phones">Action</Link>
                  </li>
                  <li className="hover:bg-yellow-500 rounded-lg transition-all">
                    <Link to="/head">Another Action</Link>
                  </li>
                  <li className="hover:bg-yellow-500 rounded-lg transition-all">
                    <Link to="/app">Else..</Link>
                  </li>
                </ul> */}
              </div>
              <span className="w-[1px] block h-[26px] mx-3 bg-gray-600" />
            </div>
            <ul className="text-white  items-center gap-4 text-[14px] uppercase font-[100] hidden md:flex">
              <li className="hover:text-yellow-500">
                <NavLink
                  className={({ isActive }) => isActive && "text-yellow-500"}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:text-yellow-500">
                <NavLink
                  className={({ isActive }) => isActive && "text-yellow-500"}
                  to="/store"
                >
                  Our Store
                </NavLink>
              </li>
              <li className="hover:text-yellow-500">
                <NavLink
                  className={({ isActive }) => isActive && "text-yellow-500"}
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="hover:text-yellow-500">
                <NavLink
                  className={({ isActive }) => isActive && "text-yellow-500"}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
