import { Link } from "react-router-dom";
import { ps4 } from "../../assets";

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
    value: ["red", "blue", "pink"],
  },
  {
    title: "Size",
    value: ["M", "L", "XLL"],
  },
];

const CompareCard = () => {
  return (
    <div className=" w-[250px] bg-white rounded-lg shadow-lg px-4 py-8 2x relative group">
      <div className="absolute flex items-center flex-col right-4 top-4">
        <button className="w-7 h-7 rounded-full hover:bg-red-500 transition-all duration-300">
          X
        </button>
      </div>
      <div className="flex items-center flex-col ">
        <div className="h-44">
          <img src={ps4} className="w-40 max-w-full mx-auto pb-8" />
        </div>
        <div className="flex items-start gap-2 flex-col">
          <h3 className="custom-ellipsis-line text-start text-sm font-[500] capitalize hover:underline">
            <Link to="/">
              It is a long established fact that a reader will be distracted by
              the readable.
            </Link>
          </h3>
          <p className="text-sm font-[500]">$10.20</p>
          {CompareCardSections.map(({ title, value }, idx) => {
            return (
              <div key={idx} className="w-full">
                <hr className="w-full h-1" />
                <p className="text-base flex items-center w-full justify-between">
                  <span className="text-sm font-[500] capitalize">
                    {title}:
                  </span>
                  {!Array.isArray(value) ? (
                    <span className="text-yellow-700 text-xs capitalize">
                      {value}
                    </span>
                  ) : title == "color" ? (
                    <p className="flex items-center gap-1">
                      {value.map((color, idx) => {
                        return (
                          <span
                            key={idx}
                            style={{ backgroundColor: color }}
                            className="block w-3 h-3 rounded-full"
                          ></span>
                        );
                      })}
                    </p>
                  ) : (
                    <p className="flex items-center gap-1">
                      {value.map((size, idx) => {
                        return (
                          <span
                            key={idx}
                            className="text-yellow-700 text-xs capitalize"
                          >
                            {size}
                          </span>
                        );
                      })}
                    </p>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompareCard;
