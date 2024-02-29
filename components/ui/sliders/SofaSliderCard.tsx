"use client";

import { useRouter } from "next/navigation";

interface SofaCardProp {
  imageUrl: string;
  title: string;
  onClickQuote: () => void;
  onClickMore: () => void;
  link: string;
  location?: string;
}

export const SliderSofaCard: React.FC<SofaCardProp> = ({
  imageUrl,
  title,
  onClickQuote,
  onClickMore,
  link,
  location,
}) => {
  const navigate = useRouter();
  return (
    <div className="w-[300px] mobile:w-[400px] flex flex-col  items-center bg-white border border-gray-400 shadowww rounded-lg  p-[10px] cursor-pointer">
      <div
        onClick={() => {
          if (location) {
            return navigate.push(`/${location}/sofa/${link}`);
          }
          navigate.push(`/sofa/${link}`);
        }}
      >
        <img src={imageUrl} alt="sofa-img" className="w-[300px] h-[300px]" />
      </div>

      <div className="w-[100%] flex flex-col justify-center gap-[20px]">
        <div className="w-[95%] h-[1px] bg-[#2e2e2e7b]"></div>
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <h3 className="text-center text-[20px] font-bold capitalize">
            {title}
          </h3>
          <div className="flex items-center gap-[20px]">
            <button
              onClick={onClickQuote}
              className="w-[130px] mobile:w-[150px] h-[40px] bg-[#2A1B18] text-[11px] font-bold text-white rounded-full"
            >
              GET BEST QUOTE
            </button>

            <button
              onClick={onClickMore}
              className="w-[130px] h-[40px] bg-[#2A1B18] text-[11px] font-bold text-white rounded-full"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
