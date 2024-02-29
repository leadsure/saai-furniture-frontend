"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import { useGetCategory } from "@/hooks";
import Image from "next/image";

export function HomeSlider() {
  const { categories } = useGetCategory();

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          700: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        loop
        modules={[Autoplay]}
        className="mySwiper w-[97vw] mobile:w-[85vw] h-[700px] flex flex-col justify-center items-center  box-border"
      >
        {categories
          ?.filter(({ title }) => title.toLowerCase() !== "dining set")
          .map(({ id, imageUrl, title, description }) => {
            return (
              <SwiperSlide key={id}>
                <div className="w-[90%] h-[90%] flex flex-col justify-center items-center  rounded-lg  cursor-pointer bg-white border border-[#b2b0b0b3] gap-[20px] shadowww">
                  <div className="w-[100%] h-[300px] flex justify-center items-center ">
                    <Image
                      src={imageUrl}
                      alt={title}
                      width={400}
                      height={300}
                      className="w-[90%] h-[300px]"
                    />
                  </div>

                  <div className="w-[100%] flex flex-col justify-center items-center pl-[10px] pr-[10px] gap-[10px]">
                    <h3 className="text-[20px] font-[500] capitalize">
                      {title}
                    </h3>
                    <p className="text-[13px]">{description}</p>
                    <button className="w-[150px] h-[40px] bg-black text-white flex justify-center items-center rounded-full">
                      Read More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
