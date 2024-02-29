import React from "react";

interface AboutCardProp {
  icon: React.ReactNode;
  title: string;
  info: string;
}

export const AboutCard: React.FC<AboutCardProp> = ({ icon, title, info }) => {
  return (
    <div className="w-[450px] h-[70px] flex items-center bg-[#eae9e9] box-content p-[10px] gap-[20px] rounded-md">
      <div className="flex text-[#B19777] text-[40px]">{icon}</div>
      <div className="flex flex-col justify-center gap-[5px]">
        <div className="text-[20px] font-[400]">{title}</div>
        <div>{info}</div>
      </div>
    </div>
  );
};
