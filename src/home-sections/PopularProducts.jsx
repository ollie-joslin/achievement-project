import { products } from "../constants";
import { PopularProductCard } from "../components";
import { useState } from "react";
// import Swiper core and required modules
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

const PopularProducts = () => {
  const [setSwiper] = useState(null);
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Browse{" "}
          <span className="text-coral-red">
            {" "}
            Popular{" "}
          </span>{" "}
          Games
        </h2>
        <p className=":max-w-lg mt-2 font-montserrat text-slate-gray text-lg">
          See some of the most popular games right
          now. Our guides will show you how to get
          100% of all achievements.
        </p>
      </div>

      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 640px
          768: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          1024: {
            spaceBetween: 60,
            slidesPerView: 3,
          },
          1536: {
            spaceBetween: 60,
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiper}
        modules={[Autoplay]}
        className="mt-16 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14"
        //
      >
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <PopularProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularProducts;
