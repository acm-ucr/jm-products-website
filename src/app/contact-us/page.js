import React from "react";
import Form from "@/components/contact-us/ContactForm";
import Info from "@/components/contact-us/Info";
import ContactHeader from "@/components/contact-us/ContactHeader";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-evenly items-center sm:gap-0 gap-20 relative">
      <div className="flex flex-col items-center justify-center">
        <ContactHeader />
        <Form />
      </div>
      <Info />
    </div>
  );
};

export default page;
