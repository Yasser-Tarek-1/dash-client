import Products from "./Products/Products";
import FilterWrraper from "./Filter/FilterWrraper";
import { useState } from "react";
import { menu } from "../../assets";

const OurStore = () => {
  // show store side nav  in mobile view
  const [show, setShow] = useState(false);

  return (
    <section className="w-full h-full py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={() => setShow(true)}
          className="lg:hidden w-full items-center gap-1 flex justify-end mb-2"
        >
          <p className="text-base">Menu</p>
          <img src={menu} alt="menu" className="w-7" />
        </button>
        <div className="flex items-start gap-4">
          <FilterWrraper show={show} onSetShow={setShow} />
          <Products onSetShow={setShow} />
        </div>
      </div>
    </section>
  );
};

export default OurStore;
