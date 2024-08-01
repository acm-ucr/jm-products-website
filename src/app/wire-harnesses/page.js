import React from "react";
import Banner from "@/components/Banner";
import Descriptions from "@/components/Descriptions";
import BulletPoints from "@/components/BulletPoints";
import { wireHarnessData } from "@/data/WireHarness.js";
import { harnessAssemblyData } from "@/data/HarnessAssembly.js";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Banner text="Wire Harness Manufacturing" />
      <Descriptions data={wireHarnessData} />
      <BulletPoints
        title="J&M Products Harness Assembly Overview"
        data={harnessAssemblyData}
      />
    </div>
  );
};

export default page;
