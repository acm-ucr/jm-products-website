import React from "react";
import Image from "next/image";

const Description = ({ text, img, float = "left" }) => {
  return (
    <div className="text-black">
      <div
        className={`flex justify-center items-center ${
          float === "right" ? "flex-row-reverse justify-end" : ""
        }`}
      >
        <Image
          src={img}
          alt="Placeholder"
          width={250}
          height={167}
          className=""
        />
        <p
          className={`font-hk w-5/12 text-sm font-normal ${
            float === "right" ? "pr-12" : "pl-12"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Description;
