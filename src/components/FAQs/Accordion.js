"use client"
import React, { useState } from "react";
import "./Accordion.css";
import union1 from "./union1.svg";
import Title from "../CommonComponent/Title/Title";
import Image from "next/image";

function Accordion() {
  const [show, setShow] = useState(null);

  const toggle = (i) => {
    if (show == i) {
      return setShow(null);
    }
    setShow(i);
  };

  return (
    <>
      <div className="wrapper  w-screen justify-center items-center bg-center text-white bg-cover mb-16 ">
        <div className="accordion">
          <Title title={"FAQ"} className={"px-10 py-5"}/>
          <div className="line">
              <Image src={union1} alt="Image" className="img2"></Image>
            </div>

          {data.map((item, i) => (
            <div key={i} className="item item-center ml-12 mr-12 mt-8  mb-4  bg-white/[0.1] shadow-[-3px_-2px_3px_0px_rgba(248,248,248,0.39)] rounded-[12px] ">
              
              <div className="title pl-[0.75rem]  gap-5 isolate w-1488 max-[326px]:h-14 mr-6  bg-transparent shadow-[-3px_-2px_3px_0px_rgba(248,248,248,0)] rounded-[12px]   max-[512px]:pt-[8px] max-[512px]:mr-[6px] max-[512px]:pl-[10px]  max-[720px]:mr-[8px] flex justify-between flex-row pr-3 cursor-pointer max-[420px]:gap-0 max-[420px]:pr-[0] max-[400px]:h-[0]"  onClick={() => toggle(i)}>
                <span className="flex items-center py-4">
              <p className="faq font-ele text-xl leading-[2.5rem] max-[512px]:leading-2 max-[720px]:leading-[2.5rem] max-[635px]:leading-[0rem]  max-[512px]:text-[13px]   max-[424px]:text-[10px] max-[342px]:leading-6  max-[342px]:text-[6.2px] font-bold">
                  {"0" + item.id}
                </p>
              <p className="faq font-ele text-xl leading-[2.5rem] max-[512px]:leading-2 max-[720px]:leading-[2.5rem] max-[635px]:leading-[0rem]  max-[512px]:text-[13px]   max-[424px]:text-[10px] max-[342px]:leading-6  max-[342px]:text-[6.2px] font-bold ml-2">
                  {item.faq}
                </p>
                </span>
                <span
                  className={` ${show==i?"mt-4":""} cursor-pointer box-border flex-col justify-start text-4xl font-bold h-full`}
                
                >
                  {show !== i ? '⌄' : "⌃"}
                </span>
               
              </div>
              <div className={show == i ? "answer show" : "answer" } >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const data = [
  {
    id: 1,
    faq: "What is a hackathon?",
    answer:
      "A hackathon is an invention marathon where you can work with people around the globe to build a project related to technology! It isn't about hacking into a system, it's instead about hacking something together and learning a great deal in the process.",
  },
  {
    id: 2,
    faq: "Can we work on old or ongoing project?",
    answer:
      "No, you have to start from scratch. You can use open source libraries and frameworks.",
  },
  {
    id: 3,
    faq: "How many members do we need in a team?",
    answer:
      "You can submit solo as well a team with at max 4 members can be formed.",
  },
  {
    id: 4,
    faq: "Can I apply for multiple tracks?",
    answer:
      "Yes. You can.",
  },
  {
    id: 5,
    faq: "Do I need to pay anything to participate?",
    answer:
      "No, the hackathon is completely free for everyone. ",
  },
  {
    id: 6,
    faq: "Who can participate?",
    answer:
      "Everyone is welcome to participate, be it, students, professionals or aliens from different Planet!",
  },
];

export default Accordion;
