"use client";
import { useGetCategory, useGetCategoryById } from "@/hooks";
import { CommonSlider, SofaCard } from "../../../ui";
import { SofaBanner } from "./Banner";
import { Intro } from "./Intro";
import { SofaCollection } from "../SofaCollection";

interface SofaProps {
  location?: string;
  title?: string;
}

const locationStyle = "font-bold capitalize";

export const SofaDynamicPage: React.FC<SofaProps> = ({ location, title }) => {
  const createdTitle = title?.split("-").join(" ").trim();

  const { categories } = useGetCategory();
  const { category } = useGetCategoryById({ title: createdTitle });
  return (
    <div className="w-screen min-h-screen flex flex-col  items-center">
      <SofaBanner title={category?.title} location={location} />
      <Intro location={location} />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-[10px]">
          <h1 className="text-[25px] mobile:text-[30px] font-bold  capitalize">
            {title}
          </h1>
          <div className="w-[100px] h-[3px] bg-[#B19777]"></div>
        </div>
        <div className="w-[90%] flex flex-wrap justify-center items-center gap-[40px] mt-[30px] mb-[50px]">
          {categories
            ?.filter(({ title }) => title.toLowerCase() !== "dining set")
            .map((data) => {
              const createdTitle = data.title.split(" ").join("-");
              return (
                <SofaCard
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
