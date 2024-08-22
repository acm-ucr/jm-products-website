import React from "react";
import Header from "./Header.jsx";
import JMaward1 from "@/public/images/about/whyJM/JMaward1.webp";
import JMaward2 from "@/public/images/about/whyJM/JMaward2.webp";
import JMbuilding from "@/public/images/about/whyJM/JMbuilding.webp";
import JMwarehouse from "@/public/images/about/whyJM/JMwarehouse.webp";
import Image from "next/image";

const WhyJM = () => {
  return (
    <div className="w-5/6 md:w-2/3 flex flex-col justify-center gap-6 md:gap-10 font-hk">
      <Header title="WHY J&M" size={"text-3xl"} />
      <div className="w-full flex flex-col justify-center items-end">
        <div className="w-full md:w-11/12 flex flex-col items-center justify-center gap-2 md:gap-4">
          <p>
            At J&M response time is a critical part of total customer
            satisfaction. We maintain a large inventory of finished parts ready
            for immediate shipment. Delivery of large quantities can be made to
            coincide with your critical production schedules.
          </p>
          <div className="flex flex-col items-center w-full">
            <div className="flex md:flex-row justify-center gap-2 md:gap-4 w-full">
              <Image src={JMbuilding} alt="Warehouse" className="w-1/2" />
              <Image
                src={JMwarehouse}
                alt="Building"
                className="w-1/2 md:w-1/3"
              />
            </div>
            <p className="mt-2 text-center">pictures of J&M warehouse</p>
          </div>

          <div className="w-full md:w-11/12 flex flex-col items-center justify-center gap-2 md:gap-4">
            <p>
              Requests for quote are handled in the same prompt manner. On our
              standard product line, pricing and delivery information can
              usually be given at the time of your request. Whether it is
              emailed, faxed, or sent through our website all quotations receive
              the same prompt attention.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-row w-full items-center justify-end">
              <div className="flex flex-row gap-2 justify-center w-full">
                <Image src={JMaward1} alt="Award1" className="w-2/5" />
                <Image src={JMaward2} alt="Award2" className="w-2/5" />
              </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <p className="md:text-left text-center w-full">
                Customer Satisfaction is our goal. For over 60 years J&M has
                provided a superior level of product performance with courteous
                and efficient customer service. We hope to develop and nurture a
                long term relationship with each of our customers. We are not
                satisfied until our customers are satisfied. Every time.
              </p>
              {/* <p className="text-left">
                Customer Satisfaction is our goal. For over 60 years J&M has
                provided a superior level of product performance with courteous
                and efficient customer service. We hope to develop and nurture a
                long term relationship with each of our customers. We are not
                satisfied until our customers are satisfied. Every time.
              </p> */}
            </div>
          </div>

          <div className="w-full md:w-11/12 flex flex-col items-center justify-center gap-2 md:gap-4">
            <p>
              We have a highly trained staff of QA personnel committed to
              ensuring the highest possible level of quality in the products we
              deliver. Our line support clamps are manufactured using the latest
              techniques ensuring they are made correctly every time. All
              harness personnel are extensively trained using WHMA/IPC-A-620
              acceptance criteria. The team approach is used to solve complex
              manufacturing issues and Lean Manufacturing principles are
              employed throughout the production cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJM;
