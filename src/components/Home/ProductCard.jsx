import { Link } from "react-router-dom";
import {
  ps4,
  home,
  heart,
  heart_red,
  show,
  shuffle,
  cart2,
} from "../../assets";

const ProductCard = () => {
  return (
    <button className="h-96 w-[250px] bg-white rounded-lg shadow-lg px-4 py-8 2x relative group">
      <div className="absolute flex items-center flex-col right-4 top-4">
        <button className="p-1 rounded-full hover:bg-red-500 transition-all duration-300">
          <img src={heart} className="w-5 object-cover" alt="love" />
        </button>
        <div className=" items-center flex-col hidden group-hover:flex transition-all duration-300">
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
      <Link to="/">
        <div className=" h-44">
          <img
            src={ps4}
            className="w-40 max-w-full mx-auto pb-8 group-hover:hidden transition-all duration-300"
          />
          <img
            src={home}
            className="w-20 max-w-full  mx-auto pb-8 hidden group-hover:block transition-all duration-300"
          />
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
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>
          <p className="text-sm text-gray-700">$99.90</p>
        </div>
      </Link>
    </button>
  );
};

export default ProductCard;
