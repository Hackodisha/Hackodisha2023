import React from "react";
import Image from "next/image";
import line from "./union1.svg";
import Title from "../CommonComponent/Title/Title";
import floatingBuilding from "./floatingBuilding.webp";

const Partners = () => {
  return (
    <section className="" id="partners">
      <div className="partnerbg bg-opacity-10 relative" id="about-us">
        <Image
          src={floatingBuilding}
          fill
          className="object-contain object-center relative z-10 opacity-70 mix-blend-color-dodge"
        />
        <div className="partner-section ">
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
                className={`inline-flex flex-wrap gap-4 sm:gap-10 justify-center py-16 border-r-4 border-[#CA40CD] border-opacity-25 w-full ${
                  index == 1 ? "border-b-4" : ""
                } `}
              >
                {item.partners.map((partner, i) => (
                  <li
                    key={i}
                    className={`flex flex-col items-center justify-center p-2  rounded-lg sm:p-4 bg-white sm:w-fit w-1/4 smallmobile:w-1/3 `}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      width={partner.width}
                      height={partner.height}
                      className={`object-contain ` + partner?.special}
                      placeholder="blur"
                      blurDataURL={partner.logo.replace(
                        "q_auto:good",
                        "w_500/c_scale,w_12"
                      )}
                    />
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

const CloudinaryBaseUrl =
  "https://res.cloudinary.com/webwiz-team/image/upload/q_auto:good/v1693992539/ho3/community";
const PartnersData = [
  {
    category: "Community Partners",
    partners: [
      {
        name: "Web_DesignSociety",
        logo: `${CloudinaryBaseUrl}/Web_DesignSociety.jpg`,
        alt: "Web_DesignSociety",
        width: 125,
        height: 90,
      },
      {
        name: "Aerotech_vsuut",
        logo: `${CloudinaryBaseUrl}/Aerotech_vssut.png`,
        alt: "Aerotech_vsuut",
        width: 125,
        height: 90,
      },
      {
        name: "Befikra",
        logo: `${CloudinaryBaseUrl}/Befikra.png`,
        alt: "Befikra",
        width: 125,
        height: 90,
      },
      {
        name: "CampusTechies",
        logo: `${CloudinaryBaseUrl}/CampusTechies.png`,
        alt: "CampusTechies",
        width: 125,
        height: 90,
      },
      {
        name: "CET zairza",
        logo: `${CloudinaryBaseUrl}/CET_zairza.png`,
        alt: "CET zairza",
        width: 125,
        height: 90,
      },
      {
        name: "Code_edu",
        logo: `${CloudinaryBaseUrl}/Code_edu.jpg`,
        alt: "Code_edu",
        width: 125,
        height: 90,
      },
      {
        name: "Code-Up Community",
        logo: `${CloudinaryBaseUrl}/Code-Up_Community.jpg`,
        alt: "Code-Up Community",
        width: 125,
        height: 90,
      },
      {
        name: "CodeINBlogs",
        logo: `${CloudinaryBaseUrl}/CodeINBlogs.png`,
        alt: "CodeINBlogs",
        width: 125,
        height: 90,
        special: "bg-[#121212]",
      },
      {
        name: "Coding_Activist_G_3_20230718_135836",
        logo: `${CloudinaryBaseUrl}/Coding_Activist_G_3_20230718_135836.jpg`,
        alt: "Coding_Activist_G_3_20230718_135836",
        width: 125,
        height: 90,
      },
      {
        name: "Curious_develpers",
        logo: `${CloudinaryBaseUrl}/Curious_develpers.png`,
        alt: "Curious_develpers",
        width: 125,
        height: 90,
      },
      {
        name: "Cyberverse",
        logo: `${CloudinaryBaseUrl}/Cyberverse.jpg`,
        alt: "Cyberverse",
        width: 125,
        height: 90,
      },
      {
        name: "Dapps",
        logo: `${CloudinaryBaseUrl}/Dapps.jpg`,
        alt: "Dapps",
        width: 125,
        height: 90,
      },
      {
        name: "Defiverse",
        logo: `${CloudinaryBaseUrl}/Defiverse.jpg`,
        alt: "Defiverse",
        width: 125,
        height: 90,
      },
      {
        name: "Dev_CODE_BLACK_LOGO_01",
        logo: `${CloudinaryBaseUrl}/Dev_CODE_BLACK_LOGO_01.jpeg`,
        alt: "Dev_CODE_BLACK_LOGO_01",
        width: 125,
        height: 90,
      },
      {
        name: "Devboard",
        logo: `${CloudinaryBaseUrl}/Devboard.png`,
        alt: "Devboard",
        width: 125,
        height: 90,
      },
      {
        name: "Devcans",
        logo: `${CloudinaryBaseUrl}/Devcans.jpg`,
        alt: "Devcans",
        width: 125,
        height: 90,
      },
      {
        name: "devdotcom",
        logo: `${CloudinaryBaseUrl}/devdotcom.png`,
        alt: "devdotcom",
        width: 125,
        height: 90,
      },
      {
        name: "DSC C.V. Raman global University",
        logo: `${CloudinaryBaseUrl}/DSC_C.V._Raman_global_University__Light_Horizontal_Logo.png`,
        alt: "DSC C.V. Raman global University",
        width: 125,
        height: 90,
      },
      {
        name: "FINTECH",
        logo: `${CloudinaryBaseUrl}/FINTECH.png`,
        alt: "FINTECH",
        width: 125,
        height: 90,
      },
      {
        name: "GDSC NKOCET Solapur",
        logo: `${CloudinaryBaseUrl}/GDSC_NKOCET_Solapur.jpg`,
        alt: "GDSC NKOCET Solapur",
        width: 125,
        height: 90,
      },
      {
        name: "Geek_room",
        logo: `${CloudinaryBaseUrl}/Geek_room.png`,
        alt: "Geek_room",
        width: 125,
        height: 90,
      },
      {
        name: "Github_Gitam",
        logo: `${CloudinaryBaseUrl}/Github_Gitam.jpg`,
        alt: "Github_Gitam",
        width: 125,
        height: 90,
      },
      {
        name: "gdsc_hit",
        logo: `${CloudinaryBaseUrl}/GDSC_HIT.jpg`,
        alt: "gdsc_hit",
        width: 125,
        height: 90,
      },
      {
        name: "Hack_Unicorn_Club_Logo",
        logo: `${CloudinaryBaseUrl}/Hack_Unicorn_Club_Logo.png`,
        alt: "Hack_Unicorn_Club_Logo",
        width: 125,
        height: 90,
      },
      {
        name: "IIEC",
        logo: `${CloudinaryBaseUrl}/IIEC.jpg`,
        alt: "IIEC",
        width: 125,
        height: 90,
      },
      {
        name: "Inovact",
        logo: `${CloudinaryBaseUrl}/Inovact.png`,
        alt: "Inovact",
        width: 125,
        height: 90,
      },
      {
        name: "IOT_Lab_Kiit",
        logo: `${CloudinaryBaseUrl}/IOT_Lab_Kiit.jpg`,
        alt: "IOT_Lab_Kiit",
        width: 125,
        height: 90,
      },
      {
        name: "MESH",
        logo: `${CloudinaryBaseUrl}/MESH.png`,
        alt: "MESH",
        width: 125,
        height: 90,
      },
      {
        name: "GDSC IIIT Surat",
        logo: `${CloudinaryBaseUrl}/GDSC_IIIT_Surat.png`,
        alt: "GDSC IIIT Surat",
        width: 125,
        height: 90,
      },
      {
        name: "Metaverse",
        logo: `${CloudinaryBaseUrl}/Metaverse.png`,
        alt: "Metaverse",
        width: 125,
        height: 90,
      },
      {
        name: "OCD",
        logo: `${CloudinaryBaseUrl}/OCD.jpeg`,
        alt: "OCD",
        width: 125,
        height: 90,
      },
      {
        name: "Open Source Chandigarh",
        logo: `${CloudinaryBaseUrl}/Open_Source_Chandigarh.jpg`,
        alt: "Open Source Chandigarh",
        width: 125,
        height: 90,
      },
      {
        name: "OWASP_Thapar",
        logo: `${CloudinaryBaseUrl}/OWASP_Thapar.png`,
        alt: "OWASP_Thapar",
        width: 125,
        height: 90,
      },
      {
        name: "Programming Society IIIT Bhubaneswar",
        logo: `${CloudinaryBaseUrl}/Programming_Society_IIIT_Bhubaneswar.jpeg`,
        alt: "Programming Society IIIT Bhubaneswar",
        width: 125,
        height: 90,
      },
      {
        name: "GDSCNarulaInstitute",
        logo: `${CloudinaryBaseUrl}/GDSCNarulaInstitute.jpg`,
        alt: "GDSCNarulaInstitute",
        width: 125,
        height: 90,
      },
      {
        name: "SOS_Tech_INC",
        logo: `${CloudinaryBaseUrl}/SOS_Tech_INC.jpg`,
        alt: "SOS_Tech_INC",
        width: 125,
        height: 90,
      },
      {
        name: "GDSC SGSITS",
        logo: `${CloudinaryBaseUrl}/GDSC_SGSITS.png`,
        alt: "GDSC SGSITS",
        width: 125,
        height: 90,
      },
      {
        name: "WebArch",
        logo: `${CloudinaryBaseUrl}/Webarch.jpg`,
        alt: "Webarch",
        width: 125,
        height: 90,
      },
      {
        name: "StartupGrind Bhubaneswar",
        logo: `${CloudinaryBaseUrl}/StartupGrind_Bhubaneswar.png`,
        alt: "StartupGrind Bhubaneswar",
        width: 125,
        height: 90,
      },
      {
        name: "GDSC IIIT Surat",
        logo: `${CloudinaryBaseUrl}/GDSC_IIIT_Surat.png`,
        alt: "GDSC IIIT Surat",
        width: 125,
        height: 90,
      },
      {
        name: "Zuraverse",
        logo: `${CloudinaryBaseUrl}/zuraverse.webp`,
        alt: "Zuraverse",
        width: 125,
        height: 90,
      },
      {
        name: "GDSSC IIIT BBSR",
        logo: `${CloudinaryBaseUrl}/gdsciiitbbsr.webp`,
        alt: "gdsciiitbbsr",
        width: 125,
        height: 90,
      },
      {
        name: "ieee",
        logo: `${CloudinaryBaseUrl}/ieee.webp`,
        alt: "ieee",
        width: 125,
        height: 90,
      },
      {
        name: "Meerut Codehub",
        logo: `${CloudinaryBaseUrl}/merutcodehub.webp`,
        alt: "Meerut Codehub",
        width: 125,
        height: 90,
      },
      {
        name: "Spectrum",
        logo: `${CloudinaryBaseUrl}/spectrum.webp`,
        alt: "Spectrum",
        width: 125,
        height: 90,
      },
      {
        name: "Fractal",
        logo: `${CloudinaryBaseUrl}/fractal.webp`,
        alt: "Fractal",
        width: 125,
        height: 90,
      },
      {
        name: "hackcbs",
        logo: `${CloudinaryBaseUrl}/hackcbs.webp`,
        alt: "hackcbs",
        width: 125,
        height: 90,
      },
      {
        name: "gdsclncts",
        logo: `${CloudinaryBaseUrl}/gdsclncts.webp`,
        alt: "gdsclncts",
        width: 125,
        height: 90,
      },
      {
        name: "gdscfiem",
        logo: `${CloudinaryBaseUrl}/gdscfiem.webp`,
        alt: "gdscfiem",
        width: 125,
        height: 90,
      },
      {
        name: "gdsclncte",
        logo: `${CloudinaryBaseUrl}/gdsclncte.webp`,
        alt: "Zuraverse",
        width: 125,
        height: 90,
      },
      {
        name: "codex",
        logo: `${CloudinaryBaseUrl}/codex.webp`,
        alt: "codex",
        width: 125,
        height: 90,
      },
      {
        name: "dapplink",
        logo: `${CloudinaryBaseUrl}/dapplink.webp`,
        alt: "dapplink",
        width: 125,
        height: 90,
      },
      {
        name: "gdscjgec",
        logo: `${CloudinaryBaseUrl}/gdscjgec.webp`,
        alt: "gdscjgec",
        width: 125,
        height: 90,
      },
      {
        name: "GDSC GGV",
        logo: `${CloudinaryBaseUrl}/gdscggv.webp`,
        alt: "GDSC GGV",
        width: 125,
        height: 90,
      },
      {
        name: "GDSC ITER",
        logo: `${CloudinaryBaseUrl}/gdsciter.webp`,
        alt: "GDSC ITER",
        width: 125,
        height: 90,
      },
      {
        name: "NSCC SRM",
        logo: `${CloudinaryBaseUrl}/nsccsrm.webp`,
        alt: "NSCC SRM",
        width: 125,
        height: 90,
      },
      {
        name: "GDSC UEMK",
        logo: `${CloudinaryBaseUrl}/gdscuem.webp`,
        alt: "GDSC UEMK",
        width: 125,
        height: 90,
      },
    ],
  },
  {
    category: "Media Partners",
    partners: [
      {
        name: "Rourkela 360",
        logo: "https://res.cloudinary.com/webwiz-team/image/upload/q_auto:/v1693992250/ho3/media/Rourkela360.png",
        alt: "Rourkela360",
        width: 174,
        height: 125,
      },
    ],
  },
];
