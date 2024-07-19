import React from "react";
import Banner from "@/components/Banner";
import CustomerConcerns from "@/components/outsourcing/CustomerConcerns";
import Description from "@/components/Description";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Banner text="Outsourcing" />
      <CustomerConcerns />
      <Description />
    </div>
  );
};

export default page;
