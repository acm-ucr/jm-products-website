import React from "react";
import Image from "next/image";
import Header from "./Header";
import JMbrochures from "/public/images/about/JMbrochures.webp";

const WhoWeAre = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-10">
      <Header title="WHO WE ARE" size="text-4xl" />

      <div className="flex flex-col space-y-10">
        <p className="font-hk leading-relaxed text-base text-center md:text-left">
          J&M Products is dedicated to the turnkey manufacturing and marketing
          of high quality products and services. <br />
          Through leadership, innovation and continuous improvement we are able
          to achieve the highest level <br />
          of customer satisfaction. Our AS9100/ISO9001 approved quality
          management system <br />
          applies to all aspects of the company. Our goal is to deliver
          defect-free product on-time at the most <br />
          competitive price possible.
        </p>

        <p className="font-hk bg-gradient-to-r from-jm-blue-300 to-jm-blue-100 bg-clip-text text-transparent text-3xl md:text-4xl tracking-widest font-bold text-center">
          Brochures
        </p>

        <div className="flex justify-center md:justify-end w-full">
          <Image
            src={JMbrochures}
            alt="Brochures"
            width={800}
            height={600}
            className="w-full max-w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
