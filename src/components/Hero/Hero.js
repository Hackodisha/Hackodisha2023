import React from "react";
import "./Hero.css";
import Image from "next/image";
import Link from "next/link";
import DevfolioButton from "@/components/CommonComponent/DevfolioButton/DevfolioButton";

function Hero() {
  return (
    <main className="box-border relative bg-[#121212] w-[100%] h-screen bg-center bg-no-repeat bg-cover">
      <Image
        src={"/images/homebg.svg"}
        alt="HeroBg"
        fill="true"
        className="absolute top-0 w-screen object-cover"
        priority
        ></Image>
      <div className="rain mix-blend-screen opacity-[0.4] transform-scale-x-1"></div>
      <div className="flex h-full w-full absolute top-0">
        <div className="bg-gradient-to-b from-[#000AFF]/[0.32] from-[84%] via-[#510202]/[0.3] to-[#260606]/[0.50] mix-blend-overlay bg-opacity-[0.32] basis-[52%] md:basis-[51%]"></div>
        <div className="bg-gradient-to-b from-[#FF0000]/[0.12] from-[88%]  via-[#034E06]/[0.8] to-[#061E4D]/[0.60] mix-blend-color-burn basis-[48%] md:basis-[49%]"></div>
      </div>
      <div className="flex h-full w-full absolute top-0">
        <div className="w-full h-full basis-[52%] md:basis-[51%] mix-blend-lighten">
          <Image
            src={`/gif/thunder.gif`}
            alt="Thundergif"
            height={"100"}
            width={"100"}
            className="w-full h-full opacity-[0.25]"
          />
        </div>
        <div className="w-full h-full basis-[48%] md:basis-[49%] mix-blend-lighten">
          <Image
            src={`/gif/thunder.gif`}
            alt="thundergif"
            height={"100"}
            width={"100"}
            className="w-full h-full opacity-[0.25]"
          />
        </div>
      </div>
      <div className="flex flex-col md:-top-6 items-center w-full h-full relative xl:mb-32 pt-[50%] sm:pt-32">
        <Image
          src={"/images/upper.svg"}
          alt="upperLogo"
          height={"300"}
          width={"380"}
          className="w-10/12 md:w-4/12"
        />
        <Image
          src={"/images/Group 8.svg"}
          alt="Center Log"
          height={"300"}
          width={"380"}
          className="w-10/12 md:w-4/12 relative -top-3"
        />
        <Image
          src={"/images/lower.svg"}
          alt="LowerLogo"
          height={"300"}
          width={"380"}
          className="w-10/12 md:w-4/12 relative -top-6"
        />

      </div>
        <DevfolioButton/>
    </main>
  );
}

export default Hero;
