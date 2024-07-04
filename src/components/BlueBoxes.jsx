import React from "react";

// Props go here
const BlueBoxes = () => {
  return (
    <div className="flex justify-center">
      <div className=" bg-red-200 w-2/3 h-32">
        <div className="flex justify-center gap-4">
          <div className="bg-indigo-200 text-white w-1/3 h-32 justify-center flex items-center">
            <p className="font-bold">Box1</p>
          </div>
          <div className="bg-indigo-400 text-white w-1/3 h-32 rounded-full justify-center flex items-center">
            <p className="font-bold">Box2</p>
          </div>
          <div className="bg-indigo-800 text-white w-1/3 h-32 justify-center flex items-center">
            <p className="font-bold">Box3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueBoxes;
