import React from "react";
import Header from "./Header";

const WhoWeAre = () => {
  return (
    <div className="p-6">
      <Header title="WHO WE ARE" size="text-4xl" />
      <section className="text-center my-8">
        <p className="text-base font-medium mb-4">
          J&M Products is dedicated to the turnkey manufacturing and marketing
          of high-quality products and services. Through leadership, innovation,
          and continuous improvement, we are able to achieve the highest level
          of customer satisfaction. Our ISO 9001:2015/ISO 14001 recognized
          quality management system applies to all aspects of the company. Our
          goal is to deliver defect-free product on-time at the most competitive
          price possible.
        </p>
        <img
          src="/images/about/JMbrochures.webp"
          alt="Brochures"
          className="w-full max-w-3xl"
        />
        <p className="text-lg font-bold mb-6">Brochures</p>
        <div className="flex justify-center"></div>
      </section>
    </div>
  );
};
export default WhoWeAre;
