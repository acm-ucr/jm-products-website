import React from "react";
import Header from "./Header.jsx";
import PDFLink from "../PDFLink.jsx";
import { InformationData } from "@/data/Information.js";
const Information = () => {
  return (
    <div className="sm:w-2/3 lg:w-2/3 gap-10 flex flex-col justify-center p-10">
      <Header title="INFORMATIONS" size={"sm:text-6xl lg:text-5xl "} />
      <div className="sm:w-full lg:w-5/6 flex flex-col lg:justify-center lg:items-center gap-2 tracking-wider">
        {InformationData.map((item, index) => (
          <div key={index} className="sm:w-full lg:w-5/6 mb-3">
            <h3 className="font-bold text-base font-hk">{item.title}</h3>
            {item.points && (
              <ul className="sm:w-full lg:w-5/6 text-sm list-disc flex flex-col font-hk pl-12 tracking-wider gap-2.5">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    {point.url ? (
                      <PDFLink text={point.text} link={point.url}></PDFLink>
                    ) : (
                      <p> {point.text}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
