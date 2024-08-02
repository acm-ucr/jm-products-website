import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

import Logo from "@/public/svg/J&MLogo.svg";
import LandingBackground from "@/public/images/home/LandingBackground.webp";
import ClampBracket from "@/public/images/home/ClampsAndBracket.webp";
import WireHarness from "@/public/images/home/WireHarnesses.webp";
import LeftCable from "@/public/images/home/LeftCable.webp";
import LeftClamp from "@/public/images/home/LeftClamp.webp";
import LeftRoundClamp from "@/public/images/home/LeftRoundClamp.webp";
import LeftWires from "@/public/images/home/LeftWires.webp";
import RightCable from "@/public/images/home/RightCable.webp";
import RightCableWhite from "@/public/images/home/RightCableWhite.webp";
import RightClamp from "@/public/images/home/RightClamp.webp";
import RightJet from "@/public/images/home/RightJet.webp";

const Landing = () => {
  return (
    <div className="flex w-full h-screen items-center overflow-hidden">
      <Image
        src={LandingBackground}
        layout="fill"
        objectFit="fill"
        alt="Landing Background"
      />
      <div className="relative flex-auto h-full">
        <div className="absolute top-[30%] -left-[15%]">
          <div className="relative flex items-center justify-center size-[325px] bg-transparent border border-[#DDDDDD] rounded-full">
            <div className="absolute size-[75%] bg-transparent border border-[#DDDDDD] rounded-full"></div>
          </div>
        </div>
        <Image
          src={LeftCable}
          alt="Left Cable"
          className="absolute top-[21%] left-[16%] size-[250px]"
        />
        <Image
          src={LeftClamp}
          alt="Left Clamp"
          className="absolute top-[19%] -left-[32.5%] size-[325px]"
        />
        <Image
          src={LeftRoundClamp}
          alt="Left Round Clamp"
          className="absolute top-[44%] left-[35%] size-[275px]"
        />
        <Image
          src={LeftWires}
          alt="Left Wires"
          className="absolute top-[48%] -left-[5%] size-[250px]"
        />
      </div>
      <div className="relative flex-shrink-0 w-auto">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col items-center space-y-8">
            <Image src={Logo} alt="J&M Logo" className="w-full max-w-full" />
            <p className="font-normal font-hk text-3xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#3A4F85] to-[#8EA7C7]">
              The industry leader in
            </p>
          </div>
          <p className="font-bold font-hk text-3xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#3A4F85] to-[#8EA7C7]">
            Line Support Clamps & Wire Harnesses
          </p>
          <div className="flex space-x-10">
            <Button
              text="Learn More"
              link="/about"
              bgColor={"bg-white"}
              borderColor={"border-jm-blue-200"}
              textColor={"text-jm-blue-200"}
              hoverBg={"group hover:bg-jm-blue-200"}
              hoverText={"group-hover:text-white"}
            />
            <Button
              text="Contact Us"
              link="/contact-us"
              bgColor={"bg-jm-blue-200"}
              borderColor={"border-jm-blue-200"}
              textColor={"text-white"}
              hoverBg={"group hover:bg-white"}
              hoverText={"group-hover:text-jm-blue-200"}
            />
          </div>
          <div className="flex space-x-10">
            <Link href="/line-clamps" className="relative">
              <Image
                src={ClampBracket}
                alt="Clamps and Brackets"
                className="w-56 h-60 brightness-75"
              />
              <div className="absolute justify-center content-center top-14 inset-x-0 text-center">
                <p className="font-bold font-hk text-2xl text-white">
                  Clamps
                  <br />&<br />
                  Bracket
                </p>
              </div>
            </Link>
            <Link href="/wire-harnesses" className="relative">
              <Image
                src={WireHarness}
                alt="Wire Harnesses"
                className="w-56 h-60 brightness-75"
              />
              <div className="absolute justify-center content-center top-16 inset-x-0 text-center">
                <p className="font-bold font-hk text-2xl text-white">
                  Wire
                  <br />
                  Harnesses
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex-auto h-full">
        <div className="absolute top-[45%] -right-[28%]">
          <div className="relative flex items-center justify-center size-[400px] bg-transparent border border-[#DDDDDD] rounded-full">
            <div className="absolute size-[80%] bg-transparent border border-[#DDDDDD] rounded-full"></div>
          </div>
        </div>
        <Image
          src={RightCableWhite}
          alt="Right Cable White"
          className="absolute top-[18%] -right-[22.5%] size-[325px]"
        />
        <Image
          src={RightClamp}
          alt="Right Clamp"
          className="absolute top-[23%] right-[25%] size-[240px]"
        />
        <Image
          src={RightJet}
          alt="Right Jet"
          className="absolute top-[45%] right-[2%] size-[325px]"
        />
        <Image
          src={RightCable}
          alt="Right Cable"
          className="absolute top-[75%] right-[24%] size-[250px]"
        />
      </div>
    </div>
  );
};

export default Landing;
