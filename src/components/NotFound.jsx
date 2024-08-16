import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

import Hex404 from "@/public/svg/404Hex.svg";
import Decor3 from "@/public/svg/404Decor.svg";

const NotFound = () => {
  return (
    <div className="flex relative w-full min-h-24 sm:min-h-28 md:min-h-screen justify-center items-center overflow-hidden">
      <Image src={Hex404} alt="404 Hex" className="w-3/4 md:w-2/3 p-2 z-0" />
      <div className="absolute flex flex-col items-center justify-center font-hk text-white tracking-widest text-center sm:scale-125 translate-x-1.5 sm:translate-x-3 xl:translate-x-5 z-10">
        <p className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold mb-2">
          404
        </p>
        <p className="w-1/2 text-xs sm:text-lg lg:text-2xl xl:text-3xl font-light mb-6">
          The page you are looking for does not exist!
        </p>
        <div className="flex absolute justify-center w-full -bottom-4 sm:-bottom-6 md:-bottom-10 lg:-bottom-16 scale-50 sm:scale-75 md:scale-90 lg:scale-125 mt-1 ">
          <Button
            text="Back to home"
            link="/"
            bgColor={"bg-jm-blue-300"}
            borderColor={"border-white"}
            textColor={"text-white"}
            hoverBg={"group hover:!bg-jm-blue-100"}
            hoverText={"group-hover:!text-white"}
            className="font-hk text-xs"
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
