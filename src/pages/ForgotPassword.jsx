import BreadCrumb from "../components/Layout/BreadCrumb";
import Meta from "../components/Layout/Meta";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb path={"Forgot Password"} />
      <section className="w-full h-full mt-4 py-8 bg-[#f5f5f7] min- min-h-[70vh]">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div>
            <h2 className="mb-12 text-3xl font-bold">Forgot Password</h2>
            <htmlForm>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
                  placeholder="exaple@email.com"
                />
              </div>
              <button
                type="submit"
                className="block w-full text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-400 "
              >
                Next
              </button>
            </htmlForm>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
