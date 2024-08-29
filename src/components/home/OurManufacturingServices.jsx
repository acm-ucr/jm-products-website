"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  fadeInFromTop,
  fadeInFromBottom,
  spinClockwise,
} from "@/utils/animationVariations";
import Image from "next/image";
import GearIcon from "@/public/svg/GearIcon.svg";
import GearIconBg from "@/public/svg/GearIconBackground.svg";
import ServiceDescription from "@/components/home/ServiceDescription";
import ClampsAndBracket from "@/public/images/home/ClampsAndBracket.webp";
import WireHarnesses from "@/public/images/home/WireHarnesses.webp";

const OurManufacturingServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <div className="w-full bg-jm-blue-200 flex justify-center items-center">
      <div className="w-5/6 flex flex-col items-center justify-center sm:gap-24 sm:py-24 gap-10 py-10">
        <div className="flex items-center justify-center">
          <div className="relative w-20 h-20 flex justify-center items-center sm:top-1">
            <motion.div
              ref={ref}
              variants={fadeInFromTop}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              custom={0.5}
              className="absolute"
            >
              <Image
                src={GearIconBg}
                alt="Gear Icon Background"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              ref={ref}
              variants={spinClockwise}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              whileHover="hover"
              custom={1.5}
              className="relative z-100"
            >
              <Image src={GearIcon} alt="Gear Icon" className="w-full h-auto" />
            </motion.div>
          </div>
          <div>
            <motion.div
              ref={ref}
              variants={fadeInFromBottom}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              custom={0.5}
              className="text-white font-bold sm:text-4xl text-xl text-center tracking-widest h-20 flex justify-center items-center"
            >
              <p className="w-full h-auto">Our Manufacturing Services</p>
            </motion.div>
          </div>
        </div>
        <div>
          <ServiceDescription
            img={ClampsAndBracket}
            title="Clamps and Bracket"
            desc={[
              "J&M Line Support ",
              <strong key="bold">Clamps and Bracket</strong>,
              " solutions are utilized to support hydraulic, electrical and pneumatic systems in extreme environmental conditions (temperature variation, fluid exposure, vibration, etc).",
            ]}
            extendedDesc={[
              <>
                J&M Line Support <strong key="bold">Clamps and Bracket</strong>{" "}
                solutions are utilized to support hydraulic, electrical and
                pneumatic systems in extreme environmental conditions
                (temperature variation, fluid exposure, vibration, etc).
              </>,
              "Reliable, proven, off the shelf or designed to the specific application, J&M line clamps provide fast economical methods of installing wire harnesses, hydraulic lines, and a variety of other applications.",
              "In addition, J&M can customize any required mounting brackets where vibration or loads would exceed clamp, component design limits, or if compound angles are required.",
            ]}
            float="left"
          />
          <ServiceDescription
            img={WireHarnesses}
            title="Wire Harnesses"
            desc="J&M Products manufactures a variety of wire harnesses serving a broad range of customers including class 8 trucks, aircraft systems, marine, medical, vehicle accessories, and utility body manufacturers."
            extendedDesc={[
              "J&M Products manufactures a variety of wire harnesses serving a broad range of customers including class 8 trucks, aircraft systems, marine, medical, vehicle accessories, and utility body manufacturers.",
              "Wire harnesses are highly customized to the application per customer specifications; J&M can provide expert assistance during the prototyping and short run phase, ahead of production volumes.",
              "J&M personnel are extensively trained using WHMA/IPC-A-620 acceptance criteria. The team approach is used to solve complex manufacturing issues. Lean Manufacturing principles are employed throughout the production cycle ensuring a low cost and high quality product.",
            ]}
            float="right"
          />
        </div>
      </div>
    </div>
  );
};

export default OurManufacturingServices;
