"use client";
import React from "react";
import { motion } from "framer-motion";

const BlueTextAnimation = {
  start: {
    opacity: 0,
    x: -30,
  },
  end: {
    opacity: 1,
    x: 0,
  },
};

const BlueText = ({ text }) => {
  return (
    <motion.div
      className="w-3/4 xl:w-2/3 flex flex-col justify-center items-center font-hk"
      variants={BlueTextAnimation}
      initial="start"
      whileInView="end"
      transition={{ duration: 0.2, delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="font-hk gap-10 text-jm-blue-300 md:text-2xl text-xl">
        {text}
      </div>
    </motion.div>
  );
};

export default BlueText;
