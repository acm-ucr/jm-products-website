import React from "react";
import Form from "@/components/contact-us/ContactForm";
import Info from "@/components/contact-us/Info";

const page = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
      <Form />
      <Info />
    </div>
  );
};

export default page;
