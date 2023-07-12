import React from 'react'
import './TracksPrizesStyle.css'
import Image from "next/image";


const TracksPrizes = () => {
  return (
    <>
      <div className=''>
        <Image src={"/images/TrackPrizes.svg"} alt="logo" width="100" height="100" className="w-[7rem] sm:w-[12rem] md:w-[14rem] lg:w-[18rem] xl:w-[24rem] 2xl:w-[30rem] ml-[1rem] sm:ml-[2.4rem] md:ml-[3rem] lg:ml-[4.5rem] xl:ml-[4.6rem] 2xl:ml-[5.3rem] mt-[1rem] sm:mt-[1.4rem] md:mt-[1.8rem] lg:mt-[2rem] xl:mt-[3rem] 2xl:mt-[4rem] mb-[-0.4rem] sm:mb-[-0.8rem] md:mb-[-1rem] lg:mb-[-1rem] xl:mb-[-2rem] 2xl:mb-[-3rem]" />
        <Image src={"/images/UpperLine.svg"} alt="logo" width="100" height="100" className="w-[-webkit-fill-available] " />
        <div className='w-full mt-[1rem] sm:mt-[1.6rem] md:mt-[1.8rem] lg:mt-[2rem] xl:mt-[2rem] 2xl:mt-[4rem] pl-[1rem] sm:pl-[1.6rem]  md:pl-[2rem] lg:pl-[2.5rem] xl:pl-[3rem] 2xl:pl-[4rem]'>
          <Image src={"/images/TopBoundary.svg"} alt="logo" width="100" height="100" className="w-[56%] " />
        </div>
      </div>
      <div className='flex'>
        <div className='w-3/4'>
            <div className='flex mt-[-18%] justify-evenly'>
              <Image src={"/images/HealthCareLogo.svg"} alt="logo" width="100" height="100" className="boundary1 p-2  " />
              <Image src={"/images/HealthCareText.svg"} alt="logo" width="100" height="100" className="w-[40%]  " />
              <Image src={"/images/Angle.svg"} alt="logo" width="100" height="100" className="w-[5%] mt-[15%]" />
            </div>
          <div className='flex mt-[5%]'>
            <div className='w-[8%] ml-[4%]'>
              <Image src={"/images/VerticalLine.svg"} alt="logo" width="100" height="100" className="w-[15%]" />
              <Image src={"/images/VerticalLine.svg"} alt="logo" width="100" height="100" className="w-[15%]" />
            </div>
            <div className='w-[92%] flex-col'>
              <div className='h-[33%] flex justify-evenly '>
                <Image src={"/images/Arrow.svg"} alt="logo" width="100" height="100" className="w-[4%]" />
                <Image src={"/images/TextImages/001.svg"} alt="logo" width="100" height="100" className="w-[8%]" />
                <Image src={"/images/TextImages/first.svg"} alt="logo" width="100" height="100" className="w-[20%]" />
                <Image src={"/images/TextImages/dotted1.svg"} alt="logo" width="100" height="100" className="w-[35%]" />
                <Image src={"/images/TextImages/2500.svg"} alt="logo" width="100" height="100" className="w-[11%]" />
              </div>
              <div className='h-[33%] flex justify-evenly '>
                <Image src={"/images/Arrow.svg"} alt="logo" width="100" height="100" className="w-[4%]" />
                <Image src={"/images/TextImages/001.svg"} alt="logo" width="100" height="100" className="w-[8%]" />
                <Image src={"/images/TextImages/second.svg"} alt="logo" width="100" height="100" className="w-[22%]" />
                <Image src={"/images/TextImages/dotted2.svg"} alt="logo" width="100" height="100" className="w-[33%]" />
                <Image src={"/images/TextImages/2000.svg"} alt="logo" width="100" height="100" className="w-[11%]" />
              </div>
              <div className='h-[33%] flex justify-evenly '>
                <Image src={"/images/Arrow.svg"} alt="logo" width="100" height="100" className="w-[4%]" />
                <Image src={"/images/TextImages/001.svg"} alt="logo" width="100" height="100" className="w-[8%]" />
                <Image src={"/images/TextImages/third.svg"} alt="logo" width="100" height="100" className="w-[20%]" />
                <Image src={"/images/TextImages/dotted1.svg"} alt="logo" width="100" height="100" className="w-[35%]" />
                <Image src={"/images/TextImages/1500.svg"} alt="logo" width="100" height="100" className="w-[11%]" />
              </div>
              <div>
                <Image src={"/images/TextImages/PresentedBy.svg"} alt="logo" width="100" height="100" className="w-[30%] mt-[10%]" />
              </div>
              
            </div>
          </div>
        </div>
        <div className='w-1/4 '>
          <div className='flex flex-col mt-[-65%] ml-[5%] p-1'> 
            <Image src={"/images/TextImages/Health.svg"} alt="logo" width="100" height="100" className="w-[50%] bg1 p-[24%]" />
            <div className='flex flex-col bg2 mt-[-4%] p-[8%] '>
              <Image src={"/images/TextImages/Web3.svg"} alt="logo" width="100" height="100" className="w-[34%] mt-[22%]" />
              <Image src={"/images/TextImages/HorizentalLine.svg"} alt="logo" width="100" height="100" className="w-[60%] mt-[20%]" />
              <Image src={"/images/TextImages/Environment.svg"} alt="logo" width="100" height="100" className="w-[84%] mt-[28%]" />
              <Image src={"/images/TextImages/HorizentalLine.svg"} alt="logo" width="100" height="100" className="w-[60%] mt-[20%]" />
              <Image src={"/images/TextImages/Women.svg"} alt="logo" width="100" height="100" className="w-[52%] mt-[34%]" />
              <Image src={"/images/TextImages/HorizentalLine.svg"} alt="logo" width="100" height="100" className="w-[60%] mt-[15%]" />
            </div>
            <Image src={"/images/TextImages/Innovation.svg"} alt="logo" width="100" height="100" className="w-[50%] p-[18%] mt-[6%] bg3" />
          </div>
        </div>
      </div>
        <div className='flex'>
          <Image src={"/images/BottomBoundary.svg"} alt="logo" width="100" height="100" className="w-[70%] ml-[4%] mt-[6%]" />
          <Image src={"/images/RightBoundary.svg"} alt="logo" width="100" height="100" className="w-[15%] ml-[9%] mt-[-25%]" />
        </div>
    </>
  )
}

export default TracksPrizes