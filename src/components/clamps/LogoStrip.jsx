import React from "react";
import Image from "next/image";
import ANSI from "@/public/images/lineclamps/companies/ANSILogo.webp";
import NAS from "@/public/images/lineclamps/companies/NASLogo.webp";
import SAE from "@/public/images/lineclamps/companies/SAElogo.webp";

const LogoStrip = () => {
  return (
    <div className="flex justify-center flex-row gap-x-4 lg:gap-x-14 mt-6 ">
      <Image src={SAE} alt="SAE Logo" className="w-20 h-14 lg:w-28 lg:h-20" />
      <Image src={ANSI} alt="ANSI Logo" className="w-28 h-14 lg:w-56 lg:h-24" />
      <Image
        src={NAS}
        alt="NAS Logo"
        className="mt-2.5 w-20 h-10 lg:w-44 lg:h-24"
      />
    </div>
  );
};

export default LogoStrip;
