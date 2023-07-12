import ProductCard from "../components/General/ProductCard";
import BreadCrumb from "../components/Layout/BreadCrumb";
import Meta from "../components/Layout/Meta";

const Favorite = () => {
  return (
    <>
      <Meta title={`Favorite`} />
      <BreadCrumb path={"Favorite Products"} />
      <section className="w-full h-full mt-4 py-8 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <ProductCard /> <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Favorite;
