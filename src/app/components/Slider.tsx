"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Para sa 26 na taong siksik sa sarap at saya, maraming salamat mga Ka-Angel’s!",
    image: "/HomePic1.png",
  },
  {
    id: 2,
    title: "Hindi talaga mawawala sa listahan ng mga Pinoy favorites ang #AngelsBurger. ",
    image: "/HomePic2.png",
  },
  {
    id: 3,
    title: "Kahit walang ganap, sasaya at sasarap ang weekend mo basta may Angel’s Cheesy Burger na kasama!",
    image: "/HomePic3.png",
  },
];


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(
          () =>
            setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
          4000
        );
        return () => clearInterval(interval);
      }, []);
    

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-white-50 my-4">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-3xl text-center uppercase p-4 md:p-10 md:text-4xl xl:text-5xl">
          {data[currentSlide].title}
        </h1>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative ">
      <Image 
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-fill "/>
      </div>
    </div>
  );
};

export default Slider;
