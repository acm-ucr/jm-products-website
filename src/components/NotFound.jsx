import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

import Hex404 from "@/public/svg/404Hex.svg";
import Decor1 from "@/public/svg/404Decor1.svg";
import Decor2 from "@/public/svg/BannerDecor2.svg";
import Decor3 from "@/public/svg/404Decor2.svg";

const NotFound = () => {
  return (
    <div className="relative w-full min-h-96 xl:min-h-screen justify-center md:mb-36 overflow-visible">
      <div className="relative flex flex-col items-center justify-center font-hk text-white tracking-widest text-center">
        <Image src={Hex404} alt="404 Hex" className="w-3/4 md:w-1/2 p-2 z-0" />
        <p className="absolute text-6xl md:text-7xl lg:text-8xl xl:text-9xl top-16 md:top-20 lg:top-32 font-semibold z-10">
          404
        </p>
        <p className="absolute w-7/12 md:w-1/3 md:text-lg lg:text-2xl xl:text-3xl top-36 md:top-44 lg:top-64 xl:top-72 font-light z-10">
          The page you are looking for does not exist!
        </p>
        <div className="absolute w-full bottom-14">
          <Button
            text="Back to home"
            link="/"
            bgColor={"bg-jm-blue-300"}
            borderColor={"border-white"}
            textColor={"text-white"}
            hoverBg={"group hover:!bg-jm-blue-100"}
            hoverText={"group-hover:!text-white"}
            className="font-hk p-2 z-20"
          />
        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:bottom-0 md:left-36 lg:-bottom-32 lg:left-44 xl:-bottom-12 xl:left-72">
        <Image
          src={Decor1}
          alt="Hex Decor 1"
          className="w-1/2 md:w-3/4 lg:w-full xl:scale-125"
        />
      </div>

      <div className="absolute top-16 -right-10 md:right-28 md:top-2 lg:right-64 lg:-top-2 xl:top-16 xl:right-80">
        <Image
          src={Decor2}
          alt="Hex Decor 2"
          className="w-1/2 md:w-3/4 lg:w-full xl:scale-125"
        />
      </div>

      <div className="absolute overflow-hidden left-0 -top-32 xl:-top-4 hidden sm:block">
        <Image src={Decor3} alt="Hex Decor 3" className="w-3/4 lg:w-full" />
      </div>
      <div className="absolute overflow-hidden -bottom-64 xl:-bottom-12 lg:right-0 md:-right-10 hidden sm:block">
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
