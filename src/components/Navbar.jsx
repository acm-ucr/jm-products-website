"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/svg/J&MLogo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { items } from "@/data/Nav";

const Navigation = () => {
  const [selected, setSelected] = useState("");

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="md"
      className="w-full shadow-sm color-white justify-between"
    >
      <Navbar.Brand>
        <Link
          eventkey="1"
          className="p-0 flex items-center"
          href="/"
          onClick={() => setSelected("")}
        >
          <Image
            src={Logo}
            alt="JM-Logo"
            className="w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/12 p-3"
          />
        </Link>
      </Navbar.Brand>

      <Nav className="w-full flex gap-12 justify-end pr-3 no-underline">
        {items.map((item, index) => (
          <Nav.Link
            as={Link}
            key={index}
            href={item.link}
            onClick={() => setSelected(item.name)}
            className={`text-black tracking-widest font-javanese font-medium hover:text-gray-600 hover:cursor-pointer ${
              selected === item.name ? "underline" : "no-underline"
            }`}
          >
            {item.name}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
