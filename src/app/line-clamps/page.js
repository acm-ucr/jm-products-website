import React from "react";
import Banner from "@/components/Banner";
import LineClamps from "@/components/clamps/LineClamps";
import BulletPoints from "@/components/BulletPoints";
import { partNumberSeriesData } from "@/data/PartNumberSeries.js";
const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Banner text="Line Support Clamps & Brackets" />
      <LineClamps />
      <BulletPoints
        title="Products / Major Part Number Series"
        data={partNumberSeriesData}
      />
    </div>
  );
};

export default page;
