import React from "react";
import { ContactForm } from "./ContactFrom";
import { InfoCard } from "./InfoCard";

export const ContactPage = () => {
  return (
    <div className=" w-screen flex flex-col justify-center items-center gap-[50px] ">
      <div className="relative w-screen h-[40vh]">
        <div
          className="absolute top-0 w-screen h-[350px] flex justify-center items-center bg-[rgba(0,0,0,0.4)] bg-cover bg-no-repeat bg-blend-multiply text-[40px] text-white font-bold uppercase"
          style={{
            backgroundImage: "url('/contact.jpeg')",
          }}
        >
          <h1 className="bg-[rgba(0,0,0,0.5)] p-[5px] pr-[15px] pl-[15px] rounded-lg">
            contact
          </h1>
        </div>
      </div>
      <div className="w-screen  flex justify-center items-center">
        {/* contact form and info */}
        <div className="mobile:w-[100vw] mobile:h-[80vh] flex flex-col justify-center items-center  mobile:relative mobile:items-start mobile:pl-[20vw]">
          <div className="relative">
            <ContactForm />
            <div className="z-[5]">
              <InfoCard />
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.413486315973!2d77.14027158756423!3d28.647335512889246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031c52968307%3A0xa407d1376af332!2sSai%20Furniture%20Art!5e0!3m2!1sen!2sin!4v1708615359453!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{
          border: 0,
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
