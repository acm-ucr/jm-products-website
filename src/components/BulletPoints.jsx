import React from "react";
import Header from "./about/Header";

const BulletPoints = ({ title, headerSize, data }) => {
  return (
    <div className="w-2/3 gap-10 flex flex-col justify-center item">
      <Header title={title} size={headerSize} />
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

export default BulletPoints;
