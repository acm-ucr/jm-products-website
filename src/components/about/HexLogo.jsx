import React from "react";
import Image from "next/image";
import BackgroundImage from "@/public/images/about/HexBackground.webp";
import ProductLogo from "@/public/svg/J&MLogo.svg";

const HexLogo = () => {
  return (
    <div className="relative w-[390px] h-[390px]">
      <div className="absolute inset-0 z-10 flex items-center justify-center flex-col space-y-4 font-family: Georgia ">
        <h1 className="text-white">ABOUT J&M</h1>
        <Image src={ProductLogo} objectFit="cover" alt="Background Image" />
      </div>
      <Image
        className="absolute inset-0 z-0"
        src={BackgroundImage}
        layout="fill"
        objectFit="cover"
        alt="Background Image"
      />
    </div>
  );
};

export default HexLogo;
