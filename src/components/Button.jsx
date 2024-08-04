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
  onClick,
}) => {
  if (link) {
    return (
      <Link
        href={link}
        className={`${bgColor} ${borderColor} border-2 rounded-lg px-7 no-underline py-2.5 ${hoverBg}`}
      >
        <p
          className={`${textColor} font-hk font-bold text-base tracking-widest m-0 text-center ${hoverText}`}
        >
          {text}
        </p>
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`${bgColor} ${borderColor} border-2 rounded-lg px-7 py-2.5 ${hoverBg}`}
      >
        <p
          className={`${textColor} font-hk font-bold text-base tracking-widest text-center m-0 ${hoverText}`}
        >
          {text}
        </p>
      </button>
    );
  }
};

export default Button;
