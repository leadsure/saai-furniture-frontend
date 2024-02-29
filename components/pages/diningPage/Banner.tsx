import React from "react";

interface BannerProp {
  location?: string;
}

const locationStyle = "font-bold capitalize";

export const DiningBanner: React.FC<BannerProp> = ({ location }) => {
  return (
    <div
      className="relative w-screen h-[40vh] flex flex-col justify-center items-center bg-[#0000006e] bg-blend-multiply bg-cover bg-no-repeat bg-center gap-[10px]"
      style={{
        backgroundImage: "url('/sofa/banner-bg.jpeg')",
      }}
    >
      <h1 className="text-[35px] font-bold text-white box-content p-[6px] pl-[100px] pr-[100px] bg-[#00000085]">
        DINING SETS
        <span className={`${locationStyle}`}>
          {location && <span>In , {location}</span>}
        </span>
      </h1>
      <h3 className="text-[20px] font-bold text-white box-content p-[6px] pl-[100px] pr-[100px] bg-[#00000085]">
        From Leading Manufacturers{" "}
        <span className={`${locationStyle}`}>
          {location && <span>, {location}</span>}
        </span>{" "}
        Sai Furniture Art. The Factory Is Based In{" "}
        <span className={`${locationStyle}`}>
          {location && <span>, {location}</span>}
        </span>{" "}
        But Products Are Supplied All Over India.
      </h3>
    </div>
  );
};
