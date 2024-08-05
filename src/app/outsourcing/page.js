import React from "react";
import Banner from "@/components/Banner";
import CustomerConcerns from "@/components/outsourcing/CustomerConcerns";
import Description from "@/components/Description";
import BlueText from "@/components/outsourcing/BlueText";
import ElectricalAssembly1 from "@/public/images/outsourcing/ElectricalAssembly1.png";
import ElectricalAssembly2 from "@/public/images/outsourcing/ElectricalAssembly2.png";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Banner text="Outsourcing" />
      <BlueText text="J&M Products recognizes the unique challenges customers face when outsourcing Wire Harness, Sub Assemblies and Box Builds." />
      <CustomerConcerns />
      <div className="w-3/4 xl:w-2/3">
        <Description
          text="J&M Products, with over 50 years of manufacturing experience, assists companies in addressing these challenges. Working from your product documentation or sample, our engineering staff will determine the manufacturability using the information provided. We will then make recommendations, if needed to update or create drawings to facilitate a smooth transition to our manufacturing facility."
          img={ElectricalAssembly1}
          float="right"
        />
      </div>
      <BlueText text="J&M can tailor a plan to incorporate any residual inventory that you may have as a result from building in-house." />
      <div className="w-3/4 xl:w-2/3">
        <Description
          text="Our engineering staff can also help to develop a Statement of Work. The SOW will provide details on how the work is to be performed. This includes specifications, requirements, standards and workflow. Quality control processes and measures are included plus all items that affect the work to be done."
          img={ElectricalAssembly2}
        />
      </div>
      <BlueText text="J&M is a highly competent manufacturer that can create a reliable, cost effective solution to complement your outsourcing strategy." />
    </div>
  );
};

export default page;
