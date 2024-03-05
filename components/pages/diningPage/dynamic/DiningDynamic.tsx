"use client";
import { useGetCategory, useGetCategoryById, useGetDesigns } from "@/hooks";
import { CommonSlider, DiningCard, SofaCard } from "../../../ui";
import { SofaBanner } from "./Banner";
import { Intro } from "./Intro";
import { SofaCollection } from "../../sofaPage";

interface SofaProps {
  location?: string;
  title?: string;
}

export const DiningDynamicPage: React.FC<SofaProps> = ({ location, title }) => {
  const createdTitle = title?.split("-").join(" ").trim();

  const { designs } = useGetDesigns({ categoryTitle: createdTitle });
  const { category } = useGetCategoryById({ title: createdTitle });
  return (
    <div className="w-screen min-h-screen flex flex-col  items-center">
      <SofaBanner title={category?.title} location={location} />
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
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-[10px]">
          <h1 className="text-[25px] mobile:text-[30px] font-bold  capitalize">
            {title}
          </h1>
          <div className="w-[100px] h-[3px] bg-[#B19777]"></div>
        </div>
        <div className="w-[90vw] flex flex-wrap justify-center items-center gap-[40px] mt-[30px] mb-[50px]">
          {designs?.map((data) => {
            const createdTitle = data.title.split(" ").join("-");
            return (
              <DiningCard
                key={data.id}
                imageUrl={data.imageUrl}
                title={data.title}
                onClickMore={() => {}}
                onClickQuote={() => {}}
                location={location}
                link={`${title}/${createdTitle}`}
              />
            );
          })}
        </div>
      </div>
      <div className="flex max-mobile:flex-col max-mobile:items-center gap-[10px] mobile:gap-[30px]  mt-[50px] mb-[50px]">
        <CommonSlider location={location} />
      </div>
      <SofaCollection location={location} />
    </div>
  );
};
