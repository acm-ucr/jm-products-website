import React from "react";

const Header = ({ title }) => {
  return (
    <div className="flex flex-col w-full">
      <p
        className={`font-hk bg-gradient-to-r from-jm-blue-300 mb-1 p-1 to-jm-blue-100 bg-clip-text text-transparent text-2xl md:text-5xl tracking-widest font-bold`}
      >
        {title}
      </p>
      <div className="border-t-4 border-jm-blue-200 w-full m-0" />
    </div>
  );
};

export default Header;
