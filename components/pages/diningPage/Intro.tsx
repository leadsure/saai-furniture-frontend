import React from "react";
import Image from "next/image";

interface IntroProp {
  location?: string;
  paras?: Array<{ title?: string; para?: string }>;
  imageUrl?: string;
}
const h2Style = "text-[20px] font-[500]";
const locationStyle = "font-bold capitalize";

export const Intro: React.FC<IntroProp> = ({ location, imageUrl, paras }) => {
  const newLocation = location?.split("-").join(" ");
  return (
    <div className="mobile:w-[80%] flex  justify-center mt-[50px] text-[18px] max-mobile:p-[20px]">
      <div className="flex justify-center max-mobile:flex-col-reverse gap-[50px]">
        <div className="mobile:w-[60%] flex flex-col gap-[10px]">
          {paras?.map(({ title, para }, index) => {
            return (
              <div className=" flex flex-col flex-wrap gap-[5px]" key={index}>
                <h1 className="text-[20px] font-bold flex flex-wrap">
                  {title?.split(" ").map((word) => {
                    if (
                      word == "india" ||
                      word == "India" ||
                      word == "india," ||
                      word == "India," ||
                      word == ",india" ||
                      word == ",India" ||
                      word == "india." ||
                      word == "India." ||
                      word == ".india" ||
                      word == ".India"
                    ) {
                      if (location) {
                        return (
                          <span className={`${locationStyle}`}>
                            {newLocation}
                          </span>
                        );
                      }

                      return <span className={`${locationStyle}`}>{word}</span>;
                    }
                    return <span className={`mr-[5px] ml-[5px]`}>{word}</span>;
                  })}
                </h1>
                <p className="flex flex-wrap">
                  {para?.split(" ").map((word) => {
                    if (
                      word == "india" ||
                      word == "India" ||
                      word == "india," ||
                      word == "India," ||
                      word == ",india" ||
                      word == ",India" ||
                      word == "india." ||
                      word == "India." ||
                      word == ".india" ||
                      word == ".India"
                    ) {
                      if (location) {
                        return (
                          <span className={`${locationStyle}`}>
                            {newLocation}
                          </span>
                        );
                      }

                      return <span className={`${locationStyle}`}>{word}</span>;
                    }
                    return <span className={`mr-[3px] ml-[3px]`}>{word}</span>;
                  })}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-[450px] flex flex-col justify-center items-center gap-[10px]">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="sofa"
              width={600}
              height={400}
              className="w-[450px] h-[450px] rounded-lg shadowww"
            />
          )}
        </div>
      </div>
    </div>
  );
};
