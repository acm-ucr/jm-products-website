import React from "react";

const HarnessAssembly = () => {
  return (
    <div>
      <h1 className="font-sans flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-jm-blue-300 via-jm-blue-200 to-jm-blue-100 text-3xl mb-6 tracking-wide underline-offset-8 whitespace-break-spaces underline decoration-jm-blue-200 ">
        <b>J&M Products Harness Assembly Overview </b>
      </h1>
      <div className="flex justify-center">
        <ul className=" text-left text-sm list-disc flex flex-col font-sans w-5/12 tracking-wider">
          <li>
            {" "}
            Assemblies ranging from simple and single end terminated harnesses
            to multi-leg harnesses.
          </li>
          <li>Operators trained to all aspects of IPC-WHMA-A620.</li>
          <li>
            {" "}
            Harnesses are 100% electrically tested using the latest in test
            technology.
          </li>
          <li>
            {" "}
            Testing includes HI-POT. Insulation resistance, connection
            resistance, continuity, component verification and measurement.
          </li>
          <li>
            {" "}
            Familiar with virtually all types of Aerospace & Military Connectors
            such as D38999 / MIL-DTL-38999 / MIL-C-38999, M24308 / MIL-DTL-24308
            / MIL-C-24308 / MIL-PRF-24308, MIL-DTL-26482 /MIL-C-26482, and
            MIL-DTL-5015 / MIL-C-5015.
          </li>
          <li>
            {" "}
            Familiar with many types of commercial/industrial connectors from
            companies such as Deutsch, Molex, TE connectivity, Packard, JST,
            etc.
          </li>
          <li>Automated Cut & Strip Wire Processing Machine</li>
          <li>Wire hot stamping</li>
          <li>Pneumatic wire stripping</li>
          <li> Pneumatic contact crimping</li>
          <li> Crimp pull testing & crimp height verification </li>
          <li>
            {" "}
            Wide selection of labeling capabilities including Thermal, Dot
            Matrix, TYCO TMS (M23053), WH Brady Marking, etc
          </li>
          <li> Electro-Mechanical Assembly</li>
          <li> Overbraiding Capability</li>
          <li>
            {" "}
            Overmolding/Potting - Ability to overmold breakouts molded strain
            reliefs, grommets & components and to encapsulate via a variety of
            potting compounds{" "}
          </li>
          <li> Box Build Capability</li>
          <li> Prototyping</li>
          <li> Short Run Production</li>
        </ul>
      </div>
    </div>
  );
};

export default HarnessAssembly;
