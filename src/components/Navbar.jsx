import React from "react";
import Image from "next/image";
import Logo from "@/public/svg/J&MLogo.svg";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";

const Navigation = () => {
  return (
    <Navbar className="flex">
      <NavbarBrand className="p-3">
        <Image src={Logo} alt="Logo" className="w-full" />
      </NavbarBrand>
    </Navbar>
  );
};

export default Navigation;
