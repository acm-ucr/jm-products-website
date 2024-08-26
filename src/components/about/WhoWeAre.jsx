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
    <div className="w-5/6 md:w-2/3 flex flex-col gap-10">
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
        <motion.div
          variants={fadeInFromTop}
          viewport={{ once: true, amount: 0 }}
          initial="initial"
          whileInView="animate"
          custom={0.3}
        >
          <p className="font-hk leading-relaxed text-left md:text-center text-xs md:text-base">
            J&M Products is dedicated to the turnkey manufacturing and marketing
            of high quality products and services. Through leadership,
            innovation and continuous improvement we are able to achieve the
            highest level of customer satisfaction. Our AS9100/ISO9001 approved
            quality management system applies to all aspects of the company. Our
            goal is to deliver defect-free product on-time at the most
            competitive price possible.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInFromTop}
          viewport={{ once: true, amount: 0 }}
          initial="initial"
          whileInView="animate"
          custom={0.4}
        >
          <p className="font-hk bg-gradient-to-r from-jm-blue-300 to-jm-blue-100 bg-clip-text text-transparent text-sm md:text-3xl tracking-widest font-bold text-left md:text-center">
            Brochures
          </p>
        </motion.div>

        <motion.div
          variants={fadeInFromTop}
          viewport={{ once: true, amount: 0 }}
          initial="initial"
          whileInView="animate"
          custom={0.5}
        >
          <div className="w-full flex justify-center md:justify-end">
            <Image
              src={JMbrochures}
              alt="Brochures"
              className="w-full max-w-fit"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;
