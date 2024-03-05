import React from "react";
import { Carousel } from "@/components";
import { FaMedal, FaShippingFast } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { InfoCard } from "./InfoCard";
import { Intro } from "./Intro";
import { SofaSec } from "./SofaSec";
import { AwardSec } from "./AwardSec";
import { BlogSec } from "./BlogSec";

interface HomePageProp {
  location?: string;
}

export const infoObj: Array<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = [
  {
    icon: <FaMedal className="rotate-180" />,
    title: "Superior Quality",
    description:
      "Our sofa sets boast impeccable craftsmanship for lasting comfort and style.",
  },
  {
    icon: <GrUserWorker />,
    title: "Well-versed Craftsmen",
    description:
      "Our skilled artisans bring expertise and passion to every sofa set that is created.",
  },
  {
    icon: <GiReceiveMoney />,
    title: "Cost-effective",
    description:
      "Experience luxury without breaking the bank with our sofa sets that offer great value.",
  },
  {
    icon: <FaShippingFast />,
    title: "Timely Delivery",
    description:
      "Rest assured, we deliver your dream sofa sets promptly, without compromising on quality.",
  },
];

export const HomePage: React.FC<HomePageProp> = ({ location }) => {
  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-between overflow-hidden">
      <Carousel />
      <div className="w-[80%] flex flex-col items-center pt-[50px] pb-[50px]">
        <div className="w-[100%] flex flex-wrap gap-[10px] mobile:gap-[40px] justify-center  items-center">
          {infoObj.map(({ icon, title, description }) => {
            return (
              <InfoCard
                key={title}
                icon={icon}
                title={title}
                description={description}
              />
            );
          })}
        </div>
        {/* intro */}
        <Intro location={location} />
        {/* sofa */}
        <div className="w-[100%] ">
          <SofaSec location={location} />
        </div>
        <div className="w-[100%] ">
          <AwardSec />
        </div>
        <div className="w-screen">
          <BlogSec />
        </div>
      </div>
    </div>
  );
};
