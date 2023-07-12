import { useParams } from "react-router-dom";
import BreadCrumb from "../components/Layout/BreadCrumb";
import Meta from "../components/Layout/Meta";
import Images from "../components/SingleProduct.jsx/Images";
import Details from "../components/SingleProduct.jsx/Details";
import Rating from "../components/Layout/Rating";
import ProductCard from "../components/General/ProductCard";

const CompareCardSections = [
  {
    title: "brand",
    value: "sony",
  },
  {
    title: "type",
    value: "ps4",
  },
  {
    title: "SKU",
    value: "SKU009",
  },
  {
    title: "Availability",
    value: "In Stock",
  },
  {
    title: "color",
    value: ["red", "yellow", "pink"],
  },
  {
    title: "Size",
    value: ["M", "L", "XLL"],
  },
];

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <>
      <Meta title={"Dynamic Name"} />
      <BreadCrumb path={"Dynamic Name"} />
      <div className="w-full h-full bg-[#f5f5f7] mt-4">
        <section className="w-full h-full py-8">
          <div className="container mx-auto px-4">
            {/* Product Card */}
            <div className="bg-white p-4">
              <div className="flex items-start gap-4 flex-col md:flex-row">
                <Images />
                <Details CompareCardSections={CompareCardSections} />
              </div>
            </div>
            {/* Description */}
            <div className="w-full my-16">
              <h3 className="text-2xl font-[500]">Description</h3>
              <div className="bg-white w-full mt-2 py-4 px-6 rounded-lg text-sm">
                Whether you are an individual looking to attract buyers to your
                Etsy page or personal website, or part of a small business that
                can’t afford a major marketing or sales team, Picsart can make
                it simple to generate competitive product descriptions along
                with the best of them. Not only can you easily create a product
                description to post your product listing immediately, but the
                product description generator can also create variations of
                product descriptions for you to test or post as unique content
                in various marketing platforms for better SEO performance.
                Easily edit and adjust product descriptions after they are
                created for you, or simply copy and paste product descriptions
                to make your life easy..
              </div>
            </div>
            {/* Reviews */}
            <div className="w-full my-16">
              <h3 className="text-2xl font-[500]">Reviews</h3>
              <div className="bg-white w-full mt-2 py-4 px-6 rounded-lg text-sm">
                <div>
                  <h4 className="text-lg font-[500]">Customers Reviews</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <Rating />
                    <span className="text-xs text-gray-600">
                      Based on 3 reviews
                    </span>
                  </div>
                  <htmlForm>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
                        placeholder="Yasser"
                      />
                    </div>
                    <div className="my-4">
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
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Review Tilte
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
                        placeholder="Yasser"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="review"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Review
                      </label>
                      <textarea
                        type="text"
                        id="review"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
                        placeholder="Review "
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Rating
                      </label>
                      <Rating />
                    </div>
                    <button
                      type="submit"
                      className="block w-full text-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-400 "
                    >
                      Review
                    </button>
                  </htmlForm>
                </div>
              </div>
            </div>{" "}
            {/* Some Products */}
            <h3 className="text-3xl font-semibold">Some Products </h3>
            <div className="my-12 flex items-center gap-4">
              <ProductCard /> <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard /> <ProductCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
