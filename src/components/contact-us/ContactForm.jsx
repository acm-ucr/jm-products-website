import React from "react";
import FormButton from "@/components/FormButton";

const Form = () => {
  return (
    <form className="w-5/6 md:w-1/4 flex flex-col justify-center items-center gap-3 font-hk">
      <div className="flex flex-col w-full">
        <label htmlFor="name" className="block mb-2 text-2xl">
          Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
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
          name="email"
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
        <p className="text-gray-600 text-sm">(Please check all that apply):</p>
        <div className="flex flex-col gap-3 mt-3">
          <div className="flex flex-row w-fit items-center">
            <input
              type="checkbox"
              id="interestClamps"
              name="interestClamps"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="interestClamps" className="ml-2 text-gray-700">
              Clamps
            </label>
          </div>
          <div className="flex flex-row w-fit items-center ">
            <input
              type="checkbox"
              id="interestWire"
              name="interestWire"
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
              name="interestOther"
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
          Please add any additional comments or requests that would help us to
          serve you better:
        </label>
        <input
          type="text"
          id="notes"
          name="notes"
          placeholder="Notes"
          className="w-full p-2 border-1"
        />
      </div>
      <FormButton />
    </form>
  );
};

export default Form;
