import Marquee from "react-fast-marquee";
import { dell, ibm, boeing, cisco, bbc, iti } from "../../assets";

const MrqueeSec = () => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <Marquee className="flex items-center justify-between bg-white p-8">
          <div className="mx-16 w-32">
            <img src={dell} alt="brand" className="w-32" />
          </div>
          <div className="mx-16 w-32">
            <img src={ibm} alt="brand" className="w-32" />
          </div>
          <div className="mx-16 w-32">
            <img src={boeing} alt="brand" className="w-32" />
          </div>
          <div className="mx-16 w-32">
            <img src={cisco} alt="brand" className="w-32" />
          </div>
          <div className="mx-16 w-32">
            <img src={bbc} alt="brand" className="w-32" />
          </div>
          <div className="mx-16 w-32">
            <img src={iti} alt="brand" className="w-32" />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default MrqueeSec;
