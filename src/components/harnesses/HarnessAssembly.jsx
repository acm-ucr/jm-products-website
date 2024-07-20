import React from "react";
import { data } from "@/data/HarnessAssembly.js";
import Header from "../about/Header.jsx";

const HarnessAssembly = () => {
  return (
    <div className="w-2/3 gap-10 flex flex-col justify-center">
      <Header
        title="J&M Products Harness Assembly Overview"
        size={"text-3xl"}
      />
      <div className="flex justify-center">
        <ul className="text-left text-sm list-disc flex flex-col font-hk w-7/12 tracking-wider">
          {data.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HarnessAssembly;
