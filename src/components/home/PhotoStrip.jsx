"use client";
import React, { useRef } from "react";
import Image from "next/image";
import PhotoSlider from "@/public/images/home/JMPhotoStrip.webp";
import { motion, useInView } from "framer-motion";
import { fadeInFromLeft } from "@/utils/animationVariations";

const PhotoStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInFromLeft}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="flex"
    >
      <Image src={PhotoSlider} alt="Picture of parts" />
    </motion.div>
  );
};

export default PhotoStrip;
