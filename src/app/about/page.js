import WhoWeAre from "@/components/about/WhoWeAre";
import React from "react";
import WhyJM from "@/components/about/WhyJM";
import Information from "@/components/about/Information";
import Header from "@/components/about/Header";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center  gap-10">
      <WhoWeAre />
      <WhyJM />
      <Information />
      <Header />
    </div>
  );
};

export default page;
