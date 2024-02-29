"use client";
import { useGetCategory } from "@/hooks";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface SofaDropdown {
  location?: string;
}

export const SofaSetDropDown: React.FC<SofaDropdown> = ({ location }) => {
  const navigate = useRouter();

  const [open, setOpen] = useState(false);
  const sofaDropDown = useRef<HTMLDivElement | null>(null);
  const { categories } = useGetCategory();

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      <div
        className="flex items-center gap-[10px] font-[600] text-[20px] cursor-pointer  "
        onClick={() => {
          if (location) {
            return navigate.push(`/${location}/sofa`);
          }
          navigate.push("/sofa");
        }}
      >
        <span>sofa set</span>
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div
        ref={sofaDropDown}
        className={`absolute top-[30px] w-[200px]  bg-[rgba(0,0,0,0.6)]  rounded-xl capitalize overflow-scroll transition-all duration-300 ease-out text-white ${
          open ? "" : "scale-y-0"
        } origin-top  translate-x-[-20%] box-content p-[10px]`}
      >
        <ul>
          {categories
            ?.filter(({ title }) => title.toLowerCase() !== "dining set")
            .map(({ id, title }) => {
              const link = title.toLowerCase().split(" ").join("-");
              if (location) {
                return (
                  <li
                    key={id}
                    className="hover:bg-[rgba(0,0,0,0.6)] text-[18px] box-content p-[5px] pl-[10px] pr-[10px] rounded-md cursor-pointer"
                    onClick={() => {
                      navigate.push(`/${location}/sofa/${link}`);
                    }}
                  >
                    {title}
                  </li>
                );
              }
              return (
                <li
                  key={id}
                  className="hover:bg-[rgba(0,0,0,0.6)] text-[18px] box-content p-[5px] pl-[10px] pr-[10px] rounded-md text-white cursor-pointer"
                  onClick={() => {
                    navigate.push(`/sofa/${link}`);
                  }}
                >
                  {title}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
