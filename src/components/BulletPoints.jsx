"use client";
import React from "react";
import { backOut, easeIn, motion } from "framer-motion";

const bulletTitleAnimations = {
  start: {
    opacity: 0,
    x: -50,
    backOut,
  },
  end: {
    opacity: 1,
    x: 0,
  },
};

const bulletAnimations = {
  start: {
    opacity: 0,
    y: 30,
    easeIn,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const BulletPoints = ({ title, data }) => {
  return (
    <div className="w-5/6 lg:w-2/3 gap-10 flex flex-col justify-center item">
      <motion.div
        className="flex flex-col w-full"
        variants={bulletTitleAnimations}
        initial="start"
        whileInView="end"
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p
          className={`font-hk bg-gradient-to-r from-jm-blue-300 to-jm-blue-100 bg-clip-text text-transparent m-0 text-2xl md:text-3xl tracking-widest font-bold mb-1 p-1`}
        >
          {title}
        </p>
        <div className="border-t-4 border-solid border-jm-blue-200 w-full m-0" />
      </motion.div>
      <motion.div
        className="flex lg:justify-center "
        variants={bulletAnimations}
        initial="start"
        whileInView="end"
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <ul className="text-left text-xs lg:text-sm list-disc flex flex-col font-hk w-full lg:w-7/12 sm:gap-1 tracking-wider list-inside">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default BulletPoints;
