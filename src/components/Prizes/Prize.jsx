import React from "react";

import Title from "../CommonComponent/Title/Title";
import Image from "next/image";
import line from "./union1.svg";
import bg from "./prizebg.webp";
import prizes from "./prizes1.png";
import Link from "next/link";

const Prize = () => {
  return (
    <section className="" id="prizes">
      <div className="bg-opacity-10 relative" id="">
        <Image
          src={bg}
          fill
          className="object-cover w-full object-top relative z-10 opacity-70 mix-blend-color-dodge"
        />
          <div className="partner-section ">
            <div className="header-sec ">
              <Title title={"Prizes"} className={"px-5 sm:px-10 py-5"}></Title>
              <div className="line">
                <Image src={line} alt="Image" className="img2"></Image>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap justify-center items-center">
              <Image
                src={prizes}
                className=" w-5/6  sm:w-3/4 mix-blend-lighten"
              />
            </div>
            <Link
              href={"https://hackodisha3.devfolio.co/prizes"}
              target="_blank"
              rel="noreferrer"
              className=" italic underline underline-offset-8 text-[#07D6D1]  w-full relative z-10 text-end pr-10 block mt-5 text-xl"
            >
              More on Devfolio 
            </Link>
          </div>
      </div>
    </section>
  );
};

export default Prize;
