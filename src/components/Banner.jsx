"use client";
import React from "react";
import BannerImgDesktop from "@/public/images/Banner.webp";
import BannerImgMobile from "@/public/images/BannerMobile.webp";
import BannerDecor1 from "@/public/svg/BannerDecor1.svg";
import BannerDecor2 from "@/public/svg/BannerDecor2.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const duration = 0.7; // for consistency across animations

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { duration: duration, delay: 0, ease: "easeOut" },
  }),
  hover: { scale: 1.1 },
};

const fadeInFromRight = {
  initial: { opacity: 0, x: 100 },
  animate: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { duration: duration, delay: 0, ease: "easeOut" },
  }),
  hover: { scale: 1.1 },
};

const Banner = ({ text }) => {
  return (
    <div className="relative font-hk w-full">
      <div className="hidden sm:block">
        <motion.div variants={fadeIn} initial="initial" animate="animate">
          <Image
            src={BannerImgDesktop}
            alt="Banner Picture"
            className="w-full h-1/2"
          />
        </motion.div>
      </div>
      <div className="block sm:hidden">
        <motion.div variants={fadeIn} initial="initial" animate="animate">
          <Image
            src={BannerImgMobile}
            alt="Banner Picture"
            className="w-full"
          />
        </motion.div>
      </div>
      <div className="absolute inset-y-1/2 md:inset-y-2/3 text-center w-full">
        <p className="text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider">
          {text}
        </p>
      </div>
      <div className="absolute start-0 end-0 inset-y-2/3 pr-4 translate-y-8 sm:translate-y-0">
        <motion.div
          variants={fadeInFromLeft}
          initial="initial"
          animate="animate"
        >
          <Image src={BannerDecor1} alt="Banner Decor 1" className="w-1/6" />
        </motion.div>
      </div>
      <div className="absolute w-1/6 -bottom-5 md:-bottom-10 lg:-bottom-20 right-0 scale-150 sm:scale-100 -translate-x-4 sm:-translate-x-0">
        <motion.div
          variants={fadeInFromRight}
          initial="initial"
          animate="animate"
        >
          <Image src={BannerDecor2} alt="Banner Decor 2" className="w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
