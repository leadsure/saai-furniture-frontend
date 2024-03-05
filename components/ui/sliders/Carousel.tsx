"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

const images = [
  "/carousel/one.png",
  "/carousel/two.png",
  "/carousel/three.png",
  "/carousel/four.png",
  "/carousel/five.png",
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      pagination={{
        clickable: true,
      }}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Pagination, Autoplay]}
      className="mySwiper w-screen h-screen"
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              key={index}
              src={image}
              alt="sofa-image"
              width={800}
              height={800}
              quality={40}
              className="w-screen h-screen"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
