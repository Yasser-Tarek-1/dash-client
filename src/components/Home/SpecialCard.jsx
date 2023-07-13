import { Link } from "react-router-dom";
import { heart, cam } from "../../assets";
import ReactStars from "react-stars";
import Button from "../../Layouts/Button";

const SpecialCard = () => {
  return (
    <div className="flex items-start gap-4 bg-white shadow-lg py-2  px-8 rounded-lg  h-80">
      {/* right */}
      <div className="flex-1 flex items-center flex-col gap-12">
        <div className="flex items-center justify-between w-full">
          <div className="badge bg-yellow-400 py-3 font-semibold">-20%</div>
          <button className="p-1 rounded-full hover:bg-red-500 transition-all duration-300">
            <img src={heart} className="w-5 object-cover" alt="love" />
          </button>
        </div>
        <div>
          <img src={cam} alt="cam" className="object-contain max-w-full" />
        </div>
        <div className="flex items-center gap-2">
          <div className="p-2 border-2 cursor-pointer">
            <img src={cam} alt="cam" className="object-contain max-w-full" />
          </div>
          <div className="p-2 border-2 cursor-pointer">
            <img src={cam} alt="cam" className="object-contain max-w-full" />
          </div>
        </div>
      </div>
      {/* left */}
      <div className="flex-1 flex items-start gap-4 flex-col">
        <div className="flex items-start flex-col gap-3 pt-1">
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
        <div className="flex items-center gap-2">
          <span className="text-yellow-600 text-sm">$60.60 </span>
          <span className="text-gray-600 text-xs line-through	">$75.00</span>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span>87</span> Day
          <div className="flex items-center gap-[2px]">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white text-xs">
              32
            </span>
            :
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white text-xs">
              14
            </span>
            :
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white text-xs">
              05
            </span>
          </div>
        </div>
        <div className="w-full h-[3px] relative">
          <span className="w-full h-full block bg-gray-300 rounded-full"></span>
          <span className="w-1/3 h-full block bg-green-600 rounded-full absolute left-0 top-0"></span>
        </div>
        <Button.Link to="/product/1">Option</Button.Link>
      </div>
    </div>
  );
};

export default SpecialCard;
