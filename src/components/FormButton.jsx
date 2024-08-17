import React from "react";

const FormButton = () => {
  return (
    <input
      type="submit"
      value="SEND MESSAGE"
      className={`bg-gradient-to-r from-jm-blue-200 to-jm-blue-300 border-2
        rounded-md px-2.5 py-1 group hover:!bg-none text-white font-hk 
        font-bold text-base tracking-widest text-center m-0 hover:!text-jm-blue-200 hover:!border-jm-blue-200`}
    />
  );
};

export default FormButton;
