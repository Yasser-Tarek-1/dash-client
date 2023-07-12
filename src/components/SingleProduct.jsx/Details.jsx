import Rating from "../Layout/Rating";
import { payment_methods } from "../../assets";

const Details = ({ CompareCardSections }) => {
  return (
    <div className="flex-1 flex items-start gap-1 flex-col">
      <h3 className="text-lg font-[500]">Kids PS4 Bulk 10 Colred</h3>
      <hr className="w-full h-1" />
      <div className="flex-1 flex items-start gap-1 flex-col">
        <h4 className="text-base font-[500]">$100.00</h4>
        <div className="flex items-center gap-2 text-xs">
          <Rating /> (2 reviews)
        </div>
        <button className="text-xs text-gray-500">Write Reviews</button>
      </div>
      <hr className="w-full h-1" />
      <div>
        {CompareCardSections.map(({ title, value }, idx) => {
          return (
            <div key={idx} className="w-full">
              <p className="text-base flex items-center w-full gap-2 mb-2">
                <span className="text-base font-[500] capitalize">
                  {title}:
                </span>
                {!Array.isArray(value) ? (
                  <span className="text-gray-700 text-sm capitalize">
                    {value}
                  </span>
                ) : title == "color" ? (
                  <ul className="flex items-center gap-1">
                    {value.map((color, idx) => {
                      return (
                        <li key={idx}>
                          <input
                            type="radio"
                            id={`ch-${color}`}
                            value={color}
                            className="hidden peer"
                            required=""
                          />
                          <label
                            style={{ background: color }}
                            htmlFor={`ch-${color}`}
                            className="inline-flex items-center justify-between border-2 border-transparent w-5 h-5 rounded-full cursor-pointer  peer-checked:border-yellow-400 "
                          ></label>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <ul className="flex items-center gap-1">
                    {value.map((size, idx) => {
                      return (
                        <li key={idx}>
                          <input
                            type="radio"
                            id={`ch-${size}`}
                            value={size}
                            className="hidden peer"
                            required=""
                          />
                          <label
                            htmlFor={`ch-${size}`}
                            className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-yellow-400 hover:text-gray-400 dark:peer-checked:text-gray-300 peer-checked:text-gray-400 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            {size}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between gap-4">
        <span className="text-base font-[500] capitalize">Quantity:</span>
        <p className="flex items-center">
          <span className="w-10 h-12 border flex items-center justify-center">
            1
          </span>
          <div className="flex items-center flex-col">
            <button className="w-6 h-6 border flex items-center justify-center">
              +
            </button>
            <button className="w-6 h-6 border flex items-center justify-center">
              -
            </button>
          </div>
        </p>
        <button className="btn bg-yellow-300 hover:bg-yellow-400">
          Add to cart
        </button>
        <button className="btn border-2 bg-white border-yellow-300 hover:bg-yellow-400 hover:border-yellow-400">
          Buy it now
        </button>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <button className="p-2 rounded-lg bg-red-400 text-white border flex items-center justify-center">
          Add to favorite
        </button>
        <button className="p-2 rounded-lg bg-yellow-400 text-white border flex items-center justify-center">
          Add to compare
        </button>
      </div>
      <hr className="w-full h-1 mt-2" />
      <div className="bg-[#f5f5f7] p-2 w-full flex flex-col items-center ">
        <h3 className="text-lg font-[500]">Payment Methods</h3>
        <img
          src={payment_methods}
          className="w-96 object-cover max-w-full"
          alt="payment_methods"
        />
      </div>
    </div>
  );
};

export default Details;
