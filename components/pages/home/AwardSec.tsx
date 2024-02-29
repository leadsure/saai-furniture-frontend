import React from "react";
import { VideoCard } from "./VideoCard";

export const AwardSec = () => {
  return (
    <div className="w-[100%] flex flex-col items-center mt-[50px] mobile:mt-[100px] gap-[40px] max-mobile:p-[20px]">
      <div className="w-[100%] flex flex-col justify-between items-center gap-[15px]">
        <h1 className="flex text-[25px] moble:text-[35px] font-[500] text-[#2a1b18f1] text-center ">
          Winner of Global Excellance Awards
        </h1>
        <div className="w-[100px] h-[2px] bg-[#2a1b18f1]"></div>
      </div>
      <div className="flex max-mobile:flex-col max-mobile:items-center gap-[20px]">
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};
