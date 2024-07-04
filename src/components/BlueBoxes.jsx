import React from "react";

// Props go here
const BlueBoxes = ({ text1, text2, text3 }) => {
  return (
    <div className="bg-red-200 w-2/3 h-32 flex justify-center items-center">
      <div className="bg-jm-blue-100 w-1/3 h-32 flex justify-center items-center">
        <p className="text-white text-lg font-bold">{text1}</p>
      </div>
      <div className="bg-jm-blue-200 w-72 h-32 flex justify-center items-center rounded-full mx-auto">
        <p className="text-white text-lg font-bold">{text2}</p>
      </div>
      <div className="bg-jm-blue-300 w-1/3 h-32 flex justify-center items-center">
        <p className="text-white text-lg font-bold">{text3}</p>
      </div>
    </div>
  );
};

export default BlueBoxes;
