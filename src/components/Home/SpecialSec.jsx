import SpecialCard from "./SpecialCard";

const SpecialSec = () => {
  return (
    <div className="w-full h-full py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold">Special Products</h3>
        <div className="my-12 grid-system">
          <SpecialCard />
          <SpecialCard />
          <SpecialCard />
          <SpecialCard />
          <SpecialCard />
          <SpecialCard />
          <SpecialCard />
        </div>
      </div>
    </div>
  );
};

export default SpecialSec;
