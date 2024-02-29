import React from "react";
interface InfoCardProp {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const InfoCard: React.FC<InfoCardProp> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="w-[130px] h-[130px] mobile:w-[250px] mobile:h-[250px] flex flex-col justify-center items-center rounded-md bg-[#EEEEEE] gap-[10px] p-[20px] cursor-pointer shadowww hover:scale-[1.1] transition-all duration-500 box-content">
      <div className="text-[25px] mobile:text-[60px] text-[#B19777] ">
        {icon}
      </div>
      <h2 className="text-center text-[12px] mobile:text-[18px] font-bold">
        {title}
      </h2>
      <div className="text-center text-[12px] mobile:text-[14px]">
        {description}
      </div>
    </div>
  );
};
