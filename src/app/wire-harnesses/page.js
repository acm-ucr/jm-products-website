import WireHarnesses from "@/components/harnesses/WireHarnesses";
import React from "react";

import HarnessAssembly from "@/components/harnesses/HarnessAssembly";
import Banner from "@/components/Banner";
const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Banner />
      <WireHarnesses />
      <HarnessAssembly />
    </div>
  );
};

export default page;
