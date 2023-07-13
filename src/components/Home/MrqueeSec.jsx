import Marquee from "react-fast-marquee";
import {
  apple_company,
  dell_company,
  hp_company,
  ibm_company,
  pes_company,
  sony_company,
} from "../../assets/companys";

const COMPANYS = [
  {
    img: apple_company,
  },
  {
    img: dell_company,
  },
  {
    img: hp_company,
  },
  {
    img: ibm_company,
  },
  {
    img: sony_company,
  },
  {
    img: pes_company,
  },
];

const MrqueeSec = () => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <Marquee className="flex items-center justify-between bg-white p-8">
          {COMPANYS.map(({ img }, idx) => {
            return (
              <div key={idx} className="mx-16 w-32">
                <img src={img} alt={img} className="w-[70px] object-cover" />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default MrqueeSec;
