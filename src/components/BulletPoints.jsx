import React from "react";

const BulletPoints = ({ title, data }) => {
  return (
    <div className="w-5/6 lg:w-2/3 gap-10 flex flex-col justify-center item">
      <div className="flex flex-col w-full">
        <p
          className={`font-hk bg-gradient-to-r from-jm-blue-300 to-jm-blue-100 bg-clip-text text-transparent m-0 text-2xl md:text-3xl tracking-widest font-bold mb-1 p-1`}
        >
          {title}
        </p>
        <div className="border-t-4 border-solid border-jm-blue-200 w-full m-0" />
      </div>
      <div className="flex lg:justify-center ">
        <ul className="text-left text-xs lg:text-sm list-disc flex flex-col font-hk w-full lg:w-7/12 sm:gap-1 tracking-wider">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BulletPoints;
