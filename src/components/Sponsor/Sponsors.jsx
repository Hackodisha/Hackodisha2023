import React from "react";
import Image from "next/image";
import line from "./union1.svg";
import Title from "../CommonComponent/Title/Title";
import floatingBuilding from "./floatingBuilding.webp";

import Link from "next/link";

export const Sponsor = () => {
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
            <Title title={"Sponsors"} className={"px-5 sm:px-10 py-5"}></Title>
            <div className="line">
              <Image src={line} alt="Image" className="img2"></Image>
            </div>
          </div>
        </div>
        <div className="w-full sm:px-[75px] px-4 flex flex-col mt-8 mb-8  z-20 relative ">
          {SponsorData.map((item, index) => (
            <div key={index} className={``}>
              <h2
                className={` border-opacity-25 border-b-4 border-t-4 text-2xl sm:text-5xl font-gvonz text-[#CA40CD] border-l-4 pl-6  border-[#CA40CD] py-16 sm:pl-8  `}
              >
                {" "}
                <span className="uppercase">{item.category}</span> sponsors
              </h2>

              <div
                className={`inline-flex flex-wrap gap-4 sm:gap-20 justify-center py-16 border-r-4 border-[#CA40CD] border-opacity-25 w-full ${
                  index == 2 ? "border-b-4" : ""
                } `}
              >
                {item.sponsors.map((sponsor, i) => (
                  <Link
                    href={sponsor.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center p-2  rounded-lg sm:p-4 bg-white w-fit "
                    key={sponsor.name}
                  >
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.alt}
                      width={sponsor.width}
                      height={sponsor.height}
                      className={`object-contain w-[70%] sm:w-[100%] xl:w-[150%] `+sponsor?.special}
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SponsorData = [
  {
    category: "Gold",
    sponsors: [
      {
        name: "AlgoZenith",
        logo: "/Images/SponsorLogos/algozenith.svg",
        width: 300,
        height: 150,
        alt: "ALGOZENITH LOGO",
        link: "https://algozenith.com/",
        special: "w-[220px] sm:w-[270px] xl:w-[300px]",
      },
      {
        name: "Fastn",
        logo: "/Images/SponsorLogos/fastn.webp",
        width: 300,
        height: 150,
        alt: "Fastn LOGO",
        link: "https://fastn.com/",
      },
      {
        name: "Devfolio",
        logo: "/Images/SponsorLogos/devfolio.png",
        width: 300,
        height: 150,

        alt: "DEVFOLIO LOGO",
        link: "https://devfolio.co/",
      },
      {
        name: "Polygon",
        logo: "/Images/SponsorLogos/polygon.png",
        width: 300,
        height: 150,
        alt: "POLYGON LOGO",
        link: "https://polygon.technology/",
      },
    ],
  },
  {
    category: "Silver",
    sponsors: [
      {
        name: "Quine",
        logo: "/Images/SponsorLogos/quine.webp",
        width: 200,
        height: 100,
        alt: "Quine LOGO",
        link: "https://bit.ly/WEBHO3xQUINE",
      },
      {
        name: "Verbwire",
        logo: "/Images/SponsorLogos/verbwire.webp",
        width: 200,
        height: 100,
        alt: "VERBWIRE LOGO",
        link: "https://www.verbwire.com/",
      },
      {
        name: "Filecoin",
        logo: "/Images/SponsorLogos/filecoin.webp",
        width: 200,
        height: 100,
        alt: "FILECOIN LOGO",
        link: "https://filecoin.io/",
      },
      {
        name: "Solana",
        logo: "/Images/SponsorLogos/solana.webp",
        width: 200,
        height: 100,
        alt: "SOLANA LOGO",
        link: "https://solana.com/",
      },
      {
        name: "Replit",
        logo: "/Images/SponsorLogos/replit.webp",
        width: 200,
        height: 100,
        alt: "REPLIT LOGO",
        link: "https://replit.com/",
      },
    ],
  },
  {
    category: "Bronze",
    sponsors: [
      {
        name: "InterviewBuddy",
        logo: "/Images/SponsorLogos/InterviewBuddy.png",
        width: 200,
        height: 100,
        alt: "INTERVIEWBUDDY LOGO",
        link: "https://interviewbuddy.in/",
      },
      {
        name: "XYZ",
        logo: "/Images/SponsorLogos/xyz.png",
        width: 200,
        height: 100,
        alt: "XYZ LOGO",
        link: "https://gen.xyz/",
      },
      {
        name: "Echo3D",
        logo: "/Images/SponsorLogos/echo3d.png",
        width: 200,
        height: 100,
        alt: "ECHO3D LOGO",
        link: "https://www.echo3d.com/",
      },
      {
        name: "Taskade",
        logo: "/Images/SponsorLogos/taskade.png",
        width: 200,
        height: 100,
        alt: "TASKADE LOGO",
        link: "https://taskade.com/",
      },

      {
        name: "Axure",
        logo: "/Images/SponsorLogos/axure.svg",
        width: 200,
        height: 100,
        alt: "AXURE LOGO",
        link: "https://www.axure.com/",
      },
    ],
  },
];
