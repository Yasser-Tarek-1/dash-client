import BreadCrumb from "../components/Layout/BreadCrumb";
import Meta from "../components/Layout/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb path={"Reset Password"} />
      <section className="w-full h-full mt-4 py-8 bg-[#f5f5f7] min- min-h-[70vh]">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div>
            <h2 className="mb-12 text-3xl font-bold">Reset Password</h2>
            <htmlForm>
              <div className="mb-6">
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
              </div>{" "}
              <div className="mb-6">
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
              <button
                type="submit"
                className="block w-full text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-400 "
              >
                Reset
              </button>
            </htmlForm>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
