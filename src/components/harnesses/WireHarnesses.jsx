import React from "react";
import { data } from "@/data/HarnessAssembly.js";
import Description from "../Description";

const WireHarnesses = () => {
  return (
    <div className="mx-40 flex items-center flex-col gap-10 px-3">
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

export default WireHarnesses;
