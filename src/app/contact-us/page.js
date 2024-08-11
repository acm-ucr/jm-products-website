import React from "react";
import FormButton from "@/components/FormButton";

const page = () => {
  return (
    <div>
      <FormButton
        text="SEND MESSAGE"
        bgColor={"bg-jm-blue-200"}
        borderColor={"border-jm-blue-200"}
        textColor={"text-white"}
        hoverBg={"group hover:!bg-white"}
        hoverText={"group-hover:!text-jm-blue-200"}
      />
    </div>
  );
};

export default page;
