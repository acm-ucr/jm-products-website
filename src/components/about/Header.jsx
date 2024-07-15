import React from "react";

const Header = ({ title }) => {
  return (
    <div className="mt-7 ml-7">
      <p className="font-hk bg-gradient-to-r from-jm-blue-300 to-jm-blue-100 bg-clip-text text-transparent text-5xl tracking-widest font-bold">
        WHO WE ARE
        {title}
      </p>
      <hr className="border-t-4 border-jm-blue-200 mt-0 w-3/4" />
    </div>
  );
};
r;
export default Header;
