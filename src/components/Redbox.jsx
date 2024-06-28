import React from "react";

const Redbox = ({ text }) => {
  return (
    <div className="w-32 h-32 bg-red-300 flex justify-center items-center border-black border-4">
      <p className="text-white text-xl">{text}</p>
    </div>
  );
};

export default Redbox;
