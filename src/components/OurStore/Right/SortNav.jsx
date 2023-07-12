import { row2, row3 } from "../../../assets";

const SortNav = ({ onRowHandler, productShow }) => {
  return (
    <div className="py-4 px-6 rounded-lg bg-white w-full">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-[500]">Sort by:</h4>
        <div className="flex items-center gap-2">
          <div className="text-sm text-gray-600">
            <span> 2 </span> of <span> 19 </span> Product
          </div>
          <div className="flex items-center gap-1">
            <button
              data-id="row2"
              onClick={(e) => onRowHandler(e)}
              className={`p-1 rounded-lg ${
                productShow == "row2" && "bg-yellow-400 "
              }`}
            >
              <img data-id="row2" src={row2} className="w-6" />
            </button>
            <button
              data-id="row3"
              onClick={(e) => onRowHandler(e)}
              className={`p-1 rounded-lg ${
                productShow == "row3" && "bg-yellow-400 "
              }`}
            >
              <img data-id="row3" src={row3} className="w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-2 py-2">
        <button className="bg-red-500 text-white py-2 text-sm rounded-full px-5">
          Clear
        </button>
        <div className="gap-1 flex items-center flex-wrap">
          <p className="bg-[#19015f] text-white py-2 text-sm rounded-full px-5">
            #19015f <span className="cursor-pointer mx-1">X</span>
          </p>
          <p className="bg-[#190fa3] text-white py-2 text-sm rounded-full px-5">
            #190fa3 <span className="cursor-pointer mx-1">X</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SortNav;
