import React from "react";
import logo from "@/public/svg/J&MLogo.svg";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full grid grid-cols-3 grid-rows-2 py-5 px-10 gap-2 font-javanese text-sm leading-5">
      <div className="grid grid-cols-subgrid gap-4 col-span-3">
        <div className="flex justify-center col-start-2 h-11">
          <Image alt="logo" src={logo} className="object-contain" />
        </div>
      </div>
      <div>
        <p>J&M Products Inc., 1647 Truman Street,</p>
        <p>San Fernando, CA 91340</p>
      </div>
      <div className="flex flex-col items-center">
        <p>Copyright ©2003-2024, J&M Products, Inc.</p>
        <p>All Rights Reserved.</p>
      </div>
      <div className="flex flex-col items-end">
        <div>
          sales@jmproducts.com <FaInstagram className=" inline" />
        </div>
        <div>
          +1-800-624-2198 <FaLinkedin className=" inline" />
        </div>
        <div>
          +1-818-837-0205 <AiFillFacebook className=" inline" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
