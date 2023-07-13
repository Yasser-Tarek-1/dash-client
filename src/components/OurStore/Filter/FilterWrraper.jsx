import Categories from "./Categories";
import Filter from "./Filter";

const FilterWrraper = ({ show, onSetShow }) => {
  return (
    <>
      <div
        className={`absolute ${
          show ? "left-0 top-0" : "left-[-400px] top-0"
        } lg:relative lg:left-0 z-10 bg-white lg:bg-transparent w-80 h-full transition-all duration-500`}
      >
        <div className="flex items-center gap-4 w-full flex-col">
          <Categories onSetShow={onSetShow} />
          <Filter />
        </div>
      </div>
    </>
  );
};

export default FilterWrraper;
