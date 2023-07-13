import { useLocation } from "react-router-dom";

const Categories = ({ onSetShow }) => {
  const { pathname } = useLocation();
  return (
    <div className="py-4 px-6 rounded-lg bg-white w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-[500]">Shop by Categories</h3>
        {pathname === "/store" && (
          <button
            onClick={() => onSetShow(false)}
            className="lg:hidden w-8 h-8 bg-yellow-400 rounded-full"
          >
            X
          </button>
        )}
      </div>
      <ul className="mt-6 flex items-start gap-3 flex-col">
        <li className="text-sm hover:underline cursor-pointer">Watch</li>
        <li className="text-sm hover:underline cursor-pointer">Tv</li>
        <li className="text-sm hover:underline cursor-pointer">Camera</li>
        <li className="text-sm hover:underline cursor-pointer">Laptop</li>
      </ul>
    </div>
  );
};

export default Categories;
