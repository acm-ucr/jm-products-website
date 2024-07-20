import React from "react";
import Link from "next/link";

const Button = ({
  text,
  link,
  bgColor,
  borderColor,
  textColor,
  hoverBg,
  hoverText,
}) => {
  return (
    <Link
      href={link}
      className={`${bgColor} ${borderColor} border-2 rounded-lg px-7 py-2.5 ${hoverBg}`}
    >
      <p
        className={`${textColor} font-hk font-bold text-base tracking-widest text-center ${hoverText}`}
      >
        {text}
      </p>
    </Link>
  );
};

export default Button;
