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
    sponsors: [
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/Aerotech_vssut.png",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Befikra",
        logo: "/Images/PartnersLogos/Befikra.png",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/CampusTechies.png",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/CET zairza.png",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/Code_edu.jpg",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },

      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/Code-Up Community.jpg",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/CodeINBlogs.png",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 100,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/Coding_Activist_G_3_20230718_135836.jpg",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/Curious_develpers.png",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/Cyberverse.jpg",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/Dapps.jpg",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/Defiverse.jpg",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/Dev_CODE_BLACK_LOGO_01.jpeg",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/Devboard.png",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/Devcans.jpg",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/devdotcom.png",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "Aerotech_vsuut",
        logo: "/Images/PartnersLogos/Devs_dungeon.png",
        alt: "Aerotech_vsuut",
        width: 100,
        height: 50,
      },
      {
        name: "DSC C.V. Raman global University",
        logo: "/Images/PartnersLogos/DSC_C.V._Raman_global_University__Light_Horizontal_Logo.png",
        alt: "DSC_C.V._Raman_global_University__Light_Horizontal_Logo",
        width: 100,
        height: 50,
      },
      {
        name: "Fintech",
        logo: "/Images/PartnersLogos/FINTECH.png",
        alt: "FINTECH",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC NKOCET Solapur",
        logo: "/Images/PartnersLogos/GDSC NKOCET Solapur.jpg",
        alt: "GDSC NKOCET Solapur",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC HIT",
        logo: "/Images/PartnersLogos/GDSC_HIT.jpg",
        alt: "gdsc_hit",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/GDSC_IIIT_Surat.png",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/GDSCNarulaInstitute.jpg",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/Geek_room.png",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/Github_Gitam.jpg",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/Hack_Unicorn_Club_Logo.png",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/IIEC.jpg",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/Inovact.png",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/IOT_Lab_Kiit.jpg",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/MESH.png",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/Metaverse.png",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/OCD.jpeg",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/Open Source Chandigarh.jpg",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/OWASP_Thapar.png",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/Programming Society IIIT Bhubaneswar.jpeg",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/SOS_Tech_INC.jpg",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/StartupGrind Bhubaneswar.png",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
      {
        name: "GDSC IIIT Surat",
        logo: "/Images/PartnersLogos/Web_DesignSociety.jpg",
        alt: "GDSC IIIT Surat",
        width: 100,
        height: 50,
      },
    ],
  },
  {
    category: "Media Partners",
    sponsors: [],
  },
];
