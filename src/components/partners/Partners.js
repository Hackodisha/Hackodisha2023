import React from "react";
import Image from "next/image";
import line from "./union1.svg";
import Title from "../CommonComponent/Title/Title";
import floatingBuilding from "./floatingBuilding.webp";

const Partners = () => {
  return (
    <section className="" id="sponsors">
      <div className="sponsorbg bg-opacity-10 relative" id="about-us">
        <Image
          src={floatingBuilding}
          fill
          className="object-contain object-center relative z-10 opacity-70 mix-blend-color-dodge"
        />
        <div className="sponsor-section ">
          <div className="header-sec ">
            <Title title={"Partners"} className={"px-5 sm:px-10 py-5"}></Title>
            <div className="line">
              <Image src={line} alt="Image" className="img2"></Image>
            </div>
          </div>
        </div>
        <div className="w-full sm:px-[75px] px-4 flex flex-col mt-8 mb-8  z-20 relative ">
          {PartnersData.map((item, index) => (
            <div key={index} className={``}>
              <h2
                className={` border-opacity-25 border-b-4 border-t-4 text-2xl sm:text-5xl font-gvonz text-[#CA40CD] border-l-4 pl-6 sm:pl-2 border-[#CA40CD] py-16 sm:pl-8  `}
              >
                {" "}
                <span className="uppercase">{item.category}</span> 
              </h2>
              <ul
                className={`inline-flex flex-wrap gap-4 sm:gap-20 justify-center py-16 border-r-4 border-[#CA40CD] border-opacity-25 w-full ${
                  index == 3 ? "border-b-4" : ""
                } `}
              >
                {item.sponsors.map((sponsor, i) => (
                  <li
                    key={i}
                    className={`flex flex-col items-center justify-center p-2  rounded-lg sm:p-4 bg-white w-fit `}
                  >
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.alt}
                      width={sponsor.width}
                      height={sponsor.height}
                      className={`object-contain w-[70%] sm:w-[100%] xl:w-[150%] `}
                    />
                    {/* <p className="text-white text-center">{sponsor.}</p> */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

const PartnersData = [
  {
    category: "Community Partners",
    sponsors: [],
  },
  {
    category: "Media Partners",
    sponsors: [],
  },
];
