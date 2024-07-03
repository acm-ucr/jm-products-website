import React from "react";
import bannerImg from "@/public/images/Banner.png";
import BannerDecor1 from "@/public/svg/BannerDecor1.svg";
import BannerDecor2 from "@/public/svg/BannerDecor2.svg";
import Image from "next/image";

const Banner = ({ text }) => {
  return (
    <div className="relative">
      <Image src={bannerImg} alt="Banner Picture" className="w-full" />
      <div className="absolute inset-y-2/3 start-1/4">
        <h1 className="text-white text-lg md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          {text}
        </h1>
      </div>
      <div className="absolute start-0 end-0 inset-y-2/3 pr-4">
        <Image src={BannerDecor1} alt="Banner Decor" className="w-1/6" />
      </div>
      <div className="absolute bottom-0 right-0 inset-y-3/4">
        <Image src={BannerDecor2} alt="Banner Decor" className="w-full" />
      </div>
    </div>
  );
};

export default Banner;
