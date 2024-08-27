"use client";
import React from "react";
import { motion } from "framer-motion";

const CustomerConcernsAnimation = {
  hidden: { opacity: 0, x: 25 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

const transition = {
  duration: 0.5,
};

const CustomerConcerns = () => {
  return (
    <motion.div
      variants={CustomerConcernsAnimation}
      transition={{ ...transition }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="w-3/4 xl:w-2/3"
    >
      <div className="w-3/4 xl:w-2/3 font-hk flex flex-col justify-center items-center gap-10">
        <h2 className="text-xl font-semibold w-full">
          Normal Customer Concerns:
        </h2>
        <ul className="list-disc space-y-1">
          <li className="text-sm">
            Our documentation doesn&apos;t always reflect the current state of
            the manufactured product.
          </li>
          <li className="text-sm">
            Engineering resources are often too thin to update specifications
            accordingly.
          </li>
          <li className="text-sm">
            Since we&apos;ve been building in house what do we do with our
            residual inventory?
          </li>
          <li className="text-sm">
            How do we convey to J&amp;M what our requirements are?
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default CustomerConcerns;
