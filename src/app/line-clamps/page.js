import React from "react";
import Banner from "@/components/Banner";
import LineClamps from "@/components/clamps/LineClamps";
import PartNumberSeries from "@/components/clamps/PartNumberSeries";
import LogoStrip from "@/components/clamps/LogoStrip";


import BulletPoints from "@/components/BulletPoints";
import { partNumberSeriesData } from "@/data/PartNumberSeries.js";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Banner text="Line Support Clamps & Brackets" />
      <LineClamps />
      <PartNumberSeries />
      <LogoStrip />
      <BulletPoints
        title="Products / Major Part Number Series"
        headerSize={"text-3xl"}
        data={partNumberSeriesData}
      />
    </div>
  );
};

export default page;
