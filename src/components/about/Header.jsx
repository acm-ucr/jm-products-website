import React from "react";

const Header = ({ title }) => {
  return (
    <div className="mt-8 ml-8">
      <p className="font-sans-hk text-[48px] font-bold tracking-widest text-jm-blue-200">
        WHO WE ARE
        {title}
      </p>
      <hr className="border-t-2 border-jm-blue-200 mt-2 w-3/4" />
    </div>
  );
};

export default Header;
