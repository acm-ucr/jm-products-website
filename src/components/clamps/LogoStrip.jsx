"use client";
import React from "react";
import Image from "next/image";
import ANSI from "@/public/images/lineclamps/companies/ANSILogo.webp";
import NAS from "@/public/images/lineclamps/companies/NASLogo.webp";
import SAE from "@/public/images/lineclamps/companies/SAElogo.webp";
import { backOut, motion } from "framer-motion";

const imageAnimation = {
  start: {
    opacity: 0,
    x: -100,
    backOut,
  },
  end: {
    opacity: 1,
    x: 0,
  },
};

const LogoStrip = () => {
  return (
    <div className="flex justify-center flex-row gap-x-4 lg:gap-x-14 mt-6 ">
      <motion.div
        variants={imageAnimation}
        initial="start"
        whileInView="end"
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image src={SAE} alt="SAE Logo" className="w-20 h-14 lg:w-28 lg:h-20" />
      </motion.div>
      <motion.div
        variants={imageAnimation}
        initial="start"
        whileInView="end"
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src={ANSI}
          alt="ANSI Logo"
          className="w-28 h-14 lg:w-56 lg:h-24"
        />
      </motion.div>
      <motion.div
        variants={imageAnimation}
        initial="start"
        whileInView="end"
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src={NAS}
          alt="NAS Logo"
          className="mt-2.5 w-20 h-10 lg:w-44 lg:h-24"
        />
      </motion.div>
    </div>
  );
};

export default LogoStrip;
