import React from "react";
import Header from "./Header";

const WhoWeAre = () => {
  return (
    <div className="w-3/4 flex flex-col gap-10 mx-auto">
      <Header title="WHO WE ARE" size="text-4xl" />
      <section className="text-left">
        <p className="text-justify font-medium mb-6 leading-relaxed">
          J&M Products is dedicated to the turnkey manufacturing and marketing
          of high quality products and services. Through leadership, innovation
          and continuous improvement we are able to achieve the highest level of
          customer satisfaction. Our AS9100/ISO9001 approved quality management
          system applies to all aspects of the company. Our goal is to deliver
          defect-free product on-time at the most competitive price possible.
        </p>
        <div className="text-left mb-8">
          <p className="font-hk bg-gradient-to-r from-jm-blue-300 to-jm-blue-100 bg-clip-text text-transparent ${size} tracking-widest font-bold">
            Brochures
          </p>
        </div>
        <div className="flex justify-center"></div>
        <img
          src="/images/about/JMbrochures.webp"
          alt="Brochures"
          className="w-full max-w-3xl"
        />
      </section>
    </div>
  );
};
export default WhoWeAre;
