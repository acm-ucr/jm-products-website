"use client";

import React from "react";
import Image from "next/image";
import Header from "./Header";
import JMbrochures from "/public/images/about/JMbrochures.webp";
import { motion } from "framer-motion";

const SlideInFromLeft = {
  initial: { opacity: 0, x: -1000 },
  animate: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: custom, ease: "backInOut" },
  }),
};

const fadeInFromTop = {
  initial: { opacity: 0, y: -50 },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: custom, ease: "easeOut" },
  }),
};

const WhoWeAre = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-10">
      <motion.div
        variants={SlideInFromLeft}
        viewport={{ once: true, amount: 0 }}
        initial="initial"
        whileInView="animate"
        custom={0.05}
      >
        <Header title="WHO WE ARE" />
      </motion.div>

      <div className="flex flex-col space-y-10">
      </div>
    </div>
  );
};

export default WhoWeAre;
