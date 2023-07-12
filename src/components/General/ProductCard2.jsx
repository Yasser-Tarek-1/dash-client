import { Link } from "react-router-dom";
import { ps4, heart, heart_red, show, shuffle, cart2 } from "../../assets";

const ProductCard2 = () => {
  return (
    <button className="w-full bg-white rounded-lg shadow-lg px-4 py-8 2x relative group">
      <div className="absolute flex items-center flex-row-reverse right-4 top-4">
        <button className="p-1 rounded-full hover:bg-red-500 transition-all duration-300">
          <img src={heart} className="w-5 object-cover" alt="love" />
        </button>
        <div className=" items-center flex-row-reverse hidden group-hover:flex transition-all duration-300">
          <button className="p-1 rounded-full hover:bg-yellow-500 transition-all duration-300">
            <img src={shuffle} className="w-5 object-cover" alt="shuffle" />
          </button>
          <button className="p-1 rounded-full hover:bg-yellow-500 transition-all duration-300">
            <img src={show} className="w-5 object-cover" alt="show" />
          </button>
          <button className="p-1 rounded-full hover:bg-yellow-500 transition-all duration-300">
            <img src={cart2} className="w-5 object-cover" alt="cart" />
          </button>
        </div>
      </div>
      <Link to="/product/12" className="flex items-start justify-start">
        <div>
          <img src={ps4} className="w-40 max-w-full mx-auto pb-8 " />
        </div>
        <div className="flex items-start flex-col gap-3">
          <span className="text-yellow-700 text-xs">Sony</span>
          <p className="custom-ellipsis-line font-semibold text-sm text-start">
            If a dog chews shoes whose shoes does he choose, If a dog chews
            shoes whose shoes does he choose?
          </p>
          <div className="rating w-20">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400 "
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p className="text-sm text-gray-700">$99.90</p>
        </div>
      </Link>
    </button>
  );
};

export default ProductCard2;
