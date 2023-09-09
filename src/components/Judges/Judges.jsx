import React from "react";
import Image from "next/image";
import Title from "../CommonComponent/Title/Title";
import line from "./assets/union1.svg";
import bg from "./assets/bg.png";
import { speakJudgeData } from "./data";
import Link from "next/link";

const Judges = () => {
  return (
    <>
      <div className=" w-full  z-50">
        <Image
          fill
          src={bg}
          className="-z-10 object-cover sm:hidden block 2xl:block "
        ></Image>
        <Title
          title={"Speakers & Judges"}
          className={"px-5 sm:px-10 py-5"}
        ></Title>
        <div className="line">
          <Image src={line} alt="Image" className="img2"></Image>
        </div>
        <div
          id="judges"
          className=" sm:grid-cols-3 grid gap-9 grid-cols-2 gap-y-20 justify-evenly py-[4rem]  w-[80%] mx-auto "
        >
          {speakJudgeData.map((item) => (
            <Link
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="lg:w-[16.08581rem] md:w-[10.08581rem] sm:w-[5.08581rem] min-[320px]:w-[0.2rem] lg:h-[23.1rem] md:h-[17.1rem] sm:h-[12.1rem] hover:text-[#FF2525] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out text-[#FFF] mx-auto "
              key={item.name}
            >
              <div className="hover:text-[#FF2525] bg-[#D9D9D9] rounded-t-xl">
                <Image
                  src={item.imgSrc}
                  width={340}
                  height={490}
                  className="w-full h-[80%] "
                  placeholder="blur"
                  blurDataURL={item.imgSrc.replace("q_auto:good","w_500/c_scale,w_12")}
                />
              </div>
              <h3 className="font-Syoog font-ligh leading-normal   lg:text-[1.6rem] text-[0.9rem]  text-center">
                {item.name}
              </h3>
              <h3 className="text-[#FFF] text-center lg:text-[0.9rem] text-[0.5rem] ">
                {item.subHeading}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Judges;
