import React from "react";

const Form = () => {
  return (
    <form className="w-1/2 flex flex-col justify-center items-start gap-3 font-hk">
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
        <label htmlFor="title" className="block mb-2 text-2xl">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Ms/Mr"
          className="w-full p-2  border-0 focus:outline-none"
        />
        <hr className="w-full m-0 p-0" />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="phone" className="block mb-2 text-2xl">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="123-456-7890"
          className="w-full p-2  border-0 focus:outline-none"
        />
        <hr className="w-full m-0 p-0" />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="fax" className="block mb-2 text-2xl">
          Fax
        </label>
        <input
          type="text"
          id="fax"
          name="fax"
          placeholder="123-456-7890"
          className="w-full p-2  border-0 focus:outline-none"
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
        <label htmlFor="address" className="block mb-2 text-2xl">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Your address"
          className="w-full p-2  border-1 "
        />
        {/* <hr className='w-full m-0 p-0'/> */}
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="state" className="block mb-2 text-2xl">
          State
        </label>
        <input
          type="text"
          id="state"
          name="state"
          placeholder="CA"
          className="w-full p-2 border-0 focus:outline-none"
        />
        <hr className="w-full m-0 p-0" />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="zip-code" className="block mb-2 text-2xl">
          ZIP code
        </label>
        <input
          type="text"
          id="zip-code"
          name="zip-code"
          placeholder="123456"
          className="w-full p-2 border-0 focus:outline-none"
        />
        <hr className="w-full m-0 p-0" />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="country" className="block mb-2 text-2xl">
          Country
        </label>
        <input
          type="text"
          id="country"
          name="country"
          placeholder="United States"
          className="w-full p-2 border-0 focus:outline-none"
        />
        <hr className="w-full m-0 p-0" />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="address" className="block mb-2 text-2xl">
          General Description of Request
        </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Request"
          className="w-full p-2  border-1 "
        />
        {/* <hr className='w-full m-0 p-0'/> */}
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="part-numbers" className="block mb-2 text-2xl">
          Part Numbers
        </label>
        <input
          type="text"
          id="part-numbers"
          name="part-numbers"
          placeholder="Part Numbers"
          className="w-full p-2 border-0 focus:outline-none"
        />
        <hr className="w-full m-0 p-0" />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="initial-quantity" className="block mb-2 text-2xl">
          Initial Quantity
        </label>
        <input
          type="text"
          id="initial-quantity"
          name="initial-quantity"
          placeholder="Quantity"
          className="w-full p-2 border-0 focus:outline-none"
        />
        <hr className="w-full m-0 p-0" />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="required-delivery" className="block mb-2 text-2xl">
          Required Delivery
        </label>
        <input
          type="text"
          id="required-delivery"
          name="required-delivery"
          placeholder="Required Delivery"
          className="w-full p-2 border-0 focus:outline-none"
        />
        <hr className="w-full m-0 p-0" />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="long-term-delivery" className="block mb-2 text-2xl">
          Potential Long Term Delivery
        </label>
        <input
          type="text"
          id="long-term-delivery"
          name="long-term-delivery"
          placeholder="Potential Long Term Delivery"
          className="w-full p-2 border-0 focus:outline-none"
        />
        <hr className="w-full m-0 p-0" />
      </div>
      {/* <div className='flex flex-col w-full items-start'>
        <label htmlFor="long-term-delivery" className='block mb-2 text-2xl'>Perfered Method of Contact<br/><p className='text-sm ml-1'>Please check all that apply:</p></label>
        <input type="checkbox" id="long-term-delivery" name="long-term-delivery" placeholder="Potential Long Term Delivery" className='p-2'  />
      </div> */}
      <div className="flex flex-col w-full">
        <label className="block mb-1 text-2xl">
          Preferred forms of Contact
        </label>
        <p className="text-gray-600 text-sm">(Please check all that apply):</p>
        <div className="flex flex-row gap-3">
          <div className="flex flex-row w-fit items-center">
            <input
              type="checkbox"
              id="contactEmail"
              name="contactEmail"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="contactEmail" className="ml-2 text-gray-700">
              Email
            </label>
          </div>
          <div className="flex flex-row w-fit items-center ">
            <input
              type="checkbox"
              id="contactPhone"
              name="contactPhone"
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="contactPhone" className="ml-2 text-gray-700">
              Phone
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label className="block mb-1 text-2xl">
          I am interested in the following
        </label>
        <p className="text-gray-600 text-sm">(Please check all that apply):</p>
        <div className="flex flex-row gap-3">
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
          serve you better
        </label>
        <input
          type="text"
          id="notes"
          name="notes"
          placeholder="Notes"
          className="w-full p-2 border-1 "
        />
        {/* <hr className='w-full m-0 p-0'/> */}
      </div>
    </form>
  );
};

export default Form;
