"use client";
import { SofaCollection } from "../sofaPage";
import { CommonSlider, SofaCard } from "../../ui";
import { DiningBanner } from "./Banner";
import { Intro } from "./Intro";
import { useGetCategoryById, useGetDiningDesigns } from "@/hooks";

interface SofaProps {
  location?: string;
}

const locationStyle = "font-bold capitalize";

export const DiningPage: React.FC<SofaProps> = ({ location }) => {
  const { designs } = useGetDiningDesigns();
  const { category } = useGetCategoryById({ title: "dining set" });
  return (
    <div className="w-screen min-h-screen flex flex-col  items-center">
      <DiningBanner />
      <Intro
        location={location}
        paras={[
          { title: category?.title1, para: category?.para1 },
          { title: category?.title2, para: category?.para2 },
          { title: category?.title3, para: category?.para3 },
          { title: category?.title4, para: category?.para4 },
        ]}
        imageUrl={category?.imageUrl}
      />
      <div className="flex flex-col mt-[50px] gap-[20px]">
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <h2 className=" text-[30px] font-[500]">Dining Set Design</h2>
          <div className="w-[80px] h-[1px] bg-[#b19777ac]"></div>
        </div>
        <div className="flex max-mobile:flex-col gap-[30px]">
          {designs?.map(({ id, title, imageUrl }) => {
            const link = title.split(" ").join("-");
            return (
              <SofaCard
                link={`/dining/${link}`}
                key={id}
                title={title}
                imageUrl={imageUrl}
                onClickMore={() => {}}
                onClickQuote={() => {}}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col mt-[50px] mb-[50px] gap-[20px]">
        <div className="w-[] flex max-mobile:flex-col gap-[30px]">
          <CommonSlider location={location} />
        </div>
      </div>

      <SofaCollection location={location} />
    </div>
  );
};
