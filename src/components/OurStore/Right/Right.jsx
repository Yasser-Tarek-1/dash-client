import ProductCard2 from "../../General/ProductCard2";
import ProductCard from "../../General/ProductCard";
import SortNav from "./SortNav";
import { useState } from "react";
import Pagination from "./Pagination";

const PRODUCTS_ARRAY = [{}, {}, {}, {}, {}, {}];

const Right = ({ onSetShow }) => {
  const [productShow, setProductsShow] = useState("row2");

  const rowHandler = (e) => {
    setProductsShow(e.target.getAttribute("data-id"));
  };

  return (
    <div className="flex items-center gap-4 w-full flex-col">
      <SortNav
        productShow={productShow}
        onRowHandler={rowHandler}
        onSetShow={onSetShow}
      />
      <div className="flex items-center justify-center lg:justify-start mt-2 flex-wrap gap-4 rounded-lg w-full">
        {PRODUCTS_ARRAY.map((_, idx) => {
          return productShow === "row2" ? (
            <ProductCard key={idx} />
          ) : (
            <ProductCard2 key={idx} />
          );
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default Right;
