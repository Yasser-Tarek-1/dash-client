import ProductCard from "../Layouts/ProductCard";
import BreadCrumb from "../Layouts/BreadCrumb";
import Meta from "../Layouts/Meta";

const Favorite = () => {
  return (
    <>
      <Meta title={`Favorite`} />
      <BreadCrumb path={"Favorite Products"} />
      <section className="w-full h-full mt-4 py-8 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <ProductCard howShow="favorite" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Favorite;
