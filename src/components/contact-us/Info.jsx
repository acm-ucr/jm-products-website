import React from "react";
import PDFLink from "@/components/PDFLink";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Info = () => {
  return (
    <div className="bg-jm-blue-300 h-4/6 w-2/5">
      <div className="m-4">
        <p className="text-white text-4xl font-semibold tracking-widest border-b pt-4 pb-1">
          INFO
        </p>
        <p className="text-white text-sm my-2 tracking-widest">
          how to find J&M
        </p>
        <div className="flex flex-row items-center gap-2">
          <FaLocationDot className="w-5 text-white" />
          <p className="text-white font-bold text-sm tracking-widest">
            Mailing Address:
          </p>
        </div>
        <div className="ml-3 my-2">
          <p className="text-white text-sm tracking-widest">
            J&M Products, Inc.
            <br />
            1647 Truman Street
            <br />
            San Fernando, CA 91340-3119
            <br />
            United States of America
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <IoMdMail className="w-5 text-white" />
          <p className="text-white font-bold text-sm tracking-widest">Email:</p>
        </div>
        <div className="ml-3 my-2">
          <p className="text-white text-sm tracking-widest">
            <strong>General Information:</strong> <u>info@jmproducts.com</u>
            <br />
            <strong>Sales:</strong> <u>sales@jmproducts.com</u>
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <FaPhone className="w-5 text-white" />
          <p className="text-white font-bold text-sm tracking-widest">
            Phone/Fax:
          </p>
        </div>
        <div className="ml-3 my-2">
          <p className="text-white text-sm tracking-widest">
            <strong>Phone:</strong> +1-818-837-0205
            <br />
            <strong>Toll Free:</strong> +1-800-624-2198
            <br />
            <strong>Fax:</strong> +1-818-837-0250
          </p>
        </div>
        <div className="ml-5">
          <PDFLink
            text="Standard Terms and Conditions"
            link="http://www.jmproducts.com/JMPdocs/JMPstdTC.pdf"
            textColor={"text-white"}
            hoverColor={"hover:!text-slate-300"}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
