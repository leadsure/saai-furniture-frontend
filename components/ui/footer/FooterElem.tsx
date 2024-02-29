"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface FooterElemProp {
  location?: string;
}

const listStyle = "text-[20px] font-[400]  capitalize cursor-pointer";

export const FooterElem: React.FC<FooterElemProp> = ({ location }) => {
  const navigate = useRouter();
  return (
    <ul className="flex flex-col gap-[10px] text-black">
      <li
        className={`${listStyle}`}
        onClick={() => {
          location ? navigate.push(`/${location}`) : navigate.push(`/`);
        }}
      >
        home
      </li>
      <li
        className={`${listStyle}`}
        onClick={() => {
          location
            ? navigate.push(`/${location}/about`)
            : navigate.push(`/about`);
        }}
      >
        company profile
      </li>
      <li
        onClick={() => {
          location
            ? navigate.push(`/${location}/sofa`)
            : navigate.push(`/sofa`);
        }}
        className={`${listStyle}`}
      >
        sofa set
      </li>
      <li
        className={`${listStyle}`}
        onClick={() => {
          location
            ? navigate.push(`/${location}/dining`)
            : navigate.push(`/dining`);
        }}
      >
        dining set
      </li>
      <li
        className={`${listStyle}`}
        onClick={() => {
          location
            ? navigate.push(`/${location}/blog`)
            : navigate.push(`/blog`);
        }}
      >
        blog
      </li>
      <li
        className={`${listStyle}`}
        onClick={() => {
          location
            ? navigate.push(`/${location}/contact`)
            : navigate.push(`/contact`);
        }}
      >
        contact us
      </li>
      <li
        className={`${listStyle}`}
        onClick={() => {
          navigate.push("/market-area");
        }}
      >
        Market Area
      </li>
    </ul>
  );
};
