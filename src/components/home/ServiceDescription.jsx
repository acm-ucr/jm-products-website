"use client";
import React from "react";
import Image from "next/image";
import Button from "../Button";
import { useState } from "react";

const ServiceDescription = ({ img, title, desc, extendedDesc, float }) => {
  const [isExtended, setIsExtended] = useState(false);

  const handleClick = () => {
    setIsExtended(!isExtended);
  };

  return (
    <div
      className={`flex flex-row ${float === "right" ? "flex-row-reverse" : ""}`}
    >
      <div
        className={`w-1/4 pr-5 ${
          float === "right" ? "pl-5" : ""
        } flex-shrink-0`}
      >
        <Image src={img} alt="Service Description Picture" />
      </div>
      <div className="flex flex-col w-3/4">
        <h2
          className={`text-white text-left text-3xl font-bold tracking-widest ${
            float === "right" ? "text-right" : ""
          }`}
        >
          {title}
        </h2>
        <div
          className={`text-white text-left text-balance my-9 ${
            float === "right" ? "text-right" : ""
          }`}
        >
          {isExtended
            ? extendedDesc.map((segment, index) => (
                <p
                  key={index}
                  className={`${
                    index !== extendedDesc.length - 1 ? "mb-9" : ""
                  }`}
                >
                  {segment}
                </p>
              ))
            : desc}
        </div>
        <div
          className={`flex mb-20 ${
            float === "right" ? "flex justify-end" : ""
          }`}
        >
          <Button
            text={isExtended ? "Show Less" : "Learn More"}
            bgColor={"bg-jm-blue-200"}
            borderColor={"border-white"}
            textColor={"text-white"}
            hoverBg={"group hover:bg-white"}
            hoverText={"group-hover:!text-jm-blue-200"}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
