import React from "react";

interface DesignSofaSec {
  location?: string;
}

export const DesignerSofaSec: React.FC<DesignSofaSec> = ({ location }) => {
  const currentLocation = location?.split("-").join(" ");
  return (
    <div className="flex flex-col p-[20px]">
      <div className="w-[100%] mobile:w-[70%] flex flex-col mobile:gap-[20px]">
        <div className="flex flex-col gap-[5px]">
          <h1 className="max-mobile:text-center text-[30px] mobile:text-[37px] font-bold text-[#B19777] capitalize">
            designer sofa
          </h1>
          <p className="text-[18px] mobile:text-[25px] capitalize">
            Leading Designer Sofa Manufacturers
            {location ? (
              <span className="font-bold ml-[5px] mr-[5px] capitalize">
                {currentLocation}
              </span>
            ) : (
              <span className="font-bold  ml-[5px] mr-[5px]">India</span>
            )}
          </p>
        </div>
        <p className="text-[16px] mobile:text-[20px]">
          Sai Furniture Art offers unique variety of sofas that is available in
          different styles and sizes as per customer requirements. We are a
          popular designer sofa set manufacturers and suppliers from
          {location ? (
            <span className="font-bold ml-[5px] mr-[5px] capi">
              {currentLocation}
            </span>
          ) : (
            <span className="font-bold ml-[5px] mr-[5px]">India</span>
          )}
          , India. The requirement for our sofa set has grown to a large degree
          over the years due to its excellent finish, satisfaction and
          affordable price. Following the latest styles our sofas add appeal and
          beauty to your home
        </p>
      </div>
      <div className="mobile:relative flex max-mobile:flex-col justify-end items-center mt-[40px] gap-[20px] text-white">
        <div className="mobile:absolute top-[50%] left-[0] w-[100%] h-[300px] mobile:w-[500px] mobile:h-[300px] bg-[#2A1B18] mobile:translate-y-[-50%]">
          <div className="flex w-[100%] h-[50%] ">
            <div className="flex flex-col justify-center items-center w-[50%] border border-[#544744]">
              <h1 className="text-[#B19777] text-[35px] font-bold">100+</h1>
              <div className="font-[500]">Dealers Across India Served</div>
            </div>
            <div className="flex flex-col justify-center items-center w-[50%] border border-[#544744]">
              <h1 className="text-[#B19777] text-[35px] font-bold">5000+</h1>
              <div className="font-[500]">Wholesale Orders</div>
            </div>
          </div>
          <div className="flex w-[100%] h-[50%]">
            <div className="flex flex-col justify-center items-center w-[50%] border border-[#544744]">
              <h1 className="text-[#B19777] text-[35px] font-bold">400+</h1>
              <div className="font-[500]">Exclusive Designs</div>
            </div>
            <div className="flex flex-col justify-center items-center w-[50%] border border-[#544744]">
              <h1 className="text-[#B19777] text-[35px] font-bold">20+</h1>
              <div className="font-[500]">Years of Experience</div>
            </div>
          </div>
        </div>
        <div
          className="w-[100%] mobile:w-[70vw] h-[300px] mobile:h-[500px]"
          style={{
            backgroundImage: "url('/map.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
};
