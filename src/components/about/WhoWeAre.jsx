import React from "react";
import Image from "next/image";
import Header from "./Header";
import JMbrochures from "/public/images/about/JMbrochures.webp";

const WhoWeAre = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-10">
      <Header title="WHO WE ARE" />

      <div className="flex flex-col space-y-10">
        <p className="font-hk leading-relaxed text-base text-left">
          J&M Products is dedicated to the turnkey manufacturing and marketing
          of high quality products and services. Through leadership, innovation
          and continuous improvement we are able to achieve the highest level of
          customer satisfaction. Our AS9100/ISO9001 approved quality management
          system applies to all aspects of the company. Our goal is to deliver
          defect-free product on-time at the most competitive price possible.
        </p>

        <p className="font-hk bg-gradient-to-r from-jm-blue-300 to-jm-blue-100 bg-clip-text text-transparent text-3xl md:text-4xl tracking-widest font-bold text-center">
          Brochures
        </p>

        <div className="w-full flex justify-center md:justify-end">
          <Image
            src={JMbrochures}
            alt="Brochures"
            className="w-full max-w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
