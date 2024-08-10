import React from "react";
import Image from "next/image";

const Description = ({ text, img, float = "left" }) => {
  return (
    <div className="text-black w-full">
      <div
        className={`flex flex-col sm:flex-row items-center ${
          float === "right"
            ? "sm:flex-row-reverse sm:justify-end"
            : "sm:justify-start"
        }`}
      >
        <Image src={img} alt="Placeholder" className="mb-4 sm:w-1/4 w-3/4" />
        <p
          className={`font-hk text-xs sm:text-base font-light tracking-wide sm:w-3/4 ${
            float === "right" ? "sm:mr-12" : "sm:ml-12"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Description;
