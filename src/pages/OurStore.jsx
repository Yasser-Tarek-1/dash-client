import BreadCrumb from "../Layouts/BreadCrumb";
import Meta from "../Layouts/Meta";
import Store from "../components/OurStore/OurStore";

const OurStore = () => {
  return (
    <>
      <Meta title={`Our Store`} />
      <BreadCrumb path="Our Store" />
      <div className="w-full h-full bg-[#f5f5f7] mt-4">
        <Store />
      </div>
    </>
  );
};

export default OurStore;
