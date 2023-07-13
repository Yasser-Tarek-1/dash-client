import {
  mainBanner1,
  mainBanner2,
  mainBannerMob1,
  mainBannerMob2,
} from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <section className="w-full">
      <div>
        <Swiper
          autoplay={{ delay: 1000, disableOnInteraction: false, speed: 5000 }}
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* for Big screens */}
            <div className="relative hidden md:block">
              <img src={mainBanner1} className="w-full object-cover  h-2/3" />
              <div className="absolute left-[50%] top-[50%] translate-x-[-50%]  translate-y-[-50%] text-white flex items-center flex-col gap-8">
                <h4 className="text-gray-300 text-xl">This month from $99</h4>
                <div className="text-8xl font-bold text-center">
                  Summer
                  <br />
                  Overcoat
                </div>
                <button className="border border-white  shadow-lg hover:bg-white hover:text-black transition-all">
                  <a href="#featured" className="block w-full py-3 px-9">
                    Shop Now
                  </a>
                </button>
              </div>
            </div>
            {/* for mobil */}
            <div className="relative block md:hidden">
              <img src={mainBannerMob1} className="w-full object-cover" />
              <div className="absolute left-[50%] top-[50%] translate-x-[-50%]  translate-y-[-50%] text-white flex items-center flex-col gap-4">
                <h4 className="text-gray-300 text-xl">This month from $99</h4>
                <div className="text-6xl font-bold text-center">
                  Summer
                  <br />
                  Overcoat
                </div>
                <button className="border border-white  shadow-lg hover:bg-white hover:text-black transition-all">
                  <a
                    href="#featured"
                    className="block w-full py-2 px-6 md:py-3 md:px-9"
                  >
                    Shop Now
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* for Big screens */}
            <div className="relative hidden md:block">
              <img src={mainBanner2} className="w-full object-cover  h-2/3" />
              <div className="absolute left-[50%] top-[50%] translate-x-[-50%]  translate-y-[-50%] text-white flex items-center flex-col gap-8">
                <h4 className="text-gray-300 text-xl">This month from $99</h4>
                <div className="text-8xl font-bold text-center">
                  Summer
                  <br />
                  Overcoat
                </div>
                <button className="border border-white  shadow-lg hover:bg-white hover:text-black transition-all">
                  <a href="#featured" className="block w-full py-3 px-9">
                    Shop Now
                  </a>
                </button>
              </div>
            </div>
            {/* for mobil */}
            <div className="relative block md:hidden">
              <img src={mainBannerMob2} className="w-full object-cover" />
              <div className="absolute left-[50%] top-[50%] translate-x-[-50%]  translate-y-[-50%] text-white flex items-center flex-col gap-4">
                <h4 className="text-gray-300 text-xl">This month from $99</h4>
                <div className="text-6xl font-bold text-center">
                  Summer
                  <br />
                  Overcoat
                </div>
                <button className="border border-white  shadow-lg hover:bg-white hover:text-black transition-all">
                  <a
                    href="#featured"
                    className="block w-full py-2 px-6 md:py-3 md:px-9"
                  >
                    Shop Now
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Main;
