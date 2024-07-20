import React from "react";

import Banner from "@/components/Banner";
import LineClamps from "@/components/clamps/LineClamps";
import PartNumberSeries from "@/components/clamps/PartNumberSeries";
const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Banner text="Line Support Clamps & Brackets" />
      <LineClamps />
      <PartNumberSeries />
    </div>
  );
};

export default page;
