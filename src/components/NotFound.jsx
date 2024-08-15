import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

import Hex404 from "@/public/svg/404Hex.svg";
import Decor3 from "@/public/svg/404Decor.svg";

const NotFound = () => {
  return (
    <div className="relative w-full min-h-24 sm:min-h-28 md:min-h-screen justify-center overflow-hidden content-center ">
      <div className="relative flex flex-col items-center justify-center font-hk text-white tracking-widest text-center">
        <Image src={Hex404} alt="404 Hex" className="w-3/4 md:w-2/3 p-2 z-0" />
        <p className="absolute text-6xl md:text-7xl lg:text-8xl xl:text-9xl top-16 md:top-20 lg:top-32 font-semibold z-10">
          404
        </p>
        <p className="absolute w-1/2 sm:w-1/3 text-xs sm:text-lg lg:text-2xl xl:text-3xl top-36 md:top-44 lg:top-64 xl:top-72 font-light z-10">
          The page you are looking for does not exist!
        </p>
        <div className="absolute w-full bottom-14">
          <Button
            text="Back to home"
            link="/"
            bgColor={"bg-jm-blue-300"}
            borderColor={"border-black"}
            textColor={"text-black"}
            hoverBg={"group hover:!bg-jm-blue-100"}
            hoverText={"group-hover:!text-white"}
            className="font-hk p-2 z-20"
          />
        </div>
      </div>

      <div className="absolute overflow-hidden left-0 -top-32 md:-top-8 lg:-top-6 xl:-top-4 hidden sm:block">
        <Image src={Decor3} alt="Hex Decor 3" className="w-3/4 lg:w-full" />
      </div>
      <div className="absolute overflow-hidden -bottom-64 md:-bottom-12 lg:right-0 md:-right-10 hidden sm:block">
        <Image
          src={Decor3}
          alt="Hex Decor 3"
          className="w-3/4 lg:w-full rotate-180"
        />
      </div>
    </div>
  );
};

export default NotFound;
