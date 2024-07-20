import React from "react";
import { data } from "../../data/HarnessAssembly.js";

const HarnessAssembly = () => {
  return (
    <div>
      <h1 className="font-hk flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-jm-blue-300 via-jm-blue-200 to-jm-blue-100 text-3xl mb-6 tracking-wide underline-offset-8 whitespace-break-spaces underline decoration-jm-blue-200 ">
        <b>J&M Products Harness Assembly Overview </b>
      </h1>
      <div className="flex justify-center">
        <ul className="text-left text-sm list-disc flex flex-col font-hk w-5/12 tracking-wider">
          {data.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HarnessAssembly;
