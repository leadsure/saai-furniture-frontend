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
  const [mounted, setMounted] = useState(false);
  const { categories } = useGetCategory();

  useEffect(() => {
    if (categories) {
      setMounted(true);
    }
  }, [categories]);
  if (!mounted) return <div></div>;

  return (
    <div className="w-screen h-fit flex justify-center items-center">
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
        {categories
          ?.filter(({ title }) => title.toLowerCase() !== "dining set")
          .map(({ id, imageUrl, title, description }) => {
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
