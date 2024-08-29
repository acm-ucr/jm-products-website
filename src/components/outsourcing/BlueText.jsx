import React from "react";

const BlueText = ({ text }) => {
  return (
    <div className="w-3/4 xl:w-2/3 font-hk flex flex-col justify-center items-center gap-10 text-jm-blue-300 md:text-2xl text-xl">
      {text}
    </div>
  );
};

export default BlueText;
