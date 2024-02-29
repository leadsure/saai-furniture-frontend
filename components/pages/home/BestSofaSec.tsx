"use client";
import React from "react";
import { HomeSofaCardTwo } from "./HomeSofaCardTwo";
import { useGetCategory } from "@/hooks";

export const BestSofaSec: React.FC<{ location?: string }> = ({ location }) => {
  const { categories } = useGetCategory();

  const currentLocation = location?.split("-").join(" ");

  return (
    <div className="flex flex-col gap-[20px] max-mobile:p-[20]">
      <div className="w-[100%] flex flex-col justify-between items-center gap-[15px]">
        <h1 className="flex text-[26px] mobile:text-[35px] font-[500] text-[#2a1b18f1] gap-[10px] ">
          <span>Popular Sofa Sets{"  "}</span>
          <span className="font-bold"> {` ${currentLocation}`}</span>
        </h1>
        <div className="w-[100px] h-[2px] bg-[#2a1b18f1]"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-[50px]">
        {categories?.map(({ id, imageUrl, title, description }) => {
          return (
            <HomeSofaCardTwo
              key={id}
              imageUrl={imageUrl}
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
};
