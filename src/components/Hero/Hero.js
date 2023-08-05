import React from "react";
import "./Hero.css";
import Image from "next/image";
import DevfolioButton from "@/components/CommonComponent/DevfolioButton/DevfolioButton";
import Rain from "./Rain";

function Hero() {
  return (
    <>
      <main
        id="home"
        className="box-border relative bg-[#121212] w-[100%] min-h-screen h-fit bg-center bg-no-repeat bg-cover max-w-screen overflow-hidden"
      >
        <Rain />
        <Image
          src={"/Images/homebg.webp"}
          alt="HeroBg"
          fill="true"
          className="absolute top-0 w-screen object-cover "
          priority
        ></Image>
        <div className="rain mix-blend-screen opacity-[0.4] transform-scale-x-1"></div>
        <div className="flex h-full w-full absolute top-0">
          <div className="bg-gradient-to-b from-[#000AFF]/[0.32] from-[84%] via-[#510202]/[0.3] to-[#260606]/[0.50] mix-blend-overlay bg-opacity-[0.32] basis-[52%] md:basis-[51%]"></div>
          <div className="bg-gradient-to-b from-[#FF0000]/[0.12] from-[88%]  via-[#034E06]/[0.8] to-[#061E4D]/[0.60] mix-blend-color-burn basis-[48%] md:basis-[49%]"></div>
        </div>
        <div className="flex h-full w-full absolute top-0">
          <div className="w-full h-full basis-[52%] hidden sm:block md:basis-[51%] mix-blend-lighten bg-black ">
            <video
              src="/gif/thunder.webm"
              alt="thundergif"
              height={670}
              width={490}
              className="w-full h-full opacity-[0.36]"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="w-full h-full basis-[48%] hidden sm:block md:basis-[49%] mix-blend-lighten bg-black">
            <video
              src="/gif/thunder.webm"
              alt="thundergif"
              height={670}
              width={490}
              className="w-full h-full opacity-[0.36]"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <div className="flex flex-col md:-top-6 items-center w-full h-full relative xl:mb-32 pt-[50%] sm:pt-32">
          <Image
            src={"/Images/upper.webp"}
            alt="upperLogo"
            height={"240"}
            width={"380"}
            className="w-10/12 md:w-4/12 max-h-[240px]"
            priority
          />
          <Image
            src={"/Images/Group 8.svg"}
            alt="Center Log"
            height={"80"}
            width={"380"}
            className="w-10/12 md:w-4/12 relative -top-3 max-h-[80px]"
            priority
          />
          <Image
            src={"/Images/lower.webp"}
            alt="LowerLogo"
            height={"240"}
            width={"380"}
            className="w-10/12 md:w-4/12 relative -top-6 max-h-[240px]"
            priority
          />
          <h1 className="sm:text-5xl text-2xl font-gvonz text-white rounded-2xl border-2 p-2 px-4 ">
            9 - 10 September{" "}
          </h1>
          <div className=" items-center gap-6 flex flex-col mt-4 relative z-[100]">
            <DevfolioButton />
            <div className="md:hidden mb-6">
              <a
                href="https://discord.gg/ewun7cxkJh"
                rel="noreferrer"
                target="_blank"
                className=" hover:bg-[#096D6A] -[#FB48FF] transition-colors ease-in rounded-2xl text-sm sm:text-lg px-4 py-2 border-white text-white border-2 w-fit"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
