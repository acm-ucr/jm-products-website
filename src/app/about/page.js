import WhoWeAre from "@/components/about/WhoWeAre";
import React from "react";
import WhyJM from "@/components/about/WhyJM";
import Information from "@/components/about/Information";
import AboutJMHex from "@/components/about/AboutJMHex";
const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <AboutJMHex />
      <WhoWeAre />
      <WhyJM />
      <Information />
    </div>
  );
};

export default page;
