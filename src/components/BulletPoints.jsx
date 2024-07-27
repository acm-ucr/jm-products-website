import React from "react";

const BulletPoints = ({ title, data }) => {
  return (
    <div className="w-2/3 gap-10 flex flex-col justify-center item">
      <div className="flex flex-col w-full">
        <p
          className={`font-hk bg-gradient-to-r from-jm-blue-300 to-jm-blue-100 bg-clip-text text-transparent text-2xl md:text-3xl tracking-widest font-bold`}
        >
          {title}
        </p>
        <hr className="border-t-4 border-jm-blue-200 w-full" />
      </div>
      <div className="flex justify-center">
        <ul className="text-left text-sm list-disc flex flex-col font-hk w-7/12 tracking-wider">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BulletPoints;
