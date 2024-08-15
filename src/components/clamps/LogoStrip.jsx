import React from "react";
import Image from "next/image";
import ANSI from "@/public/images/lineclamps/companies/ANSILogo.webp";
import NAS from "@/public/images/lineclamps/companies/NASLogo.webp";
import SAE from "@/public/images/lineclamps/companies/SAElogo.webp";

const LogoStrip = () => {
  return (
    <div className="flex justify-center flex-row gap-x-14 mt-6">
      <Image src={SAE} alt="SAE Logo" className="w-28 h-20" />
      <Image src={ANSI} alt="ANSI Logo" className="w-56 h-24" />
      <Image src={NAS} alt="NAS Logo" className="w-44 h-24" />
    </div>
  );
};

export default LogoStrip;
