import CompareCard from "../components/CompareProduct/CompareCard";
import BreadCrumb from "../Layouts/BreadCrumb";
import Meta from "../Layouts/Meta";

const COMPARE = [{}, {}, {}, {}];

const CompareProduct = () => {
  return (
    <>
      <Meta title={`Compare Products`} />
      <BreadCrumb path={"Compare Products"} />
      <section className="w-full h-full mt-4 py-8 bg-[#f5f5f7]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            {COMPARE.map((product, idx) => {
              return <CompareCard key={idx} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompareProduct;
