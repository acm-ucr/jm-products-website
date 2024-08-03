import React from "react";
import Image from "next/image";
import GearIcon from "@/public/svg/GearIcon.svg";
import GearIconBg from "@/public/svg/GearIconBackground.svg";
import ServiceDescription from "@/components/home/ServiceDescription";
import ClampsAndBracket from "@/public/images/home/ClampsAndBracket.webp";
import WireHarnesses from "@/public/images/home/WireHarnesses.webp";

const OurManufacturingServices = () => {
  return (
    <div className="w-full bg-jm-blue-200 flex justify-center items-center">
      <div className="w-5/6 flex flex-col items-center justify-center gap-24 py-24">
        <div className="flex items-center justify-center">
          <div className="relative w-20 h-20 flex justify-center items-center top-0.5">
            <Image
              src={GearIconBg}
              alt="Gear Icon Background"
              className="absolute"
            />
            <Image src={GearIcon} alt="Gear Icon" className="relative z-10" />
          </div>
          <div>
            <p className="text-white font-bold sm:text-4xl text-xl text-center tracking-widest">
              Our Manufacturing Services
            </p>
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
