import React from "react";
import { eventsData } from "./eventsData";
import Link from "next/link";
import Title from "../CommonComponent/Title/Title";
import Image from "next/image";
import line from "@/components/Judges/assets/union1.svg";

const Events = () => {
  return (
    <>
      <Title title={"Events"} className={"px-5 sm:px-10 py-5"}></Title>
      <div className="line">
        <Image src={line} alt="Image" className="img2"></Image>
      </div>

      <div
        id="events"
        className="sm:grid-cols-2 grid gap-7 grid-cols-1 py-[8rem] w-[80%] mx-auto"
      >
        {eventsData.map((item) => (
          <Link href={item.link} key={item.link}>
            <Image
              src={item.imgSrc}
              alt="Event"
              width={item.width}
              height={item.height}
              className=" lg:w-[28rem] md:w-[20rem] sm:w-[15rem] lg:h-[28rem] md:h-[20rem] sm:h-[15rem] hover:scale-105 transition ease-in-out duration-300 hover:border-[#f669b9ca] hover:border-[4px] border-[4px] border-black"
            ></Image>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Events;
