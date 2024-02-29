"use client";
import { useGetCategory, useGetCategoryById } from "@/hooks";
import { CommonSlider, SofaCard } from "../../../ui";
import { SofaBanner } from "./Banner";
import { Intro } from "./Intro";
import { SofaCollection } from "../SofaCollection";
import Image from "next/image";

interface SofaProps {
  location?: string;
  title?: string;
  title2?: string;
}

const locationStyle = "font-bold capitalize";

export const SofaDynamicPage2: React.FC<SofaProps> = ({
  location,
  title,
  title2,
}) => {
  const createdTitle2 = title2?.split("-").join(" ").toString();

  const { category } = useGetCategoryById({
    title: createdTitle2,
  });
  const { categories } = useGetCategory();
  return (
    <div className="w-screen min-h-screen flex flex-col  items-center">
      <SofaBanner title={category?.title} location={location} />

      <div className="relative w-screen h-[70vh] flex flex-col items-center">
        <div
          className="relative w-[600px] h-[600px] flex justify-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('${category?.imageUrl}')`,
          }}
        >
          <h1 className="absolute top-[60px] text-[25px] font-[500]">
            {category && category.title}
          </h1>
          <button className="absolute bottom-0 w-[130px] mobile:w-[150px] h-[40px] bg-[#2A1B18] text-[11px] font-bold text-white rounded-full">
            GET BEST QUOTE
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-[10px]">
          <h1 className="text-[25px] mobile:text-[30px] font-bold  capitalize">
            {title?.split("-").join(" ")}
          </h1>
          <div className="w-[100px] h-[3px] bg-[#B19777]"></div>
        </div>
        <div className="w-[90%] flex flex-wrap justify-center items-center gap-[40px] mt-[30px] mb-[50px]">
          {categories?.map((data) => {
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
