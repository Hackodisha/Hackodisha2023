"use client"
import Accordion from "./Accordion";
export default function Faq() {
  const accordiondata = [
    {
      serial: "01",
      question: "What is a hackathon?",
      answer: "A hackathon is an invention marathon where you can work with people around the globe to build a project related to technology! It isn't about hacking into a system, it's instead about hacking something together and learning a great deal in the process.",
    },
    {
      serial: "02",
      question: "Can we work on old or ongoing projects?",
      answer:"No, you have to start from scratch. You can use open source libraries and frameworks."
    },
    {
      serial: "03",
      question: "How many members do we need in a team?",
      answer:"You can submit solo as well a team with at max 4 members can be formed."
    },
    {
      serial: "04",
      question: "Registration costs?",
      answer:"Nada"
    },
    {
      serial: "05",
      question: "Can I apply for multiple tracks?",
      answer:"Sure thing! Apply for all the tracks you want, like a kid in a candy store! 🏃🍭😄. Just make sure to be relevant."
    },
    {
      serial: "06",
      question: "Who can participate?",
      answer:"Everyone is welcome to participate, be it, students, professionals, or aliens from different planets!"
    },
    {
      serial: "07",
      question: "Is physical presence required, or can we hack remotely?",
      answer:"Nah, no need for pants, go remote! 🏠😄"
    },
  ];
  

  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
    <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet'></link>
    <div className="wrapper w-screen justify-center items-center bg-center text-white bg-customBg mb-16">
      <div className="accordion">
        <div className="flex justify-start px-10 py-5">
          <span className="flex flex-col justify-center items-center">
            <div className="font-gvonz font-light text-[#07D6D1] leading-normal smallmobile:text-md text-[16px] sm:text-[28px] md:text-[40px]">
              FAQ
            </div>
            <div className="md:pt-2 basis-[6px] w-[92%] bg-[#0C9794] relative -top-1 md:top-0"></div>
          </span>
        </div>
        <div className="line">
          <svg
            width="1535"
            height="60"
            viewBox="0 0 2130 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M519.901 60.705L662.24 1.77996V0.70483L2129.06 0.70496V3.70496L665.321 3.70483L521.602 63.201V63.705H520.384L519.084 64.2433L518.745 63.705L0.996826 63.705V60.705L519.901 60.705Z"
              fill="#0C9794"
            />
          </svg>
        </div>
          {accordiondata.map((data, index) => (
            <Accordion
              key={index}
              serial={data.serial}
              question={data.question}
              answer={data.answer}
            />
          ))}
      </div>
    </div>
    </>
    
  );
}
