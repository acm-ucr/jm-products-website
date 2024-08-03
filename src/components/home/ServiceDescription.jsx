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
      className={`flex flex-col sm:flex-row ${
        float === "right" ? "sm:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`sm:w-1/4 w-full sm:pr-5 ${
          float === "right" ? "flex justify-end sm:pl-5" : ""
        } `}
      >
        <div className="sm:w-auto w-2/5">
          <Image src={img} alt="Service Description Picture" />
        </div>
      </div>
      <div className="flex flex-col sm:w-3/4 w-full">
        <h2
          className={`text-white text-left sm:text-3xl text-2xl font-bold tracking-widest ${
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
          className={`flex justify-start mb-20 ${
            float === "right" ? "flex justify-end" : ""
          }`}
        >
          <Button
            text={isExtended ? "Show Less" : "Learn More"}
            bgColor={"bg-jm-blue-200"}
            borderColor={"border-white"}
            textColor={"text-white"}
            hoverBg={"group hover:bg-white"}
            hoverText={"group-hover:text-jm-blue-200"}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
