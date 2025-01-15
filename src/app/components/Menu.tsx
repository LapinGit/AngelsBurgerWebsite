"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 4, title: "Contact", url: "/contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const user = false;
  return (
    <div>
      {/* SHORTCUT */}
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="bg-amber-300 text-red-500 absolute left-0 top-12 w-full h-[calc(80vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          <Link href="https://www.facebook.com/angelsburgerph/">
            <div
              className=" 
                      text-amber-300  
                        lg:static flex items-center gap-2 cursor-pointer 
                        bg-blue-500 px-1 rounded-md
                        "
            >
              <span>FB PAGE</span>
              <Image src="/facebook.png" alt="" width={30} height={30} />
            </div>
          </Link>
          <Link href="https://www.instagram.com/angelsburgerph/?hl=en">
            <div
              className="text-amber-300 
                        lg:static flex items-center gap-2 cursor-pointer 
                        bg-pink-500 px-1 rounded-md
                        "
            >
              <span>IG PAGE</span>
              <Image src="/instagram.png" alt="" width={30} height={30} />
            </div>
          </Link>
          <Link href="https://www.youtube.com/@angelsburger5303">
            <div
              className="text-amber-300 
                lg:static flex items-center gap-2 cursor-pointer 
                bg-red-500 px-1 rounded-md
                "
            >
              <span>YT PAGE</span>
              <Image src="/youtube.png" alt="" width={30} height={30} />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
