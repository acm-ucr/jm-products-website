"use client";

import React, { useRef } from "react";
import Image from "next/image";
import decor from "@/public/svg/AboutDecor.svg";
import infoIcon from "@/public/svg/AboutInfoIcon.svg";
import Button from "@/components/Button";
import { motion, useInView } from "framer-motion";
import {
  fadeInFromLeft,
  fadeInFromRight,
  fadeInFromTop,
  fadeInFromBottom,
} from "@/utils/animationVariations";

const AboutJM = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.2,
  });

  return (
    <div className="flex">
      <motion.div
        ref={ref}
        variants={fadeInFromLeft}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        whileHover="hover"
        custom={0.5}
        className="mr-4 mt-24 mb-12 pr-7 py-0.5 max-md:hidden"
      >
        <Image
          src={decor}
          alt="Placeholder"
          className="w-full h-auto"
          priority
        />
      </motion.div>
      <div className="md:mr-32 flex flex-col justify-center">
        <div className="flex">
          <motion.div
            ref={ref}
            variants={fadeInFromTop}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            whileHover="hover"
            custom={0.25}
            className="mr-2.5 mx-2 md:mx-0"
          >
            <Image src={infoIcon} alt="Placeholder" className="w-full h-auto" />
          </motion.div>
          <motion.div
            ref={ref}
            variants={fadeInFromBottom}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            custom={0.25}
            className="mb-2 md:mx-0 content-center text-4xl font-hk font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3A4F85] to-[#8EA7C7]"
          >
            <p className="w-full h-auto">ABOUT J&M</p>
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          variants={fadeInFromRight}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          custom={0.5}
          className="my-7 mx-16 font-hk text-sm md:text-xl font-normal"
        >
          <p className="w-full h-auto">
            Since 1963, J&M Products has been a leading manufacturer of line
            support clamps, brackets and electrical wire harness assemblies.
            Recognized through multiple awards for high quality and on-time
            delivery excellence, J&M Products has been selected and retained by
            major aircraft, defense and transportation OEMs as a key supplier.
            J&M is AS9100 / ISO9001 and NADCAP certified.
          </p>
        </motion.div>

        <div className="flex justify-end my-2 md:my-0 mx-3 md:mx-0">
          <Button
            text="Learn More"
            link="/about"
            bgColor={"bg-white"}
            borderColor={"border-jm-blue-200"}
            textColor={"text-jm-blue-200"}
            hoverBg={"group hover:!bg-jm-blue-200"}
            hoverText={"group-hover:text-white"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutJM;
