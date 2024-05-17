import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-amber-300 h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between ">
      <div className=" md:flex gap-4 flex-1 items-center font-bold text-xl ">
        <Image
          className="rounded-full md:flex hidden"
          src="/AngelsBurgerLogo.png"
          alt=""
          width={90}
          height={90}
        />
        <p> Angel&apos;s Burger</p>
      </div>

      <div className="  lg:text-base	  ">
        <p> © ALL RIGHTS RESERVED. </p>
      </div>
    </div>
  );
};

export default Footer;
