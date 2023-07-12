import BreadCrumb from "../components/Layout/BreadCrumb";
import Meta from "../components/Layout/Meta";
import Wrapper from "../components/OurStore/Wrapper";

const OurStore = () => {
  return (
    <>
      <Meta title={`Our Store`} />
      <BreadCrumb path="Our Store" />
      <div className="w-full h-full bg-[#f5f5f7] mt-4">
        <Wrapper />
      </div>
    </>
  );
};

export default OurStore;
