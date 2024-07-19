import React from "react";

const CustomerConcerns = () => {
  return (
    <div className="bg-transparent">
      <h2 className="text-xl font-semibold mb-10 pl-1">
        Normal Customer Concerns:
      </h2>
      <ul className="list-disc pl-5 space-y-1 ml-20">
        <li className="text-sm">
          Our documentation doesn&apos;t always reflect the current state of the
          <br /> manufactured product.
        </li>
        <li className="text-sm">
          Engineering resources are often too thin to update specifications
          <br /> accordingly.
        </li>
        <li className="text-sm">
          Since we&apos;ve been building in house what do we do with our
          residual
          <br /> inventory?
        </li>
        <li className="text-sm">
          How do we convey to J&amp;M what our requirements are?
        </li>
      </ul>
    </div>
  );
};

export default CustomerConcerns;
