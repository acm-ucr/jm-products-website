import React from "react";
import Image from "next/image";
import ServiceDescription from "@/components/home/ServiceDescription";
import ClampsAndBracket from "../../../public/images/home/ClampsAndBracket.webp";
import WireHarnesses from "../../../public/images/home/WireHarnesses.webp";

const OurManufacturingServices = () => {
  return (
    <div className="w-full bg-jm-blue-200">
      <div className="flex items-center justify-center">
        <Image
          src="/svg/GearIcon.svg"
          alt="Gear Icon"
          className="relative left-6 top-1"
          style={{ zIndex: 1 }}
          width={32}
          height={48}
        />
        <Image
          src="/svg/GearIconBackground.svg"
          alt="Gear Icon Background"
          className="relative right-4 top-1"
          width={48}
          height={56}
        />
        <p
          className="text-white font-bold text-4xl py-32"
          style={{ letterSpacing: "0.13em" }}
        >
          Our Manufacturing Services
        </p>
      </div>
      <div className="px-40 pb-32">
        <ServiceDescription
          img={ClampsAndBracket}
          title="Clamps and Bracket"
          desc={[
            "J&M Line Support ",
            <strong key="bold">Clamps and Bracket</strong>,
            " solutions are utilized to support hydraulic, electrical and pneumatic systems in extreme environmental conditions (temperature variation, fluid exposure, vibration, etc).",
          ]}
          link="/line-clamps"
          float="left"
        />
        <ServiceDescription
          img={WireHarnesses}
          title="Wire Harnesses"
          desc="J&M Products manufactures a variety of wire harnesses serving a broad range of customers including class 8 trucks, aircraft systems, marine, medical, vehicle accessories, and utility body manufacturers."
          link="/wire-harnesses"
          float="right"
        />
      </div>
    </div>
  );
};

export default OurManufacturingServices;
