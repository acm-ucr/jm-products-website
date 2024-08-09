import React from "react";
import Image from "next/image";
import Header from "./Header";
import JMbrochures from "/public/images/about/JMbrochures.webp";

const WhoWeAre = () => {
  return (
    <div className="w-3/4 flex flex-col gap-10 mx-auto py-8">
      <Header title="WHO WE ARE" size="text-4xl" />
      <section className="text-left">
        <p className="text-justify font-medium mb-6 leading-relaxed text-sm/loose">
          J&M Products is dedicated to the turnkey manufacturing and marketing
          of high quality products and services. <br />
          Through leadership, innovation and continuous improvement we are able
          to achieve the highest level <br />
          of customer satisfaction. Our AS9100/ISO9001 approved quality
          management system <br />
          applies to all aspects of the company.Our goal is to deliver
          defect-free product on-time at the most <br />
          competitive price possible.
        </p>
        <div className="text-justify mb-6">
          <p className="font-hk bg-gradient-to-r from-jm-blue-300 to-jm-blue-100 bg-clip-text text-transparent text-2xl tracking-widest font-bold text-center">
            Brochures
          </p>
        </div>
        <div className="flex justify-centerr">
          <Image
            src={JMbrochures}
            alt="Brochures"
            width={800}
            height={600}
            className="w-full max-w-3xl center"
          />
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
