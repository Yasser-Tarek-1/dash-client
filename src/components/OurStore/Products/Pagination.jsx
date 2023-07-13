import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <div id="container" className="w-full bg-white rounded-lg py-4 px-6">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
