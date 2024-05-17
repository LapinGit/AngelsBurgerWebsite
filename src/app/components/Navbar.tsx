import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-amber-300 h-12 text-red-500  flex items-center 
    justify-between border-b-2 border-b-red-500
    md:h-24 
    lg:px-20 
    xl:px-50
    ">
      {/* LEFT LINKS */}
      <div className=" font-bold uppercase hidden md:flex gap-5 flex-1  
                       lg:text-1xl
                       ">
        <Link  href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* LOGO */}
        <Link href="/" className="  lg:text-3xl 
                        md:text-3xl  md:text-center
                        sm:text-2xl   
                        none: font-bold
                        lg:static flex items-center gap-2
                      	 ">Angel&apos;s Burger s Burger 
        <Image className="rounded-full hidden md:flex  " src="/AngelsBurgerLogo.png" alt="" width={70} height={70}/> 
        </Link>
        
      {/* MOBILE MENU */}
      <div className="md:hidden">
      <Menu/>
      </div>



      {/* RIGHT LINKS */}
      <div className="     flex-1    md:flex hidden  items-center justify-end  gap-3">
      <Link className="hidden md:flex  " href="https://www.facebook.com/angelsburgerph/">
        <div className=" 
                      text-amber-300  
                        lg:static flex items-center gap-2 cursor-pointer 
                        bg-blue-500 px-1 rounded-md
                        ">
          <span>FB PAGE</span>
          <Image src="/facebook.png" alt="" width={30} height={30} />
        </div>
        </Link>
        <Link  href="https://www.instagram.com/angelsburgerph/?hl=en">

        <div className="text-amber-300 
                        lg:static flex items-center gap-2 cursor-pointer 
                        bg-pink-500 px-1 rounded-md
                        ">
          <span>IG PAGE</span>
          <Image src="/instagram.png" alt="" width={30} height={30} />
        </div>
        </Link>
        <Link  href="https://www.youtube.com/@angelsburger5303">

        <div className="text-amber-300 
                lg:static flex items-center gap-2 cursor-pointer 
                bg-red-500 px-1 rounded-md
                ">
  <span>YT PAGE</span>
  <Image src="/youtube.png" alt="" width={30} height={30} />
</div>
</Link>
      </div>

    </div>
  );
};

export default Navbar;