import React from "react";
import Description from "../Description";
import LineClamp1 from "@/public/images/lineclamps/LineClamp1.webp";
import LineClamp2 from "@/public/images/lineclamps/LineClamp2.webp";
import LineClamp3 from "@/public/images/lineclamps/LineClamp3.webp";
import LineClamp4 from "@/public/images/lineclamps/LineClamp4.webp";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";

const LineClamps = () => {
  return (
    <div className="flex items-center flex-col gap-10 px-3">
      <Description
        text={
          "J&M Products Line Support Clamps and Brackets are selected by major aerospace, transportation and industrial equipment manufacturers for use in widely varying applications including exposure to hydraulic, fuel, pneumatic and electrical systems."
        }
        img={LineClamp1}
      />
      <Description
        text={
          "Line clamps are available with or without cushion materials; clamps with cushion materials are typically utilized for vibration intense conditions. J&M Products utilize a wide variety of specialized elastomer cushion materials for use in extreme environments, such as exposure to fuel and hydraulic fluids with temperature fluctuations from 500°F. to -20°F."
        }
        img={LineClamp2}
        float={"right"}
      />
      <Description
        text={
          "Reliable, proven, off-the-shelf standard MS, NAS, AN and J&M Part numbers, J&M clamps provide fast economical methods of installing wire harnesses, hydraulic lines, or a variety of other applications. J&M line clamps are utilized by virtually every aircraft manufacturer and defense contractor. Heavy duty trucking, Space and Marine applications are also part of our product line."
        }
        img={LineClamp3}
      />
      <Description
        text={
          "J&M can customize any required mounting brackets where vibration or loads would exceed clamp, component design limits, or if compound angles are required. Brackets can include the installation of secondary fastening devices as required."
        }
        img={LineClamp4}
        float={"right"}
      />
      <div className="text-jm-blue-200 underline flex flex-row gap-3">
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
