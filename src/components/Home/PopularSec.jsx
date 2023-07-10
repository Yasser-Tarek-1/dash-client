import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { headphone, ps4, speaker } from "../../assets";

import ProductCard from "./ProductCard";

const POPULAR = [
  { id: "1" },
  { id: "1" },
  { id: "1" },
  { id: "1" },
  { id: "1" },
  { id: "1" },
  { id: "1" },
  { id: "1" },
  { id: "1" },
  { id: "1" },
];

const Popular = () => {
  return (
    <section className="w-full h-full py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold">Our Popular Products</h3>

        <div className="my-12 flex items-center gap-4">
          <div
            className="hidden
           sm:flex h-96 w-[250px] bg-white rounded-lg shadow-lg px-4 py-8 2x relative group flex-col gap-6"
          >
            <button className="flex items-center gap-6">
              <img src={headphone} className="w-14 block" alt="watch" />
              <p className="text-base font-[500] text-gray-600">Headphones</p>
            </button>
            <button className="flex items-center gap-6">
              <img src={ps4} className="w-14 block" alt="ps4" />
              <p className="text-base font-[500] underline">PS4</p>
            </button>
            <button className="flex items-center gap-6">
              <img src={speaker} className="w-14 block" alt="speaker" />
              <p className="text-base font-[500] text-gray-600">Speakers</p>
            </button>
          </div>
          <div className="w-full sm:w-[calc(100%-250px)]">
            <Swiper
              navigation={true}
              spaceBetween={150}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
                1563: {
                  slidesPerView: 5,
                },
              }}
              modules={[Navigation]}
              className="mySwiper customSwiper"
            >
              {POPULAR.map((col, idx) => {
                return (
                  <SwiperSlide key={idx} virtualIndex={idx}>
                    <ProductCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
