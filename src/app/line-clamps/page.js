import React from "react";
import Banner from "@/components/Banner";
import LineClamps from "@/components/clamps/LineClamps";
import PartNumberSeries from "@/components/clamps/PartNumberSeries";
import LogoStrip from "@/components/clamps/LogoStrip";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Banner />
      <LineClamps />
      <PartNumberSeries />
      <LogoStrip />
    </div>
  );
};

export default page;
