import React from "react";
import Image from "next/image";

const LogoStrip = () => {
  return (
    <div className="flex justify-between p-4">
      <Image
        src="/images/lineclamps/companies/NASLogo.webp"
        alt="SAE Logo"
        width={180}
        height={92}
      />
      <Image
        src="/images/lineclamps/companies/ANSILogo.webp"
        alt="ANSI Logo"
        width={238}
        height={100}
      />
      <Image
        src="/images/lineclamps/companies/SAELogo.webp"
        alt="NAS Logo 3"
        width={106}
        height={67}
      />
    </div>
  );
};

export default LogoStrip;
