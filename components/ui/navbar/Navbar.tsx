"use client";
import React, { useEffect, useRef, useState } from "react";
import { scrollOnHide, changeBgAndColorOnScroll } from "@/helpers";
import { NavElem } from "./NavElem";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface NavbarProp {
  location?: string;
}

export const Navbar: React.FC<NavbarProp> = ({ location }) => {
  const navigate = useRouter();

  const navbar = useRef<HTMLDivElement | null>(null);
  const [_city, setCity] = useState<string | undefined>();
  const [_location, setLocation] = useState<string | undefined>();
  const [changeBgColor, setChangeBgColor] = useState(false);

  useEffect(() => {
    setLocation(location);
    if (navbar && navbar.current) {
      scrollOnHide(navbar.current);
    }

    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 100) {
        setChangeBgColor(true);
      } else {
        setChangeBgColor(false);
      }
    });
  }, []);
  return (
    <div
      ref={navbar}
      className={`max-mobile:hidden  ${
        changeBgColor ? "black-text" : "transparent-bg white-text"
      }  fixed top-0 w-screen h-[100px] flex justify-between items-center transition-all delay-300 duration-300 pl-[20px] pr-[100px] bg-white shadowww z-[10]`}
    >
      <div
        onClick={() => {
          navigate.push("/");
        }}
        className="flex justify-center items-center gap-[10px]  cursor-pointer"
      >
        <Image
          src={"/saai-Furniture-Art-logo.png"}
          alt="logo"
          width={150}
          height={80}
        />
      </div>

      <div className="">
        <NavElem location={location} />
      </div>
    </div>
  );
};
