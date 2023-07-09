import React from "react";
import "./Hero.css";
import Image from "next/image";

function Hero() {
  return (
    <main className="bg-[url('/images/homebg.svg')] -z-10 bg-center bg-no-repeat bg-cover">
      <div className="hero w-auto h-[818px] flex items-center flex-col">
        {/* <Image
          src={"/upper.svg"}
          alt="upper"
          height={"100"}
          width={"100"}
          className=""
        />
        <Image src={"/Group 8.svg"} alt="upper" height={"200"} width={"500"} />
        <Image src={"/lower.svg"} alt="upper" height={"200"} width={"500"} /> */}
      </div>
    </main>
  );
}

export default Hero;
