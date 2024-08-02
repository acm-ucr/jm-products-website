import React from "react";
import Image from "next/image";
import LogoBackground from "@/public/images/about/HexBackground.webp";

const HexLogo = () => {
  return (
    <Image
      src={LogoBackground}
      width={500}
      height={500}
      alt="Hexagon Logo"
    />
  );
}

export default HexLogo;