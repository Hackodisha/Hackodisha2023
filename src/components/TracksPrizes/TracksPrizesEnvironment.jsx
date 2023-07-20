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
                        <Image src={"/images/EnvironmentLogo.svg"} alt="logo" width="100" height="100" className="boundary1 p-2  " />
                        <Image src={"/images/EnvironmentText.svg"} alt="logo" width="100" height="100" className="w-[40%]  " />
                        <Image src={"/images/Angle.svg"} alt="logo" width="100" height="100" className="w-[5%] mt-[15%]" />
                    </div>
                    <div className='flex mt-[5%]'>
                        <div className='w-[8%] ml-[4%]'>
                            <Image src={"/images/VerticalLine.svg"} alt="logo" width="100" height="100" className="w-[15%]" />
                            <Image src={"/images/VerticalLine.svg"} alt="logo" width="100" height="100" className="w-[15%]" />
                        </div>
                        <div className='w-[92%] flex-col'>
                            <div className='h-[33%] flex justify-evenly items-center'>
                                <Image src={"/images/Arrow.svg"} alt="logo" width="100" height="100" className="w-[4%]" />
                                <h1 className='text-white text-[0.6rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>001</h1>
                                <h1 className='text-white text-[0.6rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>FIRST PRIZE</h1>
                                <h1 className='text-white text-[0.6rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>.................</h1>
                                <h1 className='text-white text-[0.6rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>$2500</h1>
                            </div>
                            <div className='h-[33%] flex justify-evenly items-center'>
                                <Image src={"/images/Arrow.svg"} alt="logo" width="100" height="100" className="w-[4%]" />
                                <h1 className='text-white text-[0.6rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>002</h1>
                                <h1 className='text-white text-[0.6rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>SECOND PRIZE</h1>
                                <h1 className='text-white text-[0.6rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>..............</h1>
                                <h1 className='text-white text-[0.6rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>$2000</h1>
                            </div>
                            <div className='h-[33%] flex justify-evenly items-center'>
                                <Image src={"/images/Arrow.svg"} alt="logo" width="100" height="100" className="w-[4%]" />
                                <h1 className='text-white text-[0.6rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>003</h1>
                                <h1 className='text-white text-[0.6rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>THIRD PRIZE</h1>
                                <h1 className='text-white text-[0.6rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>.................</h1>
                                <h1 className='text-white text-[0.6rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl '>$1500</h1>
                            </div>
                            <div>
                                <h1 className='text-white text-[0.7rem] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-[10%]'>PRESENTED BY</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/4'>
                    <div className='flex flex-col mt-[-65%] ml-[5%] p-1 '>
                        <h1 className='text-white text-[0.38rem] sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl w-[100%] p-[20%] flex justify-center text-center bg11'>HEALTHCARE</h1>
                        <Image src={"/images/HorizentalLine.svg"} alt="logo" width="100" height="100" className="w-[40%] ml-[18%] mt-[4%]" />
                        <div className='flex flex-col bg8 p-[13%] '>
                            <h1 className='text-white text-[0.38rem] sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl w-[100%] flex justify-center text-center '>WEB3</h1>
                        </div>
                        <h1 className='text-white text-[0.38rem] sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl w-[100%] p-[23%] flex justify-center text-center bg7'>ENVIRONMENT</h1>
                        <div className='flex flex-col bg9 p-[10%] '>
                            <h1 className='text-white text-[0.38rem] sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl w-[100%] flex justify-center text-center mt-[20%]'>WOMAN<br />SECURITY</h1>
                            <Image src={"/images/HorizentalLine.svg"} alt="logo" width="100" height="100" className="w-[60%] mt-[18%]" />
                        </div>
                        <h1 className='text-white text-[0.38rem] sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl w-[100%] p-[18%] flex justify-center text-center mt-[4%] bg10'>OPEN<br />INNOVATION</h1>
                    </div>
                </div>
            </div>
            <div className='flex '>
                <Image src={"/images/BottomBoundary.svg"} alt="logo" width="100" height="100" className="w-[70%] ml-[4%] mt-[6%]" />
                <Image src={"/images/RightBoundary.svg"} alt="logo" width="100" height="100" className="w-[15%] ml-[9%] mt-[-25%]" />
            </div>
        </>
    )
}

export default TracksPrizes