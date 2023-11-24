import Image from "next/image";
import React from "react";


const featuredProducts = [
    {
      id: 1,
      title: "Para sa 26 na taong siksik sa sarap at saya, maraming salamat mga Ka-Angel’s!",
      img: "/Product1.png",
    },
    {
      id: 2,
      title: "Hindi talaga mawawala sa listahan ng mga Pinoy favorites ang #AngelsBurger. ",
      img: "/Product2.png",
    },
    {
      id: 3,
      title: "Kahit walang ganap, sasaya at sasarap ang weekend mo basta may Angel’s Cheesy Burger na kasama!",
      img: "/Product3.png",
    },
  ];
  

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 
            hover:bg-gray-200  md:w-[50vw] xl:w-[33vw] xl:h-[85vh] 
            bg-white  opacity-100 transition duration-300 ease-in-out hover:opacity-80"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full hover: ">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

