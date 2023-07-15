import React from "react";
import "./Hero.css";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <main className="box-border relative w-[100%] h-[100vh] bg-[url('/images/homebg.svg')] bg-center bg-no-repeat bg-cover">
      <div className="rain mix-blend-screen opacity-[0.4] transform-scale-x-1"></div>
      <div className="flex h-full w-full absolute top-0">
        <div className="bg-gradient-to-b from-[#000AFF]/[0.32] from-[84%] via-[#510202]/[0.3] to-[#260606]/[0.50] mix-blend-overlay bg-opacity-[0.32] basis-[52%] md:basis-[51%]"></div>
        <div className="bg-gradient-to-b from-[#FF0000]/[0.12] from-[88%]  via-[#034E06]/[0.8] to-[#061E4D]/[0.60] mix-blend-color-burn basis-[48%] md:basis-[49%]"></div>
      </div>
      <div className="flex h-full w-full absolute top-0">
        <div className="w-full h-full basis-[52%] md:basis-[51%] mix-blend-lighten">
          <Image
            src={`/gif/thunder.gif`}
            alt="HomeBg"
            height={"100"}
            width={"100"}
            className="w-full h-full opacity-[0.25]"
          />
        </div>
        <div className="w-full h-full basis-[48%] md:basis-[49%] mix-blend-lighten">
          <Image
            src={`/gif/thunder.gif`}
            alt="HomeBg"
            height={"100"}
            width={"100"}
            className="w-full h-full opacity-[0.25]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full h-full absolute pt-32">
        <Image
          src={"/images/upper.svg"}
          alt="upperLogo"
          height={"300"}
          width={"380"}
          className="w-10/12 md:w-5/12"
        />
        <Image
          src={"/images/Group 8.svg"}
          alt="upperLogo"
          height={"300"}
          width={"380"}
          className="w-10/12 md:w-5/12 relative -top-3"
        />
        <Image
          src={"/images/lower.svg"}
          alt="upperLogo"
          height={"300"}
          width={"380"}
          className="w-10/12 md:w-5/12 relative -top-6"
        />
      </div>
      <div className="box-border flex absolute w-full justify-center gap-10 text-[14px] flex-wrap pb-[18px] bottom-0 z-30">
        <div className="text-[14px] bgbtn">
          <button className="btn text-[#A6FFFD] p-3 border-[3px] font-Syoog tracking-[-0.0356rem] border-[#06EBE5] border-solid rounded-2xl hover:cursor-pointer hover:border-[2px] box-border">
            Register with Devfolio
          </button>
        </div>
        <div className="text-[14px] bgbtn">
          <button className="btn text-[#A6FFFD] p-3 border-[3px] font-Syoog tracking-[-0.0356rem] border-[#06EBE5] border-solid rounded-2xl hover:cursor-pointer hover:border-[2px] box-border">
            Register with Devfolio
          </button>
        </div>
        <div className="text-[14px] bgbtn">
          <button className="btn text-[#A6FFFD] p-3 border-[3px] font-Syoog tracking-[-0.0356rem] border-[#06EBE5] border-solid rounded-2xl hover:cursor-pointer hover:border-[2px] box-border">
            Register with Devfolio
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
