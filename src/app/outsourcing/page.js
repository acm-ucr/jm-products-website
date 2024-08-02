import React from "react";
import Banner from "@/components/Banner";
import CustomerConcerns from "@/components/outsourcing/CustomerConcerns";
import Description from "@/components/Description";
import BlueText from "@/components/outsourcing/BlueText";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Banner text="Outsourcing" />
      <BlueText text="J&M Products recognizes the unique challenges customers face when outsourcing Wire Harness, Sub Assemblies and Box Builds." />
      <CustomerConcerns />
      <Description />
      <BlueText />
      <Description />
      <BlueText />
    </div>
  );
};

export default page;
