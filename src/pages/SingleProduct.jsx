import { useParams } from "react-router-dom";
import BreadCrumb from "../Layouts/BreadCrumb";
import Meta from "../Layouts/Meta";
import Images from "../components/SingleProduct/Images";
import Details from "../components/SingleProduct/Details";
import ProductCard from "../Layouts/ProductCard";
import ReactStars from "react-stars";
import Form from "../Layouts/Form";
import Button from "../Layouts/Button";

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
                    <ReactStars
                      count={5}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                      value={4}
                    />
                    <span className="text-xs text-gray-600">
                      Based on 3 reviews
                    </span>
                  </div>
                  <Form>
                    <Form.Control
                      htmlFor="name"
                      label="Name"
                      id="name"
                      name="name"
                      placeholder="John"
                    />
                    <Form.Control
                      htmlFor="email"
                      label="Email address"
                      id="email"
                      name="email"
                      placeholder="john.doe@company.com"
                    />
                    <Form.Control
                      htmlFor="title"
                      label="Review Tilte"
                      id="title"
                      name="title"
                      placeholder="Yasser"
                    />
                    <div className="w-full h-full flex items-start gap-2 flex-col capitalize my-2">
                      <label htmlFor="review" className="text-sm font-medium">
                        Review
                      </label>
                      <textarea
                        type="text"
                        id="review"
                        className={`border w-full rounded-lg outline-none text-sm focus:ring-yellow-400 focus:border-yellow-400 block`}
                        placeholder="Review "
                      />
                    </div>
                    <div className="w-full h-full flex items-start gap-2 flex-col capitalize my-2">
                      <label htmlFor="rating" className="text-sm font-medium`">
                        Rating
                      </label>
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={1}
                      />
                    </div>
                    <Button>Review</Button>
                  </Form>
                </div>
              </div>
            </div>
            {/* Some Products */}
            <h3 className="text-3xl font-semibold">Some Products </h3>
            <div className="my-12 flex items-center gap-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
