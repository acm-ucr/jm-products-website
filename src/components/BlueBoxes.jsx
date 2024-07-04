import React from "react";

const BlueBoxes = () => {
  return (
    <div className="flex justify-center bg-red-200 w-2/3 h-32 mx-auto">
      <div className="bg-sky-400 w-1/3 h-32 flex items-center justify-center">
        <p class="text-white font-medium">Box1</p>
      </div>
      <div className="bg-sky-700 w-1/3 h-32 flex items-center justify-center">
        <p class="text-white font-medium">Box2</p>
      </div>
      <div className="bg-sky-900 w-1/3 h-32 flex items-center justify-center">
        <p class="text-white font-medium">Box3</p>
      </div>
    </div>
  );
};

export default BlueBoxes;
