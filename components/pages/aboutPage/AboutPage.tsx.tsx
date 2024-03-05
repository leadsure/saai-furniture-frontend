import React from "react";
import { AboutCard } from "./AboutCard";
import { DesignerSofaSec } from "../home";
import { FaGlobeAfrica } from "react-icons/fa";

export const aboutObj: Array<{
  icon: React.ReactNode;
  title: string;
  info: string;
}> = [
  {
    icon: <FaGlobeAfrica />,
    title: "Nature of Business",
    info: "Manufacturer, Supplier, Wholesale",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Year of Establishment",
    info: "2004",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Total Number of Employees",
    info: "51 to 100 People",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Legal Status of Firm",
    info: "Partnership Firm",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Annual Turnover",
    info: "Rs. 5 - 10 Crore",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "GST Number",
    info: "07ABUFS1403L1ZU",
  },
];

interface AboutPageProp {
  location?: string;
}

export const AboutPage: React.FC<AboutPageProp> = ({ location }) => {
  const currentLocation = location?.split("-").join(" ");
  return (
    <div className=" w-screen flex flex-col  items-center  ">
      <div className="relative w-screen">
        <div
          className="absolute flex justify-center items-center top-0 w-screen h-[350px] bg-cover bg-no-repeat bg-bottom bg-[rgba(0,0,0,0.4)] bg-blend-multiply"
          style={{
            backgroundImage:
              "url('https://www.saifurnitureart.com/designer/images/about-banner.jpg')",
          }}
        >
          <h1 className="text-[30px] text-white font-[600] box-content p-[5px] pr-[20px] pl-[20px] bg-[rgba(0,0,0,0.4)] capitalize">
            About Sai Furniture Art {location?.split("-").join(" ")}
          </h1>
        </div>
      </div>
      <div className="w-[85vw] flex flex-col  mt-[400px]">
        <div className="w-[100%] flex flex-col items-center  gap-[20px] ">
          <div className="flex flex-col items-center gap-[10px]">
            <h1 className="text-[26px] text-center mobile:text-[37px] font-bold text-[#B19777] capitalize flex items-center gap-[10px]">
              Top 5 Best Royal Furniture Manufacturers in
              {location ? (
                <span className="text-bold">{currentLocation}</span>
              ) : (
                <span className="text-bold">India</span>
              )}
            </h1>
            <div className="w-[100px] h-[3px] bg-black"></div>
          </div>
          <div className="w-[100%] flex max-mobile:flex-col-reverse  justify-center items-center">
            <div className=" mobile:w-[50%] flex flex-col">
              <div className="flex flex-col gap-[10px] mt-[20px]">
                <p>
                  Top 5 Best Royal Furniture Manufacturers in{" "}
                  {location ? (
                    <span className="text-bold">{currentLocation}</span>
                  ) : (
                    <span className="text-bold">India</span>
                  )}
                  Meet Sai Furniture Art- the right platform to experience the
                  luxurious and classical range of elegant sofa sets. With
                  significant years of experience in this respective field, we
                  have made incredible growth to match your comfort level along
                  with sophisticated design. Further, we are the leading Top 5
                  Best Royal Furniture Manufacturers in
                  {location ? (
                    <span className="text-bold">{currentLocation}</span>
                  ) : (
                    <span className="text-bold">India</span>
                  )}
                  . Whereas the establishment years of this renowned company lay
                  in the years 2005 under the unparalleled leadership of a
                  majestic personality named O.P Bajaj who is known for
                  providing immaculate product quality and tailored services.
                  While fabricating this luxurious furniture, our well-trained
                  craftsman ensures building robust quality and durable solid
                  finish of the furniture. This helps us to allow our clients to
                  experience the culture of care and add immense unmatched
                  vibrant ambiance to their surroundings. Now, feel free to
                  reach out to our prompt services.
                </p>
                <p>
                  <span className="flex items-center gap-[10px]">
                    Best Living Room Sofa Sets Suppliers in
                    {location ? (
                      <span className="text-[18px] font-[600]">{location}</span>
                    ) : (
                      <span className="text-[18px] font-[600]">India</span>
                    )}
                  </span>
                  If you’re searching for the best Living Room Sofa Sets
                  Suppliers in india, choose Sai Furniture Art, one of the most
                  renowned and foremost companies that have extensive years of
                  expertise in dealing with the product needs of our clients.
                  Further, we are well-recognized to serve our holistic approach
                  and fast-paced product delivery in all the major locations of
                  india. Besides this, we have gained an exceptional reputation
                  as the most trustworthy supplier and manufacturer in this
                  industry. Moreover, the features of our living sofa set
                  include furnished wooden, durable, top-quality, and low
                  maintenance. So, place your order from us and get ready to
                  change our living space into a luxurious way
                </p>
                <p>
                  If you’re trying to find the top Dining Set Suppliers in
                  india, get connected with Sai Furniture Art- one of the most
                  reliable and prominent companies that offers the best
                  collection of furniture from modern to traditional one. Also,
                  it is hard to find our sophisticated and finest design of
                  dining sets at competitive pricing. Moreover, our team of
                  skilled and well-experienced workers does collaborative work
                  to meet the client-focused and satisfaction in the right way.
                  So, make the right decision with our premium furniture
                  services.
                </p>
              </div>
            </div>
            <div className="mobile:w-[40%] h-[100%] flex justify-end">
              <img
                src="/home/intro.jpeg"
                alt="img"
                className="w-[90%] h-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85vw] flex  flex-wrap justify-center gap-[15px] mt-[50px] mb-[50px]">
        {aboutObj.map(({ icon, title, info }, index) => {
          return (
            <AboutCard key={index} icon={icon} title={title} info={info} />
          );
        })}
      </div>
      <div className="mobile:w-[85vw]">
        <div className="mt-[50px] mb-[50px]">
          <DesignerSofaSec location={location} />
        </div>
      </div>
    </div>
  );
};
