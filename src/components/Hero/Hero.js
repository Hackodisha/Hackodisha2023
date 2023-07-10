import React from "react";
import "./Hero.css";
import Image from "next/image";

function Hero() {
  return (
    <main className="relative w-auto h-[818px] bg-[url('/images/homebg.svg')] -z-20 bg-center bg-no-repeat bg-cover">
      {/* <div>
        <Image src={'bgrec1.svg'} alt="bg-colour1"/>
      </div> */}
    </main>
  );
}

export default Hero;
