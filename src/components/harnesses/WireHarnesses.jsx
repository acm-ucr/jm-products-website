import React from "react";
import Description from "../Description";
import WireHarness1 from "@/public/images/wireharness/WireHarness1.webp";
import WireHarness2 from "@/public/images/wireharness/WireHarness2.webp";
import WireHarness3 from "@/public/images/wireharness/WireHarness3.webp";
import WireHarness4 from "@/public/images/wireharness/WireHarness4.webp";

const WireHarnesses = () => {
  return (
    <div className="flex items-center flex-col gap-10 px-3">
      <Description
        text={
          "J&M Products manufactures a variety of wire harnesses serving a broad range of customers including class 8 trucks, aircraft systems, marine, medical, vehicle accessories, and utility body manufacturers. We have the capability to manufacture wire harnesses from 18 gauge to 30 gauge wire. Our wire harnesses are manufactured to meet the requirements of the customer and are built to IPC/WHMA-A-620B Class 2 standards"
        }
        img={WireHarness1}
      />
      <Description
        text={
          "Wire harnesses are highly cutomized to the application per customer specifications: J&M can provide expert assistance during the prototyping and short run phase, ahead of production volumes."
        }
        img={WireHarness2}
        float={"right"}
      />
      <Description
        text={
          "Utilizing efficient manufacturing techniques, including in-house tooling capabilities, injection molding, and the latest in wire cutting, braiding, marking, and terminating equipment, J&M provides high quality harness solutions with minimal lead-times."
        }
        img={WireHarness3}
      />
      <Description
        text={
          "Offering flexible solutions tailored to the customer, we have the technologies, expertise, and infrastructure to carry out build-to-print projects with the efficiency and responsiveness that customers expect. Out manufacturing engineers are involved as needed throughout the process to facilitate manufacturability, maximize cost-savings through material recommendations, and minimize waste."
        }
        img={WireHarness4}
        float={"right"}
      />
    </div>
  );
};

export default WireHarnesses;
