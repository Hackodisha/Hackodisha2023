import React from "react";
import Image from "next/image";
import Image5 from "./assets/centerLine.svg";
import centerLineImage from "./assets/centerLineMobile.svg";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";
import insta from "./assets/insta.svg";
import discord from "./assets/discord.svg";
import footerBuilding from "./assets/footerBuilding.webp";
const Footer = () => {
  return (
    <>
      <div className="w-full relative  z-40 2xl:-mt-20 pt-20">
      <Image
        src={footerBuilding}
        fill
        className="-z-10 relative object-cover sm:hidden block 2xl:block "
      />
        <div className="sm:block hidden mt-36 relative">
          <div className="topHead">
            <div className="grid grid-cols-4">
              <div className=" ml-24 col-span-2">
                <Image
                  src="/Images/HO3.svg"
                  width={310}
                  height={113}
                  alt="HackOdisha Logo"
                  className=" -mb-[48px] max-w-[20vw] lg:w-64  "
                />
              </div>
              <p className="text-[#06EBE5] lg:text-2xl text-xl mb-2 text-center">
                Sitemap
              </p>
              <p className="text-[#06EBE5] lg:text-2xl text-xl mb-2 text-center">
                Socials
              </p>
            </div>

            <div className="line">
              <Image src={Image5} alt="Image" className="img2"></Image>
            </div>

            <div className="grid grid-cols-4 text-white ">
              <div className="flex flex-col gap-8 md:gap-16 col-span-2 ml-24 py-12 lg:text-2xl text-lg leading-loose">
                <p>
                  Want to Become a Sponsor <br /> of HackOdisha 3.0?
                </p>
              <a target="_blank" rel = "noreferrer" href="mailto:sponsorships@hackodisha.tech" >
                <button className=" bg-[#CA40CD] rounded-[3.5rem] md:rounded-[3.5625rem] px-4 py-2  md:px-6 md:py-3 lg:px-12 lg:py-6 text-[#FFEAEA] text-sm 2xl:text-lg font-bold leading-[147%] hover:bg-fuchsia-400 ease-in duration-100 text-center w-fit">
                  Become a sponsor
                </button>
                </a>
              </div>

              <ul className="inline-flex flex-col text-start w-fit mx-auto lg:-mt-8 xl:-mt-12 mt-6 gap-4 text-base md:text-xl">
                <a href="/#home"><li className="hover:text-slate-500 cursor-pointer ">Home</li></a>
                <a href="/#about-us"><li className="hover:text-slate-500 cursor-pointer ">
                  About us
                </li>
                </a>
                <a  href="/#prizes"><li className="hover:text-slate-500 cursor-pointer ">Prizes</li></a>
                <a  href="mailto:mail@hackodisha.tech"><li className="hover:text-slate-500 cursor-pointer ">
                  Contact us
                </li></a>
                <a  href="/#sponsors"><li className="hover:text-slate-500 cursor-pointer ">
                  Sponsors
                </li>
                </a>
                <a href="/#faq"><li className="hover:text-slate-500 cursor-pointer ">FAQs</li></a>
              </ul>
              <ul className="inline-flex flex-col text-start w-fit mx-auto lg:-mt-8 xl:-mt-12 mt-6 gap-4 text-lg md:text-2xl">
                <li>
                  <a target="_blank" rel = "noreferrer" className="text-center mb-5" href="https://discord.gg/ewun7cxkJh">
                    <Image
                      fill={false}
                      className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5 brightness-200  hover:brightness-75 transition-all ease-in"
                      src={discord}
                    ></Image>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel = "noreferrer" className="text-center mb-5" href="https://www.instagram.com/webwiz.nitr/">
                    <Image
                      fill={false}
                      className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5 fill-[#8e8e8e] hover:brightness-75 transition-all ease-in"
                      src={insta}
                    ></Image>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel = "noreferrer" className="text-center mb-5" href="https://www.linkedin.com/company/hackodisha3/">
                    <Image
                      fill={false}
                      className="w-[2rem] h-[2rem] m-auto mb-5  hover:brightness-75 transition-all ease-in"
                      src={linkedin}
                    ></Image>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel = "noreferrer" className="text-center mb-5" href="https://www.linkedin.com/company/hackodisha3/">
                    <Image
                      fill={false}
                      className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5  hover:brightness-75 transition-all ease-in"
                      src={twitter}
                    ></Image>
                  </a>
                </li>
              </ul>
            </div>

            <hr />
            <h3 className="text-xl mx-auto w-fit py-10 text-white max-w-[90vw] text-center">
              Hackodisha 3.0 © 2023. Powered by Webwiz, NIT Rourkela.
            </h3>
          </div>
        </div>
        <div className="sm:hidden block mt-20 relative">
          <div className="line my-4">
            <Image src={centerLineImage} alt="Image" className="img2"></Image>
          </div>
          <div className="topHead">
            <div className="w-fit mx-auto">
              <Image
                src="/Images/HO3.svg"
                width={310}
                height={113}
                alt="HackOdisha Logo"
                className=" px-8 max-w-[60vw] "
              />
              <ul className="inline-flex justify-between w-full lg:-mt-8 xl:-mt-12 mt-6 gap-4 text-lg md:text-2xl">
                <li>
                  <a target="_blank" rel = "noreferrer"  className="text-center mb-5" href="https://discord.gg/ewun7cxkJh">
                    <Image
                      fill={false}
                      className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5  brightness-200  hover:brightness-75 transition-all ease-in"
                      src={discord}
                    ></Image>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel = "noreferrer" className="text-center mb-5" href="https://www.instagram.com/webwiz.nitr/">
                    <Image
                      fill={false}
                      className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5   hover:brightness-75 transition-all ease-in"
                      src={insta}
                    ></Image>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel = "noreferrer" className="text-center mb-5" href="https://www.linkedin.com/company/hackodisha3/">
                    <Image
                      fill={false}
                      className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5  hover:brightness-75 transition-all ease-in"
                      src={linkedin}
                    ></Image>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel = "noreferrer" className="text-center mb-5" href="https://www.linkedin.com/company/hackodisha3/">
                    <Image
                      fill={false}
                      className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5  hover:brightness-75 transition-all ease-in"
                      src={twitter}
                    ></Image>
                  </a>
                </li>
              </ul>
            </div>

            <div className="line">
              <Image src={centerLineImage} alt="Image" className="img2"></Image>
            </div>

            <div className="flex flex-col text-white gap-6 col-span-2 mx-auto w-fit text-center items-center text-sm leading-loose">
              <p>
                Want to Become a Sponsor <br /> of HackOdisha 3.0?
              </p>
              <a target="_blank" rel = "noreferrer" href="mailto:sponsorships@hackodisha.tech" >
              <button className=" bg-[#CA40CD] mb-4 rounded-[3.5rem] md:rounded-[3.5625rem] px-4 py-2   text-[#FFEAEA] text-[0.75rem] font-bold leading-[147%] hover:bg-fuchsia-400 ease-in duration-100 text-center w-fit">
                Become a sponsor
              </button>
              </a>
            </div>

          

            <hr className="px-4" />
            <h3 className="text-xs mx-auto w-fit py-10 text-white max-w-[90vw] text-center">
              Hackodisha 3.0  2023. Powered by Webwiz, NIT Rourkela.
            </h3>
          </div>
        </div>
      </div>

      <Image
        src={footerBuilding}
        fill
        className="-z-10 relative object-contain sm:block hidden object-bottom  2xl:hidden "
      />
    </>
  );
};

export default Footer;
