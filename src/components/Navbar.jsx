"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/svg/J&MLogo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { items } from "@/data/Nav";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const pathName = usePathname();

  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      className="w-full md:min-h-[7vh] lg:min-h-[9vh] bg-white shadow-sm color-white flex justify-between items-center"
    >
      <Navbar.Brand className="p-0">
        <Link className="p-0 flex items-center" href="/">
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
        <Nav className="w-full no-underline font-normal flex items-center text-center text-sm lg:text-base justify-end pr-5 gap-10">
          {items.map(({ name, link }, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={link}
              className={`text-black tracking-widest font-javanese font-light hover:underline ${
                pathName === link ? "underline" : "no-underline"
              }`}
            >
              {name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
