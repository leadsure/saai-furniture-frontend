import Image from "next/image";
import React from "react";

interface HomeSofaCardProp {
  imageUrl: string;
  title: string;
  description: string;
}

export const HomeSofaCardTwo: React.FC<HomeSofaCardProp> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="relative w-[350px] mobile:w-[400px] h-[400px]   cursor-pointer home-best-sofa overflow-hidden shadowww rounded-lg">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={400}
        className="w-[100%] h-[100%]"
      />
      <div className=" absolute top-0 left-[-100%] w-[100%] h-[100%] flex flex-col justify-center items-center gap-[15px]  bg-[#3f312eac] home-best-sofa-layover transition-all duration-500 text-white">
        <div className="text-[25px] text-[#B19777]  font-bold uppercase ">
          {title}
        </div>
        <div className="text-[13px] p-[5px]">{description}</div>
      </div>
      <div className="absolute bottom-0 left-0  w-[100%] h-[50px] flex justify-center items-center text-white  bg-[#3f312eac] home-best-sofa-footer transition-all duration-500 uppercase text-white">
        {title}
      </div>
    </div>
  );
};
