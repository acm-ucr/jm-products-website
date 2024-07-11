import React from "react";
import Image from "next/image";

const AboutJM = () => {
  return (
    <div className="flex">
      <Image
        src="/svg/AboutDecor.svg"
        alt="Placeholder"
        width={401}
        height={401}
        className="mr-4 mt-24 mb-12 pr-7 py-0.5"
      />
      <div className="mr-32 flex flex-col justify-center">
        <div className="flex">
          <Image
            src="/svg/AboutInfoIcon.svg"
            alt="Placeholder"
            width={60}
            height={60}
            className="mr-2.5"
          />
          <p className="mb-2 content-center text-4xl font-hk font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3A4F85] to-[#8EA7C7]">
            ABOUT J&M
          </p>
        </div>
        <p className="my-7 mx-16 font-hk text-xl font-normal">
          Since 1963, J&M Products has been a leading manufacturer of line
          support clamps, brackets and electrical wire harness assemblies.
          Recognized through multiple awards for high quality and on-time
          delivery excellence, J&M Products has been selected and retained by
          major aircraft, defense and transportation OEMs as a key supplier. J&M
          is AS9100 / ISO9001 and NADCAP certified.
        </p>
        <div className="flex justify-end">
          <div className="">Button</div>
        </div>
      </div>
    </div>
  );
};

export default AboutJM;
