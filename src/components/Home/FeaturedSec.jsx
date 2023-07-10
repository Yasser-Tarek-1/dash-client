import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import ProductCard from "./ProductCard";

const FEATURED = [
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

const Featured = () => {
  return (
    <section className="w-full h-full py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold">Featured Collection</h3>
        <div className="my-12">
          <Swiper
            navigation={true}
            spaceBetween={150}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
              1563: {
                slidesPerView: 6,
              },
            }}
            modules={[Navigation]}
            className="mySwiper customSwiper"
          >
            {FEATURED.map((col, idx) => {
              return (
                <SwiperSlide key={idx} virtualIndex={idx}>
                  <ProductCard />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Featured;
