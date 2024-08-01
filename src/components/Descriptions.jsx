import React from "react";
import Description from "./Description";

const Descriptions = ({ data }) => {
  return (
    <div className="flex items-center flex-col gap-10 w-3/4 sm:w-2/3">
      {data &&
        data.map((item, index) => (
          <Description
            key={index}
            text={item.text}
            img={item.img}
            float={item.float}
          />
        ))}
    </div>
  );
};

export default Descriptions;
