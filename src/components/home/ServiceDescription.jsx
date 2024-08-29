"use client";
import React from "react";
import Image from "next/image";
import Button from "../Button";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  fadeInFromBottom,
  fadeInFromLeft,
  fadeInFromRight,
} from "@/utils/animationVariations";

const ServiceDescription = ({ img, title, desc, extendedDesc, float }) => {
  const [isExtended, setIsExtended] = useState(false);

  const handleClick = () => {
    setIsExtended(!isExtended);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  const imageVariant = float === "right" ? fadeInFromRight : fadeInFromLeft;
  const textVariant = float === "right" ? fadeInFromLeft : fadeInFromRight;

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
          <motion.div
            ref={ref}
            variants={imageVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            custom={0.5}
          >
            <Image
              src={img}
              alt="Service Description Picture"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col sm:w-3/4 w-full">
        <h2
          className={`text-white text-left sm:text-3xl text-2xl font-bold tracking-widest ${
            float === "right" ? "text-right" : ""
          }`}
        >
          <motion.div
            ref={ref}
            variants={fadeInFromBottom}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            custom={0.5}
          >
            {title}
          </motion.div>
        </h2>
        <div
          className={`text-white text-left text-balance my-9 sm:text-lg text-sm ${
            float === "right" ? "text-right" : ""
          }`}
        >
          <motion.div
            ref={ref}
            variants={textVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            custom={0.5}
          >
            {isExtended
              ? extendedDesc.map((segment, index) => (
                  <p
                    key={index}
                    className={`${
                      index !== extendedDesc.length - 1 ? "mb-9" : ""
                    } w-full h-auto`}
                  >
                    {segment}
                  </p>
                ))
              : desc}
          </motion.div>
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
            hoverText={"group-hover:!text-jm-blue-200"}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
