import WhoWeAre from "@/components/about/WhoWeAre";
import React from "react";
import WhyJM from "@/components/about/WhyJM";
import Information from "@/components/about/Information";
import HexLogo from "@/components/about/HexLogo";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <HexLogo />
      <WhoWeAre />
      <WhyJM />
      <Information />
    </div>
  );
};

export default page;
