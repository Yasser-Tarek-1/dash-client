import { Link } from "react-router-dom";
import {
  credit,
  gift,
  shipping,
  headphones,
  sell,
  mac,
  cam,
  tv,
  watch,
  ps4,
  phone,
  headphone,
  airbods,
  speaker,
  home,
} from "../../assets";

const ALL_CATEGORY = [
  {
    title: "Free Shipping",
    des: "From all orders over $199.",
    img: shipping,
  },
  {
    title: "Daily Surpise Offers ",
    des: "Save up to 25%.",
    img: gift,
  },
  {
    title: "Suport 24h",
    des: "Shop with an expert.",
    img: headphones,
  },
  {
    title: "Affordable Price",
    des: "Get Factory Default Price.",
    img: sell,
  },
  {
    title: "Secure Payments",
    des: "100% Protected Payment.",
    img: credit,
  },
];

const ALL_SECTIONS = [
  {
    title: "PC & Laptops",
    count: 8,
    img: mac,
  },
  {
    title: "Cameras & Videos",
    count: 10,
    img: cam,
  },
  {
    title: "Smart TV",
    count: 12,
    img: tv,
  },
  {
    title: "Smart Watch",
    count: 9,
    img: watch,
  },
  {
    title: "Music & Games",
    count: 4,
    img: ps4,
  },
  {
    title: "Mobiles & Tablets",
    count: 12,
    img: phone,
  },
  {
    title: "Headphones",
    count: 6,
    img: headphone,
  },
  {
    title: "Accessories",
    count: 10,
    img: airbods,
  },
  {
    title: "Portable Speakers",
    count: 6,
    img: speaker,
  },
  {
    title: "Home Appliances",
    count: 6,
    img: home,
  },
];

const Category = () => {
  return (
    <section className="w-full h-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap gap-8">
          {ALL_CATEGORY.map(({ title, des, img }, idx) => {
            return (
              <div key={idx} className="flex items-center gap-5 ">
                <img src={img} alt="shipping" className="w-9 object-cover" />
                <div>
                  <h4 className="text-base font-semibold">{title}</h4>
                  <p className="text-sm">{des}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-24 gap-8 bg-white p-8 rounded-lg">
          {ALL_SECTIONS.map(({ title, count, img }, idx) => {
            return (
              <div
                key={idx}
                className="flex items-center  justify-between border-b border-r p-2 border-l border-[#13192145]"
              >
                <div>
                  <Link
                    className="text-base font-semibold hover:underline"
                    to="#"
                  >
                    {title}
                  </Link>
                  <p className="text-xs">{count} items</p>
                </div>
                <img
                  src={img}
                  alt="shipping"
                  className="w-24 object-cover rounded-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
