import React from "react";

const BlueBoxes = ({ text1, text2, text3 }) => {
  return (
    <div className="flex justify-center items-center space-x-4 my-8">
      <div className="w-1/4 bg-blue-200 text-white text-center py-8 rounded">
        {" "}
        {text1}{" "}
      </div>
      <div className="w-1/4 bg-blue-600 text-white text-center py-8 rounded-full">
        {" "}
        {text2}{" "}
      </div>
      <div className="w-1/4 bg-blue-900 text-white text-center py-8 rounded">
        {" "}
        {text3}{" "}
      </div>
    </div>
  );
};

export default BlueBoxes;
