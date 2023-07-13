import { Link } from "react-router-dom";
import { ps4, home, heart, heart_red, show, shuffle, cart2 } from "../assets";
import ReactStars from "react-rating-stars-component";

// howShow for hidden or show delete button
// howDisplay for how can i display the card
const ProductCard = ({ howShow = "card", howDisplay = "column" }) => {
  return (
    <div
      className={`${
        howDisplay == "row" ? "w-full h-fit" : "h-96 w-[250px]"
      } bg-white rounded-lg shadow-lg px-4 py-8 relative group cursor-pointer`}
    >
      {howShow == "favorite" ? (
        <div className="absolute flex items-center flex-col right-4 top-4">
          <button className="w-6 h-6 rounded-full hover:bg-red-500">X</button>
        </div>
      ) : (
        <div className="absolute flex items-center flex-col right-4 top-4">
          <button className="p-1 rounded-full hover:bg-red-500 transition-all duration-300">
            <img src={heart} className="w-5 object-cover" alt="love" />
          </button>
          <div className=" items-center flex-col hidden group-hover:flex transition-all duration-300">
            <button className="p-1 rounded-full hover:bg-yellow-300 transition-all duration-300">
              <img src={shuffle} className="w-5 object-cover" alt="shuffle" />
            </button>
            <button className="p-1 rounded-full hover:bg-yellow-300 transition-all duration-300">
              <img src={show} className="w-5 object-cover" alt="show" />
            </button>
            <button className="p-1 rounded-full hover:bg-yellow-300 transition-all duration-300">
              <img src={cart2} className="w-5 object-cover" alt="cart" />
            </button>
          </div>
        </div>
      )}

      <Link
        to="/product/99"
        className={howDisplay == "row" && "flex items-start justify-start"}
      >
        <div className=" h-44">
          {howShow == "favorite" || howDisplay == "row" ? (
            <img src={ps4} className="w-40 max-w-full mx-auto pb-8 " />
          ) : (
            <>
              <img
                src={ps4}
                className="w-40 max-w-full mx-auto pb-8 group-hover:hidden transition-all duration-300"
              />
              <img
                src={home}
                className="w-20 max-w-full  mx-auto pb-8 hidden group-hover:block transition-all duration-300"
              />
            </>
          )}
        </div>
        <div className="flex items-start flex-col gap-2">
          <span className="text-yellow-700 text-xs">Sony</span>
          <p className="custom-ellipsis-line font-semibold text-sm text-start">
            If a dog chews shoes whose shoes does he choose, If a dog chews
            shoes whose shoes does he choose?
          </p>
          <ReactStars
            count={5}
            edit={false}
            size={24}
            activeColor="#ffd700"
            value={4}
          />
          <p className="text-sm text-gray-700">$99.90</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
