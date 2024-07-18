import React from "react";
import Image from "next/image";
import Button from "../Button";

const ServiceDescription = ({ img, title, desc, link, float }) => {
  return (
    <div className="w-full bg-jm-blue-200">
      <div
        className={`flex flex-row px-36 ${
          float === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <Image
          src={img}
          alt="Service Description Picture"
          className="w-1/4 px-5"
        />
        <div className="flex flex-col">
          <h2
            className={`text-white text-left text-3xl font-bold ${
              float === "right" ? "text-right" : ""
            }`}
            style={{ letterSpacing: "0.13em" }}
          >
            {title}
          </h2>
          <p
            className={`text-white text-left py-9 ${
              float === "right" ? "text-right text-balance" : ""
            }`}
          >
            {desc}
          </p>
          <div
            className={`flex ${float === "right" ? "flex justify-end" : ""}`}
          >
            <Button
              text="Learn More"
              link={link}
              bgColor={"bg-jm-blue-200"}
              borderColor={"border-white"}
              textColor={"text-white"}
              hoverBg={"group hover:bg-white"}
              hoverText={"group-hover:text-jm-blue-200"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
