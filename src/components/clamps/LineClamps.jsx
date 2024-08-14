import React from "react";
import Descriptions from "../Descriptions";
import { lineClampsData } from "@/data/LineClamps.js";
import PDFLink from "../PDFLink";
const LineClamps = () => {
  return (
    <div className="flex items-center flex-col gap-10">
      <Descriptions data={lineClampsData} />
      <PDFLink
        text={"View Our Clamp Catalog"}
        link={"http://www.jmproducts.com/JMPdocs/JMPcatalogue2001.pdf"}
        textColor={"text-jm-blue-200"}
        hoverColor={"hover:!text-jm-blue-300"}
      />
    </div>
  );
};

export default LineClamps;
