"use client";
import React from "react";
// import { SofaSetDropDown } from "./SofaSetDropDown";
import { useRouter } from "next/navigation";
import { SofaSetDropDown } from "./SofaSetDropDown";

export const navObj: Array<{
  title?: string;
  Component?: React.FC;
  link?: string;
}> = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "company profile",
    link: "/about",
  },
  {},
  {
    title: "dining set",
    link: "/dining",
  },
  {
    title: "blog",
    link: "/blog",
  },

  {
    title: "contact us",
    link: "/contact",
  },
];

interface NavElemProp {
  location?: string;
}

export const NavElem: React.FC<NavElemProp> = ({ location }) => {
  const navigate = useRouter();

  return (
    <ul className="flex justify-between items-center gap-[30px]">
      <li
        className="text-[20px] font-[600]  capitalize cursor-pointer"
        onClick={() => {
          location ? navigate.push(`/${location}`) : navigate.push(`/`);
        }}
      >
        home
      </li>
      <li
        className="text-[20px] font-[600]  capitalize cursor-pointer"
        onClick={() => {
          location
            ? navigate.push(`/${location}/about`)
            : navigate.push(`/about`);
        }}
      >
        company profile
      </li>
      <li className="text-[20px] font-[600]  capitalize cursor-pointer">
        <SofaSetDropDown location={location} />
      </li>
      <li
        className="text-[20px] font-[600]  capitalize cursor-pointer"
        onClick={() => {
          location
            ? navigate.push(`/${location}/dining`)
            : navigate.push(`/dining`);
        }}
      >
        dining set
      </li>
      <li
        className="text-[20px] font-[600]  capitalize cursor-pointer"
        onClick={() => {
          location
            ? navigate.push(`/${location}/blog`)
            : navigate.push(`/blog`);
        }}
      >
        blog
      </li>
      <li
        className="text-[20px] font-[600]  capitalize cursor-pointer"
        onClick={() => {
          location
            ? navigate.push(`/${location}/contact`)
            : navigate.push(`/contact`);
        }}
      >
        contact us
      </li>
    </ul>
  );
};
