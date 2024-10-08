import React from "react";
import BannerImgDesktop from "@/public/images/Banner.webp";
import BannerImgMobile from "@/public/images/BannerMobile.webp";
import BannerDecor1 from "@/public/svg/BannerDecor1.svg";
import BannerDecor2 from "@/public/svg/BannerDecor2.svg";
import Image from "next/image";

const Banner = ({ text }) => {
  return (
    <div className="relative font-hk w-full">
      <div className="hidden sm:block">
        <Image
          src={BannerImgDesktop}
          alt="Banner Picture"
          className="w-full h-1/2"
        />
      </div>
      <div className="block sm:hidden">
        <Image src={BannerImgMobile} alt="Banner Picture" className="w-full" />
      </div>
      <div className="absolute inset-y-1/2 md:inset-y-2/3 text-center w-full">
        <p className="text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider">
          {text}
        </p>
      </div>
      <div className="absolute start-0 end-0 inset-y-2/3 pr-4 translate-y-8 sm:translate-y-0">
        <Image
          src={BannerDecor1}
          alt="Banner Decor 1"
          className="w-1/6 animate-fade-up"
        />
      </div>
      <div className="absolute w-1/6 -bottom-5 md:-bottom-10 lg:-bottom-20 right-0 scale-150 sm:scale-100 -translate-x-4 sm:-translate-x-0">
        <Image
          src={BannerDecor2}
          alt="Banner Decor 2"
          className="w-full animate-fade-down"
        />
      </div>
    </div>
  );
};

export default Banner;
