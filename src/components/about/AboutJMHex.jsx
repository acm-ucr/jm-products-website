import React from "react";
import Image from "next/image";
import JMHexPhoto from "@/public/images/about/AboutJMHex.webp";

const AboutJMHex = () => {
  return (
    <Image
      src={JMHexPhoto}
      alt="JM Products Hex Image"
      className="w-3/4 md:w-1/3"
    />
  );
};

export default AboutJMHex;
