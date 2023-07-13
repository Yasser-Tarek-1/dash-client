import ProductCard from "../../../Layouts/ProductCard";
import SortNav from "./SortNav";
import { useState } from "react";
import Pagination from "./Pagination";

const PRODUCTS_ARRAY = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
let itemsPerPage = 8;

const Products = ({ onSetShow }) => {
  // How to display products
  const [productShow, setProductsShow] = useState("column");
  const rowHandler = (e) => {
    setProductsShow(e.target.getAttribute("data-id"));
  };

  if (productShow == "row") {
    itemsPerPage = 4;
  } else {
    itemsPerPage = 8;
  }

  // Pagination products
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = PRODUCTS_ARRAY.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(PRODUCTS_ARRAY.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % PRODUCTS_ARRAY.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="flex items-center gap-4 w-full flex-col">
      <SortNav
        productShow={productShow}
        onRowHandler={rowHandler}
        onSetShow={onSetShow}
      />
      <div className="flex items-start justify-center lg:justify-start mt-2 flex-wrap gap-4 rounded-lg w-full min-h-[820px]">
        {/* looping in pagination products */}
        {currentItems.map((_, idx) => {
          return <ProductCard key={idx} howDisplay={productShow} />;
        })}
      </div>
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};

export default Products;
