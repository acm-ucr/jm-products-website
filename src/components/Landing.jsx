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
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={LandingBackground}
        alt="Landing Background"
        className="absolute bottom-[100px] -z-10"
      />
      <div className="absolute top-[5px] md:top-[10px] 2xl:top-[153px] -left-[60px] md:-left-[120px] 2xl:-left-[107px]">
        <div className="relative flex items-center justify-center size-[100px] md:size-[200px] 2xl:size-[288px] bg-transparent border border-[#DDDDDD] rounded-full">
          <div className="absolute size-[75%] 2xl:size-[80%] bg-transparent border border-[#DDDDDD] rounded-full"></div>
        </div>
      </div>
      <Image
        src={LeftCable}
        alt="Left Cable"
        className="absolute -top-[15px] md:-top-[30px] 2xl:top-[90px] left-[5px] md:left-[10px] 2xl:left-[80px] w-[65px] md:w-[130px] 2xl:w-[195px]"
      />
      <Image
        src={LeftClamp}
        alt="Left Clamp"
        className="absolute -top-[20px] md:-top-[40px] 2xl:top-[75px] -left-[70px] md:-left-[140px] 2xl:-left-[160px] w-[90px] md:w-[180px] 2xl:w-[270px]"
      />
      <Image
        src={LeftRoundClamp}
        alt="Left Round Clamp"
        className="absolute top-[40px] md:top-[80px] 2xl:top-[250px] left-[35px] md:left-[70px] 2xl:left-[175px] w-[70px] md:w-[140px] 2xl:w-[210px]"
      />
      <Image
        src={LeftWires}
        alt="Left Wires"
        className="absolute top-[50px] md:top-[100px] 2xl:top-[270px] -left-[25px] md:-left-[50px] 2xl:-left-[20px] w-[65px] md:w-[130px] 2xl:w-[195px]"
      />
      <div className="absolute top-[30px] md:top-[60px] 2xl:top-[316px] -right-[70px] md:-right-[140px] 2xl:-right-[116px]">
        <div className="relative flex items-center justify-center size-[100px] md:size-[200px] 2xl:size-[288px] bg-transparent border border-[#DDDDDD] rounded-full">
          <div className="absolute size-[75%] 2xl:size-[80%] bg-transparent border border-[#DDDDDD] rounded-full"></div>
        </div>
      </div>
      <Image
        src={RightCableWhite}
        alt="Right Cable White"
        className="absolute -top-[35px] md:-top-[70px] 2xl:top-[105px] -right-[70px] md:-right-[140px] 2xl:-right-[115px] w-[90px] md:w-[180px] 2xl:w-[270px]"
      />
      <Image
        src={RightClamp}
        alt="Right Clamp"
        className="absolute -top-[20px] md:-top-[40px] 2xl:top-[145px] right-[10px] md:right-[20px] 2xl:right-[125px] w-[65px] md:w-[130px] 2xl:w-[195px]"
      />
      <Image
        src={RightJet}
        alt="Right Jet"
        className="absolute top-[30px] md:top-[60px] 2xl:top-[300px] -right-[30px] md:-right-[60px] 2xl:right-[10px] w-[90px] md:w-[180px] 2xl:w-[270px]"
      />
      <Image
        src={RightCable}
        alt="Right Cable"
        className="absolute top-[100px] md:top-[200px] 2xl:top-[510px] right-[15px] md:right-[30px] 2xl:right-[130px] w-[65px] md:w-[130px] 2xl:w-[195px]"
      />
      <div className="flex flex-col items-center mt-[30%] md:mt-[20%] lg:mt-[15%] xl:mt-[5%]  space-y-2 md:space-y-4 2xl:space-y-6">
        <div className="flex flex-col items-center space-y-2 md:space-y-4 2xl:space-y-6">
          <Image src={Logo} alt="J&M Logo" className="w-full max-w-full" />
          <p className="font-normal font-hk md:text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#3A4F85] to-[#8EA7C7]">
            The industry leader in
          </p>
        </div>
        <p className="font-bold font-hk md:text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#3A4F85] to-[#8EA7C7]">
          Line Support Clamps & Wire Harnesses
        </p>
        <div className="flex space-x-4">
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
        <div className="flex 2xl:space-x-6">
          <Link href="/line-clamps" className="relative group">
            <Image
              src={ClampBracket}
              alt="Clamps and Brackets"
              className="w-[175px] 2xl:w-[202px] brightness-75 group-hover:animate-shake"
            />
            <div className="absolute justify-center content-center top-10 2xl:top-14 inset-x-0 text-center">
              <p className="font-bold font-hk text-xl text-white">
                Clamps
                <br />&<br />
                Bracket
              </p>
            </div>
          </Link>
          <Link href="/wire-harnesses" className="relative group">
            <Image
              src={WireHarness}
              alt="Wire Harnesses"
              className="w-[175px] 2xl:w-[202px] brightness-75 group-hover:animate-shake"
            />
            <div className="absolute justify-center content-center top-14 2xl:top-16 inset-x-0 text-center">
              <p className="font-bold font-hk text-xl text-white">
                Wire
                <br />
                Harnesses
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
