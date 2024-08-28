"use client";
import React from "react";
import Image from "next/image";
import PhotoSlider from "@/public/images/home/JMPhotoStrip.webp";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 1, x: -200 },
  show: {
    opacity: 1,
    x: 0,
  },
};

const transition = {
  duration: 0.7,
};

const PhotoStrip = () => {
  return (
    <motion.div
      variants={animation}
      transition={{ ...transition }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex"
    >
      <Image src={PhotoSlider} alt="Picture of parts" />
    </motion.div>
  );
};

export default PhotoStrip;
