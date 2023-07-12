import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../components/Layout/BreadCrumb";
import Meta from "../components/Layout/Meta";

const Sign = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Meta title={pathname == "/login" ? "Login" : "Sign Up"} />
      <BreadCrumb path={pathname == "/login" ? "Login" : "Sign Up"} />
      <section className="w-full h-full mt-4 py-8 bg-[#f5f5f7] min- min-h-[70vh]">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div>
            <h2 className="mb-12 text-3xl font-bold">
              {pathname == "/login" ? "Login" : "Sign Up"}
            </h2>
            <htmlForm>
              {pathname !== "/login" && (
                <div className="grid gap-6 mb-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              )}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
                  placeholder="john.doe@company.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
                  placeholder="•••••••••"
                />
              </div>

              {pathname !== "/login" && (
                <div className="mb-4">
                  <label
                    htmlFor="confirm_password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
                    placeholder="•••••••••"
                  />
                </div>
              )}

              <div className="flex items-start mb-2">
                {pathname == "/login" ? (
                  <Link
                    to="/forgot-password"
                    className="block w-fit my--4 text-sm text-center underline"
                  >
                    Forgot Password?
                  </Link>
                ) : (
                  <>
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-yellow-300 dark:bg-gray-400 dark:border-gray-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-500"
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree with the{" "}
                      <Link
                        to="/privacy"
                        className="text-yellow-600 hover:underline dark:text-yellow-400"
                      >
                        terms and conditions
                      </Link>
                      .
                    </label>
                  </>
                )}
              </div>
              <button
                type="submit"
                className="block w-full text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-400 "
              >
                {pathname == "/login" ? "Login" : "Sign Up"}
              </button>
              <Link
                to={pathname == "/login" ? "/signup" : "/login"}
                className="mx-auto block w-fit mt-2 text-sm text-center underline"
              >
                {pathname == "/login"
                  ? "You don't have an account? Sign Up"
                  : "You already have an account? Login"}
              </Link>
            </htmlForm>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign;
