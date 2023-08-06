import React from "react";
import Image from "next/image";
import Title from "../CommonComponent/Title/Title";
import "./statisticsStyle.css";
import Image5 from "./assets/Union.svg";
import cityscapeInv from "../Images/cityscape-2.webp";
import silhouette from "../Images/silhouette.webp";

const Statistics = () => {
  return (
    <div className=" stats-section relative flex min-h-fit min-w-screen items-center  shadow overflow-x-hidden pb-[75px] sm:pb-[360px] -mb-20 ">
      <Image
        src={cityscapeInv}
        fill
        className="object-cover sm:object-contain object-top h-[50%] opacity-25"
      />
      <div className=" container  text-secondary w-screen relative z-50">
        <div className=" lg:text-[20px] md:text-[18px] font-semibold w-screen ">
          <Title title={"Past Statistics"} className={"px-5 sm:px-10 pt-5"}>
            Statistics
          </Title>
          <div className="line">
            <Image src={Image5} alt="Image" className="img2"></Image>
          </div>
          <div className=" grid grid-cols-2 w-full mt-[50px] sm:mt-[216px] font-syoog smallmobile:grid-cols-1 place-items-center md:grid-cols-4 lg:grid-cols-4 ">
            <div className="card md:h-[20rem] xl:h-[25rem] 2xl:h-[25rem] h-64 md:pb-[5rem] xl:pb-[5rem] 2xl:pb-[5rem] w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none">
              <div className="frame h-full w-full ">
                <h3 className="p-8 text-3xl sm:text-2xl md:text-3xl 2xl:text-4xl ">
                  3100+
                </h3>
              </div>
              <div className="base w-full lg:w-10/12 xl:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32">
                <p className=" smallmobile:text-xs text-sm sm:text-lg md:text-base 2xl:text-lg ">
                  Registrations
                </p>
              </div>
            </div>
            <div className="card md:h-[20rem] xl:h-[25rem] 2xl:h-[25rem] md:pt-[5rem] xl:pt-[5rem] 2xl:pt-[5rem] h-64 w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none">
              <div className="frame h-full w-full ">
                <h3 className="p-8 text-3xl sm:text-2xl md:text-3xl 2xl:text-4xl ">
                  50+
                </h3>
              </div>
              <div className="base w-full lg:w-10/12 xl:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32">
                <p className=" smallmobile:text-xs text-sm sm:text-lg md:text-base 2xl:text-lg ">
                  Communities
                </p>
              </div>
            </div>
            <div className="card md:h-[20rem] xl:h-[25rem] 2xl:h-[25rem] h-64 md:pb-[5rem] xl:pb-[5rem] 2xl:pb-[5rem] w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none">
              <div className="frame h-full w-full ">
                <h3 className="p-8 text-3xl sm:text-2xl md:text-3xl 2xl:text-4xl ">
                  40+
                </h3>
              </div>
              <div className="base w-full lg:w-10/12 xl:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32">
                <p className=" smallmobile:text-xs text-sm sm:text-lg md:text-base 2xl:text-lg ">
                  Sponsors
                </p>
              </div>
            </div>
            <div className="card md:h-[20rem] xl:h-[25rem] 2xl:h-[25rem] md:pt-[5rem] xl:pt-[5rem] 2xl:pt-[5rem] h-64 w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none">
              <div className="frame h-full w-full ">
                <h3 className="p-8 text-3xl sm:text-2xl md:text-3xl 2xl:text-4xl ">
                  100+
                </h3>
              </div>
              <div className="base w-full lg:w-10/12 xl:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32">
                <p className=" smallmobile:text-xs text-sm sm:text-lg md:text-base 2xl:text-lg ">
                  Schools
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end mr-16 py-8">
            <a
              href="https://hackodisha2022.devfolio.co/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="text-xs sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
                <span>Go to HackOdisha 2.0&gt;</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Image
        src={silhouette}
        fill
        className="object-contain object-bottom  h-[25%] opacity-50"
      />
    </div>
  );
};

export default Statistics;
