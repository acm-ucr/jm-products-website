import React from "react";
import logo from "@/public/svg/J&MLogo.svg";
import Image from "next/image";
import { data } from "../data/Footer";
import Link from "next/link";

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
      <div className="flex flex-col items-end justify-center">
        <div className="flex flex-col justify-end gap-1">
          {data.map((item, index) => (
            <div key={index} className="flex flex-row gap-2 justify-end">
              {index === 0 ? (
                <Link
                  className="hover:underline no-underline text-black m-0"
                  href="mailto:sales@jmproducts.com"
                >
                  {item.contact}
                </Link>
              ) : (
                <p className="m-0">{item.contact}</p>
              )}
              <Link
                key={index}
                href={item.link}
                target="_blank"
                className="hover:-translate-y-0.5 text-black"
              >
                {item.icon}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
