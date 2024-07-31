"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/svg/J&MLogo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { items } from "@/data/Nav";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [selected, setSelected] = useState("");

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      className="w-full min-h-[15vh] shadow-sm color-white flex justify-between items-center "
    >
      <Navbar.Brand className="p-0">
        <Link
          eventkey="1"
          className="p-0 flex items-center"
          href="/"
          onClick={() => setSelected("")}
        >
          <Image src={Logo} alt="JM-Logo" className="w-full min-h-[5vh] m-3 " />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle
        className="list-unstyled !text-transparent border-0"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className="text-black text-xl" />
      </Navbar.Toggle>
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="items-center lg:justify-end justify-center flex"
      >
        <Nav className="w-full no-underline font-normal my-2 flex items-center text-center text-md justify-end pr-5 gap-12">
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              onClick={() => setSelected(item.name)}
              className={`text-black tracking-widest font-javanese font-light hover:text-gray-600 hover:cursor-pointer ${
                selected === item.name ? "underline" : "no-underline"
              }`}
            >
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
