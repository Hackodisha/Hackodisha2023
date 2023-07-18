import React, { useState } from "react";
import "./Accordion.css";
import union1 from "./union1.svg";
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
      <div className="wrapper font-electrolize w-screen justify-center items-center bg-center text-white bg-cover h-screen">
        <div className="accordion">
          <div className="image relative w-[100%]">
          <h1 class="mt-[2.5rem] md:mt-[2rem] lg:mt-[2.5rem] xl:mt-[3rem] 2xl:mt-[3rem] -mb-1 sm:-mb-4 md:-mb-8 lg:-mb-12 xl:-mb-16 2xl:-mb-16 underline underline-offset-[7px] mx-6 smallmobile:mx-2 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-16  text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:3xl 2xl:text-4xl smallmobile:text-lg font-bold 2xl:m-auto 2xl:w-[90%] text-[cyan]">FAQs</h1>
          <Image src={union1} alt="" className=" mt-6 left-0 w-[100%] " />
        </div>

          {data.map((item, i) => (
            <div key={i} className="item item-center ml-12 mr-12 mt-3  mb-3  bg-white/[0.1] shadow-[-3px_-2px_3px_0px_rgba(248,248,248,0.39)] rounded-[12px] ">
              
              <div className="title pl-[0.75rem]  gap-5 isolate w-1488 h-12 max-[326px]:h-14 mr-6  bg-transparent shadow-[-3px_-2px_3px_0px_rgba(248,248,248,0)] rounded-[12px]   max-[512px]:pt-[8px] max-[512px]:mr-[6px] max-[512px]:pl-[10px]  max-[720px]:mr-[8px] flex justify-between flex-row pr-3 cursor-pointer"  onClick={() => toggle(i)}>
              <p className="faq font-ele text-xl max-[512px]:leading-2 max-[720px]:text-[18px]  max-[512px]:text-[13px]   max-[424px]:text-[10px] max-[342px]:leading-6  max-[342px]:text-[6.2px] font-bold">
                  {"0" + item.id + " " + item.faq}
                </p>
                <span
                  className="cursor-pointer box-border 
                mt-[1em] max-[512px]:text-[13px]  max-[424px]:text-[10px] max-[342px]:text-[6.2px] font-bold"
                
                >
                  {show !== i ? "⌄" : "⌃"}
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
      "A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program.",
  },
  {
    id: 2,
    faq: "Can we work on old or ongoing project?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    id: 3,
    faq: "How many members do we need in a team?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: 4,
    faq: "Can I apply for multiple tracks?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui Ut enim ad minima veniam, quis nostrum exercitationem",
  },
  {
    id: 5,
    faq: "Where can i find updates?",
    answer:
      "ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
  },
  {
    id: 6,
    faq: "Do I need to pay anything to participate?",
    answer:
      "ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
  },
  {
    id: 7,
    faq: "Who can participate?",
    answer:
      "ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
  },
  {
    id: 8,
    faq: "Can i start working on my hack before?",
    answer:
      "ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia  quaerat adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
  },
  {
    id: 9,
    faq: "Code of conduct",
    answer:
      "ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ",
  },
];

export default Accordion;
