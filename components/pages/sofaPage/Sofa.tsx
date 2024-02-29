"use client";
import { CommonSlider } from "../../ui";
import { SofaBanner } from "./Banner";
import { Intro } from "./Intro";
import { SofaCollection } from "./SofaCollection";

interface SofaProps {
  location?: string;
}

const locationStyle = "font-bold capitalize";

export const SofaPage: React.FC<SofaProps> = ({ location }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col  items-center">
      <SofaBanner location={location} />
      <Intro location={location} />
      <div className="flex max-mobile:flex-col max-mobile:items-center gap-[10px] mobile:gap-[30px]  mt-[50px] mb-[50px]">
        <CommonSlider location={location} />
      </div>
      <SofaCollection />
    </div>
  );
};
