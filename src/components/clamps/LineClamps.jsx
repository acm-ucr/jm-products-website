import React from "react";
import Description from "../Description";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";
import { Clamps } from "@/data/LineClamps";

const LineClamps = () => {
  return (
    <div className="flex items-center flex-col gap-10 px-3">
      {Clamps.map((DESC, index) => (
        <Description
          text={DESC.text}
          img={DESC.img}
          float={DESC.float}
          key={index}
        />
      ))}

      <div className="text-jm-blue-200 underline flex flex-row gap-3 hover:text-jm-blue-300">
        <Link
          href="http://www.jmproducts.com/JMPdocs/JMPcatalogue2001.pdf"
          target="_blank"
        >
          View Our Clamp Catalog
        </Link>
        <IoDocumentTextOutline />
      </div>
    </div>
  );
};

export default LineClamps;
