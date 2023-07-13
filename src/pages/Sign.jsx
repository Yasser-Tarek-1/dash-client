import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../Layouts/BreadCrumb";
import Meta from "../Layouts/Meta";
import Form from "../Layouts/Form";
import Button from "../Layouts/Button";
import CheckBox from "../Layouts/CheckBox";

const Sign = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Meta title={pathname == "/login" ? "Login" : "Sign Up"} />
      <BreadCrumb path={pathname == "/login" ? "Login" : "Sign Up"} />
      <section className="w-full h-full mt-4 py-8 bg-[#f5f5f7] min- min-h-[70vh]">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div>
            <h2 className="mb-8 text-3xl font-bold">
              {pathname == "/login" ? "Login" : "Sign Up"}
            </h2>
            <Form>
              {pathname !== "/login" && (
                <div className="grid gap-6 md:grid-cols-2">
                  <Form.Control
                    htmlFor="first_name"
                    label="First name"
                    id="first_name"
                    name="first_name"
                    placeholder="John"
                  />
                  <Form.Control
                    htmlFor="last_name"
                    label="Last name"
                    id="last_name"
                    name="last_name"
                    placeholder="Doe"
                  />
                </div>
              )}
              <Form.Control
                htmlFor="email"
                label="Email address"
                id="email"
                name="email"
                placeholder="john.doe@company.com"
                type="email"
              />
              <Form.Control
                htmlFor="password"
                label="Password"
                id="password"
                name="password"
                placeholder="•••••••••"
                type="password"
              />

              {pathname !== "/login" && (
                <Form.Control
                  htmlFor="confirm_password"
                  label="confirm password"
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="•••••••••"
                  type="password"
                />
              )}

              <div className="flex items-start my-2">
                {pathname == "/login" ? (
                  <Link
                    to="/forgot-password"
                    className="block w-fit my--4 text-sm text-center underline"
                  >
                    Forgot Password?
                  </Link>
                ) : (
                  <>
                    <CheckBox label={`I agree with the `} id="remember" />
                    <Link
                      to="/privacy"
                      className="text-yellow-600 hover:underline dark:text-yellow-400 text-sm mx-1 underline"
                    >
                      terms and conditions
                    </Link>
                  </>
                )}
              </div>
              <Button> {pathname == "/login" ? "Login" : "Sign Up"}</Button>
              <Link
                to={pathname == "/login" ? "/signup" : "/login"}
                className="mx-auto block w-fit mt-2 text-sm text-center underline"
              >
                {pathname == "/login"
                  ? "You don't have an account? Sign Up"
                  : "You already have an account? Login"}
              </Link>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign;
