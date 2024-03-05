"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useGetCategory } from "@/hooks";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SofaCard } from "../SofaCard";
import { SliderSofaCard } from "./SofaSliderCard";

interface CommonSlider {
  location?: string;
}

export const CommonSlider: React.FC<CommonSlider> = ({ location }) => {
  const { categories } = useGetCategory();

  return (
    <div className="flex flex-col items-center gap-[20px]">
      <div className="flex flex-col items-center gap-[10px]">
        <h1 className="text-[25px] mobile:text-[30px] font-bold  capitalize">
          you may also like
        </h1>
        <div className="w-[100px] h-[3px] bg-[#B19777]"></div>
      </div>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        loop
        modules={[Pagination, Autoplay]}
        className="mySwiper w-[80vw] h-[500px]"
      >
        {categories?.map(({ id, imageUrl, title, description }) => {
          const createdTitle = title.split(" ").join("-");
          return (
            <SwiperSlide key={id}>
              <SliderSofaCard
                location={location}
                link={createdTitle}
                imageUrl={imageUrl}
                title={title}
                onClickQuote={() => {}}
                onClickMore={() => {}}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
