import React from "react";
import { data } from "@/data/WireHarness.js";
import Description from "../Description";

const WireHarnesses = () => {
  return (
    <div className="flex items-center flex-col gap-10 px-3">
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
