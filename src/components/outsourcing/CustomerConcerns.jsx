import React from "react";

const CustomerConcerns = () => {
  return (
    <div className="w-3/4 xl:w-2/3 font-hk flex flex-col justify-center items-center gap-10">
      <h2 className="text-xl font-semibold w-full">
        Normal Customer Concerns:
      </h2>
      <ul className="list-disc space-y-1">
        <li className="text-sm">
          Our documentation doesn&apos;t always reflect the current state of the
          manufactured product.
        </li>
        <li className="text-sm">
          Engineering resources are often too thin to update specifications
          accordingly.
        </li>
        <li className="text-sm">
          Since we&apos;ve been building in house what do we do with our
          residual inventory?
        </li>
        <li className="text-sm">
          How do we convey to J&amp;M what our requirements are?
        </li>
      </ul>
    </div>
  );
};

export default CustomerConcerns;
