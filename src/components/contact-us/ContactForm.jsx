"use client";
import React from "react";
import FormButton from "@/components/FormButton";
import { useState } from "react";
import toast from "react-hot-toast";

const Form = () => {
  // const redirectUrl = "http://localhost:3000/contact-us";
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      {/* <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: "var submitted=false;",
        }}
      /> */}

      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (window.submitted) {
            setIsSubmitted(true);
            toast("Submitted ✅");
          }
        }}
      ></iframe>

      {isSubmitted ? (
        <div className="w-5/6 md:w-1/4 flex flex-col justify-center items-center gap-3 font-hk">
          <p>Thank you for your interest in JM Products!</p>
          <p>We will reach out soon!</p>
        </div>
      ) : (
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScjy5tMgxPdDUwz2i8nPiDRpg4gIXc0B-mlqOWeKNxps67xtw/formResponse"
          onSubmit={() => (window.submitted = true)}
          target="hidden_iframe"
          className="w-5/6 md:w-2/5 flex flex-col justify-center items-center gap-3 font-hk"
        >
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="block mb-2 text-2xl">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="entry.1264132223"
              placeholder="Your Name"
              className="w-full p-2  border-0 focus:outline-none"
              required
            />
            <hr className="w-full m-0 p-0" />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="block mb-2 text-2xl">
              Email*
            </label>
            <input
              type="text"
              id="email"
              name="entry.2057136594"
              placeholder="123@email.com"
              className="w-full p-2  border-0 focus:outline-none"
              required
            />
            <hr className="w-full m-0 p-0" />
          </div>

          <div className="flex flex-col w-full">
            <label className="block mb-1 text-2xl">
              I am interested in the following
            </label>
            <p className="text-gray-600 text-sm">
              (Please check all that apply):
            </p>
            <div className="flex flex-col gap-3 mt-3">
              <div className="flex flex-row w-fit items-center">
                <input
                  type="checkbox"
                  id="interestClamps"
                  name="entry.448925073"
                  value="Clamps"
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="interestClamps" className="ml-2 text-gray-700">
                  Clamps
                </label>
              </div>
              <div className="flex flex-row w-fit items-center ">
                <input
                  type="checkbox"
                  id="Wire Harnesses"
                  name="entry.448925073"
                  value="Wire Harnesses"
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="interestWire" className="ml-2 text-gray-700">
                  Wire Harnesses
                </label>
              </div>
              <div className="flex flex-row w-fit items-center ">
                <input
                  type="checkbox"
                  id="interestOther"
                  name="entry.448925073"
                  value="Other J&M Products Capabilities"
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="interestOther" className="ml-2 text-gray-700">
                  Other J&M Products Capabilities
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="address" className="block mb-2 text-2xl">
              Please add any additional comments or requests that would help us
              to serve you better:
            </label>
            <input
              type="text"
              id="notes"
              name="entry.1188008951"
              placeholder="Notes"
              className="w-full p-2 border-1"
            />
          </div>

          <FormButton />
        </form>
      )}
    </>
  );
};

export default Form;
