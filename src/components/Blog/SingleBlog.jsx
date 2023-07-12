import { mainBanner1 } from "../../assets";

const SingleBlog = ({ id }) => {
  return (
    <div className="w-full h-full">
      <div className="mb-4 rounded-lg overflow-hidden lg:h-[70vh]">
        <h3 className="mb-6 text-2xl font-[500]">A butey Blog For You.</h3>
        <img
          src={mainBanner1}
          className="rounded-lg object-cover max-w-full"
          alt="blog"
        />
      </div>
      <p className="mb-4  text-base text-gray-600">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
      <div className="flex items-center gap-8 mb-4 ">
        <p className="text-sm text-gray-500">11 JUN, 2023</p>
        <p className="text-sm text-gray-500">Yasser</p>
      </div>
      <div className="p-4 rounded-lg bg-white shadow-lg">
        <h3 className="mb-6 text-xl font-[500]">Leave Commint</h3>
        <htmlForm>
          <div className="flex items-center gap-8 mb-4">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
                placeholder="john.doe@company.com"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
                placeholder="john.doe@company.com"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Commint
            </label>
            <textarea
              type="commint"
              id="commint"
              className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
              placeholder="john.doe@company.com"
            />
          </div>
          <button
            type="submit"
            className="block w-full text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-400 "
          >
            Commint
          </button>
        </htmlForm>
      </div>
    </div>
  );
};

export default SingleBlog;
