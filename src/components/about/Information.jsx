"use client";

import React from "react";
import Header from "./Header.jsx";
import PDFLink from "../PDFLink.jsx";
import { InformationData } from "@/data/Information.js";
import { motion } from "framer-motion";

const SlideInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: custom, ease: "backInOut" },
  }),
};

const Information = () => {
  return (
    <div className="sm:w-2/3 lg:w-2/3 gap-10 flex flex-col justify-center p-10">
      <motion.div
        variants={SlideInFromLeft}
        viewport={{ once: true, amount: 0 }}
        initial="initial"
        whileInView="animate"
        custom={0.05}
      >
        <Header title="INFORMATIONS" size={"sm:text-6xl lg:text-5xl "} />
      </motion.div>
      <div className="sm:w-full lg:w-5/6 flex flex-col lg:justify-center lg:items-center gap-2 tracking-wider">
        {InformationData.map((item, index) => (
          <div key={index} className="sm:w-full lg:w-5/6 mb-3">
            <motion.div
              variants={SlideInFromLeft}
              viewport={{ once: true, amount: 0 }}
              initial="initial"
              whileInView="animate"
              custom={0.05}
            >
              <h3 className="font-bold text-base md:text-lg font-hk">
                {item.title}
              </h3>
              {item.points && (
                <ul className="sm:w-full lg:w-5/6 text-sm  list-disc flex flex-col font-hk pl-12 tracking-wider gap-2.5">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      {point.url ? (
                        <PDFLink
                          text={point.text}
                          link={point.url}
                          textColor={"text-jm-blue-200"}
                          hoverColor={"hover:!text-jm-blue-300"}
                        />
                      ) : (
                        <p> {point.text}</p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
