import React from "react";
import Image from "next/image";
import PhotoSlider from "@/public/images/home/JMPhotoStrip.webp";

const PhotoStrip = () => {
  return (
    <div className="flex">
      <Image src={PhotoSlider} alt="Picture of parts" />
    </div>
  );
};

export default PhotoStrip;
