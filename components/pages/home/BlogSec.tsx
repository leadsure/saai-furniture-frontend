"use client";
import React from "react";
import { blogObj, BlogCard } from "../blogPage";

export const BlogSec = () => {
  return (
    <div className="w-screen flex flex-col items-center  gap-[40px] mb-[150px] max-mobile:pl-[20px] pr-[20px] mt-[50px] mobile:mt-[100px]  box-content pb-[100px]">
      <div className="w-[100%] flex flex-col justify-between items-center gap-[15px]">
        <h1 className="flex text-[26px] mobile:text-[35px] font-[500] text-[#2a1b18f1] ">
          Latest Blogs
        </h1>
        <div className="w-[100px] h-[2px] bg-[#2a1b18f1]"></div>
      </div>
      <div className="flex flex-wrap justify-center  gap-[100px] mobile:gap-[30px]">
        {blogObj.map(({ imageUrl, title }, index) => {
          return <BlogCard key={index} imageUrl={imageUrl} title={title} />;
        })}
      </div>
    </div>
  );
};
