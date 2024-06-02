"use client"
import React,{useState} from 'react'
import {Collapse} from 'react-collapse';
export default function Accordion(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
     <div className="font-gvonz item item-center ml-[2.8rem] mr-[2.8rem] mt-8 mb-4 bg-white/[0.1] shadow-[-3px_-2px_3px_0px_rgba(248,248,248,0.39)] rounded-[12px]">
     <div
              className="title pl-[0.75rem] gap-5 isolate max-[326px]:h-14 mr-6 bg-transparent shadow-[-3px_-2px_3px_0px_rgba(248,248,248,0)] rounded-[12px] max-[512px]:pt-[8px] max-[512px]:pl-[10px] flex justify-between flex-row pr-3 cursor-pointer max-[420px]:gap-0 max-[420px]:pr-[0] max-[400px]:h-[0]"
              onClick={toggleAccordion}
            >
              <span className="flex items-center py-4">
                <p className="faq text-sm sm:text-xl leading-[2.5rem] max-[512px]:leading-2 max-[720px]:leading-[2.5rem] max-[635px]:leading-[0rem] max-[512px]:text-[13px] max-[424px]:text-[10px] max-[342px]:leading-6 max-[342px]:text-[6.2px] font-bold">
                  {props.serial}
                </p>
                <p className=" text-sm sm:text-xl leading-[2.5rem] max-[512px]:leading-2 max-[720px]:leading-[2.5rem] max-[635px]:leading-[0rem] max-[512px]:text-[13px] max-[424px]:text-[10px] max-[342px]:leading-6 max-[342px]:text-[6.2px] font-bold ml-2">
                 {props.question}
                </p>
              </span>
              <span className="cursor-pointer box-border flex flex-col justify-center text-4xl font-bold fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="48"
                >
                  <path
                    d={ isOpen
                        ? "M480-600 280-401h400L480-600Z"
                        : "M480-360 280-559h400L480-360Z"}              
                    
                  ></path>
                </svg>
              </span>
            </div>
            <Collapse isOpened={isOpen}>
            <div className="accordion-content overflow-hidden transition-max-height duration-300 ease-in-out bg-[#3f3949] text-sm sm:text-xl leading-[2.5rem] max-[512px]:leading-2 max-[720px]:leading-[2.5rem] max-[635px]:leading-[0rem] max-[512px]:text-[13px] max-[424px]:text-[10px] max-[342px]:leading-6 max-[342px]:text-[6.2px] rounded-b-[12px] pl-2 pr-2">
           {props.answer}
          </div>
            </Collapse>
           
     </div>
       
    </>
  )
}
