import React from "react";

const FormButton = ({
  text,
  bgColor,
  borderColor,
  textColor,
  hoverBg,
  hoverText,
}) => {
  return (
    <button
      className={`${bgColor} ${borderColor} border-2 rounded-md px-2.5 py-1 ${hoverBg}`}
    >
      <p
        className={`${textColor} font-hk font-bold text-base tracking-widest text-center m-0 ${hoverText}`}
      >
        {text}
      </p>
    </button>
  );
};

export default FormButton;
