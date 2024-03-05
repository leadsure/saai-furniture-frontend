"use client";
import { useGetDesignByTitle, useGetDesigns } from "@/hooks";
import { CommonSlider, SofaCard } from "../../../ui";
import { SofaBanner } from "./Banner";
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
  const createdTitle1 = title?.split("-").join(" ");
  const createdTitle2 = title2?.split("-").join(" ").toString();

  const { design } = useGetDesignByTitle({
    title: createdTitle2,
  });
  const designsUrl = [
    design?.imageUrl,
    design?.imageUrl2,
    design?.imageUrl3,
    design?.imageUrl4,
  ];
  const { designs } = useGetDesigns({ categoryTitle: createdTitle1 });
  return (
    <div className="w-screen  flex flex-col  items-center">
      <SofaBanner title={design?.title} location={location} />

      <div className="w-screen  flex flex-col items-center">
        <div className="w-[85vw] flex flex-col items-center gap-[20px] mt-[50px]">
          <h1 className="text-[25px] font-bold capitalize">
            {design && design.title}
          </h1>
          <div className="w-screen flex flex-wrap justify-center gap-[50px]">
            {designsUrl.map((url, index) => {
              if (url && url !== "") {
                return (
                  <Image
                    src={url}
                    alt=""
                    width={400}
                    height={400}
                    className="w-[400px] h-[300px] shadowww"
                  />
                );
              }
            })}
            {design && design.imageUrl && (
              <Image
                src={design?.imageUrl}
                alt=""
                width={400}
                height={400}
                className="w-[400px] h-[300px] shadowww"
              />
            )}
          </div>
          <button className=" w-[130px] mobile:w-[150px] h-[40px] bg-[#2A1B18] text-[11px] font-bold text-white rounded-full">
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
        <div className="w-[90vw] flex flex-wrap justify-center items-center gap-[40px] mt-[30px] mb-[50px]">
          {designs?.map((data) => {
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
