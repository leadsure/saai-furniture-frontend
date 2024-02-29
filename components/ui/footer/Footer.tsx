"use client";
import { FiClock, FiPhone } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { FooterElem } from "./FooterElem";
import Image from "next/image";

interface FooterProp {
  location?: string;
}

const headingStyle = "text-[19px] font-bold uppercase";

export const Footer: React.FC<FooterProp> = ({ location }) => {
  return (
    <div className="w-screen  flex max-mobile:flex-col justify-between bg-white gap-[20px] p-[10px] mobile:p-[50px] mobile:pr-[200px] mobile:pl-[200px] text-black shadowww">
      <div className="flex max-mobile:flex-col gap-[30px]">
        <div className="flex flex-col w-[350px] gap-[20px]">
          <div className="flex  items-center gap-[10px]">
            <Image
              src={"/Saai-Furniture-Art-With-name.png"}
              alt="logo"
              width={200}
              height={60}
            />
          </div>
          <p className="text-left">
            Meet Sai Furniture Art- the right platform to experience the
            luxurious and classical range of elegant sofa sets. With significant
            years of experience in this respective field, we have made
            incredible growth to match your comfort level along with
            sophisticated design. Further, we are the leading Luxury Furniture
            Manufacturers in Delhi.
          </p>
        </div>
        <div className="w-[250px] flex flex-col gap-[20px]">
          <div className="flex  items-center gap-[10px]">
            <div className="w-[4px] h-[35px] bg-[#B19777] rounded-full"></div>
            <h2 className={`${headingStyle}`}>useful link</h2>
          </div>
          <FooterElem location={location} />
        </div>
      </div>
      <div className="flex max-mobile:flex-col gap-[30px]">
        <div className="w-[250px] flex flex-col gap-[20px]">
          <div className="flex  items-center gap-[10px]">
            <div className="w-[4px] h-[35px] bg-[#B19777] rounded-full"></div>
            <h2 className={`${headingStyle}`}>Sofa Set</h2>
          </div>

          <ul className="flex flex-col items-start gap-[10px]">
            <li className="text-[17px] cursor-pointer capitalize">
              carved sofa set
            </li>
            <li className="text-[17px] cursor-pointer capitalize">
              designer sofa set
            </li>
            <li className="text-[17px] cursor-pointer capitalize">
              modern sofa set
            </li>
            <li className="text-[17px] cursor-pointer capitalize">
              fiber wood sofa set
            </li>
          </ul>
        </div>
        <div className="w-[350px] flex flex-col gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <div className="w-[4px] h-[35px] bg-[#B19777] rounded-full"></div>
            <h2 className="text-[19px] font-bold uppercase">get in touch</h2>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="w-[100%] flex  gap-[10px]">
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#B19777] rounded-md">
                <MdLocationPin className="text-[25px]" />
              </div>
              <div className="w-[70%] text-left flex flex-col gap-[5px]">
                <h3 className="font-[600]">address</h3>
                <div>
                  9/50, 2nd Floor, Industrial Area, Opp. Railway Reservation
                  Center, Kirti Nagar, New Delhi - 110015, (India)
                </div>
              </div>
            </div>
            <div className="w-[100%] flex  gap-[10px]">
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#B19777] rounded-md">
                <FiPhone className="text-[25px]" />
              </div>
              <div className="w-[70%] text-left flex flex-col gap-[5px]">
                <h3 className="font-[600]">Contact us on:</h3>
                <div>+91-921-214-0888</div>
              </div>
            </div>
            <div className="w-[100%] flex  gap-[10px]">
              <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#B19777] rounded-md">
                <FiClock className="text-[25px]" />
              </div>
              <div className="w-[70%] text-left flex flex-col gap-[5px]">
                <h3 className="font-[600]">Opening Time</h3>
                <div>Mon-Sun: 10AM to 8PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
