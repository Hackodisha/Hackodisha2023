import React, { useState } from "react";
import "./Accordion.css";
import Faq1 from "./Faq1.png";
import union1 from "./union1.svg";

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
      <div className="wrapper font-electrolize h-auto w-screen justify-center items-center bg-center fixed">
        <div className="image relative pt-5 w-[100%]">
          <img src={Faq1} alt="" width={170} className="ml-16 relative max-[1130px]:w-[130px] max-[900px]:w-[110px] max-[720px]:w-[100px] max-[555px]:w-[80px]max-[485px]:ml-[10px]" />
          <img src={union1} alt="" className="absolute top-8 left-0 w-[100%] max-[485px]:h-[35px] max-[485px]:pl-[35px]" />
        </div>

        <div className="accordion mt-10 ">
          {data.map((item, i) => (
            <div className="item  ml-16 mt-3 mr-20 mb-3  bg-white/[0.1] shadow-[-3px_-2px_3px_0px_rgba(248,248,248,0.39)] rounded-[12px] max-[512px]:mr-[50px] max-[720px]:mr-[13px] ">
              <div className="title flex justify-between flex-row pl-12  gap-5 isolate w-1488 h-12 mr-20 max-[512px]:text-[10px] max-[512px]:pt-[8px] max-[512px]:mr-[15px] max-[512px]:pl-[10px max-[720px]:text-[12px] max-[720px]:mr-[60px]">
                <h3 className="faq h-5 font-ele font-normal text-4xl leading-[9px]">
                  {"0" + item.id + " " + item.faq}
                </h3>
                <span
                  className="cursor-pointer box-border 
                mt-3"
                  onClick={() => toggle(i)}
                >
                  {show !== i ? "+" : "-"}
                </span>
              </div>
              <div className={show == i ? "answer show" : "answer"}>
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
