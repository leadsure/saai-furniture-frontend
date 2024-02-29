"use client";
import { SofaCollection } from "../sofaPage";
import { CommonSlider, SofaCard } from "../../ui";
import { DiningBanner } from "./Banner";
import { Intro } from "./Intro";

interface SofaProps {
  location?: string;
}

const locationStyle = "font-bold capitalize";

export const DiningPage: React.FC<SofaProps> = ({ location }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col  items-center">
      <DiningBanner />
      <Intro />
      <div className="flex flex-col mt-[50px] gap-[20px]">
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <h2 className=" text-[30px] font-[500]">Dining Set Design</h2>
          <div className="w-[80px] h-[1px] bg-[#b19777ac]"></div>
        </div>
        <div className="flex max-mobile:flex-col gap-[30px]">
          <SofaCard
            imageUrl="/sofa/designer-sofa-set.jpeg"
            title="designer sofa set"
            onClickMore={() => {}}
            onClickQuote={() => {}}
          />
          <SofaCard
            imageUrl="/sofa/designer-sofa-set.jpeg"
            title="designer sofa set"
            onClickMore={() => {}}
            onClickQuote={() => {}}
          />
          <SofaCard
            imageUrl="/sofa/designer-sofa-set.jpeg"
            title="designer sofa set"
            onClickMore={() => {}}
            onClickQuote={() => {}}
          />
        </div>
      </div>
      <div className="flex flex-col mt-[50px] mb-[50px] gap-[20px]">
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <h2 className=" text-[30px] font-[500]">You may also like</h2>
          <div className="w-[80px] h-[1px] bg-[#b19777ac]"></div>
        </div>
        <div className="w-[] flex max-mobile:flex-col gap-[30px]">
          <CommonSlider location={location} />
        </div>
      </div>

      <SofaCollection location={location} />
    </div>
  );
};
