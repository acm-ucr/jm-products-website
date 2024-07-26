import React from "react";
import Image from "next/image";

const Description = ({ text, img, float = "left" }) => {
  return (
    <div className="text-black w-full">
      <div
        className={`flex justify-center items-center ${
          float === "right" ? "flex-row-reverse justify-end" : ""
        }`}
      >
        <Image src={img} alt="Placeholder" className="w-1/4" />
        <p
          className={`font-hk text-sm font-normal ${
            float === "right" ? "mr-12" : "ml-12"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Description;
