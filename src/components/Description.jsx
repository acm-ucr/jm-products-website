"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const descriptionAnimations = {
  start: {
    opacity: 0,
    y: -30,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const Description = ({
  text,
  img,
  float = "left",
  reverseOnMobile = false,
}) => {
  return (
    <motion.div
      className="text-black w-full"
      variants={descriptionAnimations}
      initial="start"
      whileInView="end"
      transition={{ duration: 0.2, delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className={`flex flex-col sm:flex-row items-center ${
          float === "right"
            ? "sm:flex-row-reverse sm:justify-end"
            : "sm:justify-start"
        } ${reverseOnMobile ? "flex-col-reverse" : ""}`}
      >
        <Image
          src={img}
          alt="Placeholder"
          className={`mb-4 sm:w-1/4 w-3/4 ${reverseOnMobile ? "mt-4" : ""}`}
        />
        <p
          className={`font-hk text-sm sm:text-base font-normal tracking-wide sm:w-3/4 ${
            float === "right" ? "sm:mr-12" : "sm:ml-12"
          } ${reverseOnMobile ? "mb-4" : ""}`}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
};

export default Description;
