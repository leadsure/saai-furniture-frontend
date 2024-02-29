import { useGetCategory } from "@/hooks";
import { useRouter } from "next/navigation";
import React from "react";

interface SofaCollectionProp {
  location?: string;
}

export const SofaCollection: React.FC<SofaCollectionProp> = ({ location }) => {
  const navigate = useRouter();
  const { categories } = useGetCategory();

  return (
    <div className="w-screen min-h-[30vh]  bg-[#EEEEEE] flex flex-col items-center gap-[20px] p-[20px]">
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-center text-[22px] mobile:text-[30px] font-[500]"></h2>
        <div className="w-[200px] h-[1px] bg-[#b19777ac]"></div>
      </div>
      <div className="flex flex-wrap ga-[20px]">
        <div className="mobile:w-[70%] flex  flex-wrap justify-center gap-[5px]">
          {categories?.map(({ id, title }) => {
            const link = title.toLowerCase().split(" ").join("-");
            if (location) {
              return (
                <button
                  key={id}
                  onClick={({}) => {
                    navigate.push(`${location}/sofa/${link}`);
                  }}
                  className="min-w-[150px] h-[50px]  text-[#731907] border border-[#731907] rounded-full"
                >
                  {title}
                </button>
              );
            }
            return (
              <button
                key={id}
                onClick={() => {
                  navigate.push(`/sofa/${link}`);
                }}
                className="min-w-[150px] h-[50px]  text-[#731907] border border-[#731907] rounded-full"
              >
                {title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
