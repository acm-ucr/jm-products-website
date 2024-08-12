import React from "react";
import Banner from "@/components/Banner";
import Form from "@/components/RFQForm";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Banner text="Request For Quote" />
      <Form />
    </div>
  );
};

export default page;
