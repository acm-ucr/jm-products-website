import React from "react";
import BannerDecor1 from "@/public/svg/BannerDecor1.svg";
import BannerDecor2 from "@/public/svg/BannerDecor2.svg";
import Image from "next/image";

const ContactHeader = () => {
  return (
    <div className="relative w-full flex justify-center">
      <div className="sm:w-2/5 w-3/4 flex flex-col mt-5 mb-3 font-hk animate-fade-down">
        <p className="flex sm:justify-start justify-center bg-gradient-to-r from-jm-blue-300 to-jm-blue-100 bg-clip-text text-transparent sm:text-4xl text-3xl tracking-widest font-bold ">
          CONTACT US
        </p>
        <p className="text-left tracking-wider text-base my-2">
          Feel free to contact us any time! We will get back to you as soon as
          we can!
        </p>
      </div>
      <div className="absolute start-0 end-0 inset-y-2/3 pr-4 -translate-y-40">
        <Image
          src={BannerDecor1}
          alt="Banner Decor 1"
          className="w-1/5 animate-fade-up"
        />
      </div>
      <div className="absolute w-1/6 sm:-bottom-5 md:-bottom-0 right-0 scale-150 sm:scale-100 -translate-x-4 sm:-translate-x-6">
        <Image
          src={BannerDecor2}
          alt="Banner Decor 2"
          className="w-full animate-fade-down"
        />
      </div>
    </div>
  );
};

export default ContactHeader;
