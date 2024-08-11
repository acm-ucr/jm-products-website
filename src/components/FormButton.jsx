import React from "react";

const FormButton = () => {
  return (
    <button
      className={`bg-jm-blue-200 border-jm-blue-200 border-2 rounded-md px-2.5 py-1 group hover:!bg-white`}
    >
      <p
        className={`text-white font-hk font-bold text-base tracking-widest text-center m-0 group-hover:!text-jm-blue-200`}
      >
        SEND MESSAGE
      </p>
    </button>
  );
};

export default FormButton;
