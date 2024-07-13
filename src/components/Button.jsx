import React from "react";
import Link from "next/link";

const Button = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="bg-white border-jm-blue-200 border-2 rounded-lg px-7 py-2.5 group hover:bg-jm-blue-200"
    >
      <p className="text-jm-blue-200 font-bold text-base tracking-widest text-center group-hover:text-white">
        {text}
      </p>
    </Link>
  );
};

export default Button;
