import React from "react";
import Image from "next/image";
import NASLogo from "/images/lineclamps/companies/NASLogo.webp";
import ANSILogo from "/images/lineclamps/companies/ANSILogo.webp";
import SAELogo from "/images/lineclamps/companies/SAELogo.webp";

const LogoStrip = () => {
  return (
    <div className="flex justify-between p-4">
      <Image src={NASLogo} alt="SAE Logo" width={180} height={92} />
      <Image src={ANSILogo} alt="ANSI Logo" width={238} height={100} />
      <Image src={SAELogo} alt="NAS Logo 3" width={106} height={67} />
    </div>
  );
};

export default LogoStrip;
