import Image from "next/image";
import "./footer-styles.css";
import Icon from "./assets/HO3 png 1.svg";
import Insta from "./assets/insta.svg";
import Linkedin from "./assets/linkedin.svg";
import Twitter from "./assets/twitter.svg";

import Vector from "./assets/Vector 95.svg";
export default function Footer() {
  return (
    <div id="footer-background-container" className="bg-black xl:pt-[23rem] lg:pt-16 pt-10">
      <div
        
        className="flex flex-wrap sm:flex-nowrap justify-between xl:mt-16"
      >
        <div className="left md:block lg:mr-[13.8775rem] sm:mr-[5rem] 2xl:pl-[9.5rem] sm:pl-[4rem]  mobile:text-center mobile:m-auto z-30 2xl:ml-[-5rem] wide:ml-[-5rem] wide:mr-[20rem]">
          <Image
            fill={false}
            src={Icon}
            className="lg:w-[19.375rem] sm:w-[12rem] w-[8rem] 2xl:h-[7.0625rem] xl:h-[6rem] opacity-[0.9100000262260437] mobile:m-auto"
          ></Image>
          <Image
            className="absolute left-0 xl:bottom-[-37rem] lg:bottom-[-12rem] md:bottom-[-9rem] sm:bottom-[-8rem] mobile:hidden w-[100vw] stroke-[1px] stroke-[#BBB4B438]"
            src={Vector}
          ></Image>
          <div className="flex flex-col justify-start ">
            <h2 className="2xl:w-[32.625rem] xl:w-[25rem] xl:text-[1.8125rem] sm:text-[1.4rem] md:mt-[4.81rem] mt-[2rem] md:mb-[3rem] mb-[2rem] text-white font-bold leading-[218.523%] mobile:m-auto mobile:text-center mobile:my-6 wide:text-[3rem] wide:mb-10">
              Want to become a sponsor of Hackodisha 3.0?
            </h2>
            <button className="inline-flex justify-center items-center gap-[0.625rem] px-[2.375rem] py-[1.5rem] bg-[#CA40CD] rounded-[3.5rem] sm:rounded-[3.5625rem] sm:px-5 sm:py-2 md:px-12 md:py-6 text-[#FFEAEA] text-[1.2rem] lg:text-[1.375rem] font-bold leading-[147%] hover:bg-fuchsia-400 ease-in duration-100 text-center mobile:px-12 mobile: mobile:text-[1rem] wide:mb-28 wide:h-[7rem] wide:text-4xl max-w-[80vw] m-auto sm-mobile:px-6 sm-mobile:py-3" >
              Become a sponsor
            </button>
          </div>
        </div>

        <div className="pr-[3.5rem] sm:px-4 mr-4 text-white sm:max-md:pt-[5rem] mobile:pl-[4rem] mobile:m-auto mobile:pt-8 z-30 2xl:mt-[-1rem] wide:mt-[-7rem] wide:-mr-32 ">
          <p className=" font-thin text-justify leading-[147.023%] xl:text-[3.5rem] md:text-[2rem] sm:text-[1.5rem] text-[#06EBE5] mb-[1.75rem] mobile:mb-[1rem] mobile:mt-[2.5rem] wide:text-[5rem] wide:mb-20  sm-mobile:pl-[1rem]">
            Sitemap
          </p>
          <ul className="inline-flex flex-col justify-center items-start gap-[0.625rem] xl:text-[2.25rem] md:text-[1.5rem] sm:text-[1rem] font-bold text-justify leading-[147.023%] mobile:items-left sm-mobile:items-center wide:text-[3rem] ">
            <li className="hover:text-slate-500 cursor-pointer ">Home</li>
            <li className="hover:text-slate-500 cursor-pointer ">About us</li>
            <li className="hover:text-slate-500 cursor-pointer ">Prizes</li>
            <li className="hover:text-slate-500 cursor-pointer ">Contact us</li>
            <li className="hover:text-slate-500 cursor-pointer ">Sponsors</li>
            <li className="hover:text-slate-500 cursor-pointer ">FAQs</li>
          </ul>
        </div>
        <div className="px-[3.5rem] sm:px-4 mr-4 text-white text-center sm:max-md:pt-[5rem] mobile:m-auto mobile:text-center mobile:pt-8 z-30 2xl:mt-[-1rem] wide:mt-[-7rem] wide:pr-[10rem] ">
          <p className=" font-thin text-justify leading-[147.023%] xl:text-[3.5rem] md:text-[2rem] sm:text-[1.5rem] text-[#06EBE5] mb-[1.75rem] wide:text-[5rem]  wide:mb-20 ">
            Socials
          </p>
          <ul className="inline-flex flex-col justify-between shrink-0">
            <li>
              <a className="text-center mb-5" href="">
                <Image
                  fill={false}
                  className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5 brightness-200"
                  src={Insta}
                ></Image>
              </a>
            </li>
            <li>
              <a className="text-center mb-5" href="">
                <Image
                  fill={false}
                  className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5 brightness-200"
                  src={Linkedin}
                ></Image>
              </a>
            </li>
            <li>
              <a className="text-center mb-5" href="">
                <Image
                  fill={false}
                  className="sm:w-[3rem] w-8 sm:h-[3rem] h-8 m-auto mb-5 brightness-200"
                  src={Twitter}
                ></Image>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="h-[0.0625rem] bg-gray-200 dark:bg-gray-800 border-0 mt-[4rem] mb-[2.81rem]"></hr>
      <h2 className="text-[#D9D9D9] sm:text-[1rem] lg:text-[1.625rem] text-center font-bold leading-[147.023%] pb-[3.62rem] opacity-[0.8999999761581421] wide:text-[3rem] ">
        Hackodisha 3.0 © 2023. Powered by Webwiz, NIT Rourkela.
      </h2>
    </div>
  );
}
