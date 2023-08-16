import React from "react";
import Image from "next/image";
import Title from "../CommonComponent/Title/Title";
import line from "./assets/union1.svg";
import bg from "./assets/bg.png";
import jud from "./assets/jud.png";
import event from "./assets/events.jpg";

const Judges = () => {
    return (
        <>
            <div className=' w-full  z-50'>
                <Image fill src={bg} className="-z-10 object-cover sm:hidden block 2xl:block "></Image>
                <Title title={"Judges"} className={"px-5 sm:px-10 py-5"}></Title>
                <div className="line">
                    <Image src={line} alt="Image" className="img2"></Image>
                </div>
                <div id="judges" className=' sm:grid-cols-3 grid gap-9 grid-cols-2 justify-evenly py-[4rem]  w-[80%] mx-auto '>

                    <div className='lg:w-[16.08581rem] md:w-[10.08581rem] sm:w-[5.08581rem] min-[320px]:w-[0.2rem] lg:h-[23.1rem] md:h-[17.1rem] sm:h-[12.1rem] hover:text-[#FF2525] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out text-[#FFF]'>
                        <span className="hover:text-[#FF2525] "><Image
                            src={jud}
                            className='w-full h-[80%] '
                        />
                        </span>
                        <h3 className='font-Syoog font-ligh leading-normal   lg:text-[1.6rem] text-[0.9rem]  text-center'>Lorem, ipsum.</h3>
                        <h3 className='text-[#FFF] text-center lg:text-[0.9rem] text-[0.5rem] '> Co founder , WEB FLOW</h3>
                    </div><div className='lg:w-[16.08581rem] md:w-[10.08581rem] sm:w-[5.08581rem] lg:h-[23.1rem] md:h-[17.1rem] sm:h-[12.1rem] hover:text-[#FF2525] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out text-[#FFF]'>
                        <span className="hover:text-[#FF2525] "><Image
                            src={jud}
                            className='w-full h-[80%] '
                        />
                        </span>
                        <h3 className='font-Syoog font-ligh leading-normal   lg:text-[1.6rem] text-[0.9rem]  text-center'>Lorem, ipsum.</h3>
                        <h3 className='text-[#FFF] text-center lg:text-[0.9rem] text-[0.5rem] '> Co founder , WEB FLOW</h3>
                    </div><div className='lg:w-[16.08581rem] md:w-[10.08581rem] sm:w-[5.08581rem] lg:h-[23.1rem] md:h-[17.1rem] sm:h-[12.1rem] hover:text-[#FF2525] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out text-[#FFF]'>
                        <span className="hover:text-[#FF2525] "><Image
                            src={jud}
                            className='w-full h-[80%] '
                        />
                        </span>
                        <h3 className='font-Syoog font-ligh leading-normal   lg:text-[1.6rem] text-[0.9rem]  text-center'>Lorem, ipsum.</h3>
                        <h3 className='text-[#FFF] text-center lg:text-[0.9rem] text-[0.5rem] '> Co founder , WEB FLOW</h3>
                    </div><div className='lg:w-[16.08581rem] md:w-[10.08581rem] sm:w-[5.08581rem] lg:h-[23.1rem] md:h-[17.1rem] sm:h-[12.1rem] hover:text-[#FF2525] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out text-[#FFF]'>
                        <span className="hover:text-[#FF2525] "><Image
                            src={jud}
                            className='w-full h-[80%] '
                        />
                        </span>
                        <h3 className='font-Syoog font-ligh leading-normal   lg:text-[1.6rem] text-[0.9rem]  text-center'>Lorem, ipsum.</h3>
                        <h3 className='text-[#FFF] text-center lg:text-[0.9rem] text-[0.5rem] '> Co founder , WEB FLOW</h3>
                    </div><div className='lg:w-[16.08581rem] md:w-[10.08581rem] sm:w-[5.08581rem] lg:h-[23.1rem] md:h-[17.1rem] sm:h-[12.1rem] hover:text-[#FF2525] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out text-[#FFF]'>
                        <span className="hover:text-[#FF2525] "><Image
                            src={jud}
                            className='w-full h-[80%] '
                        />
                        </span>
                        <h3 className='font-Syoog font-ligh leading-normal   lg:text-[1.6rem] text-[0.9rem]  text-center'>Lorem, ipsum.</h3>
                        <h3 className='text-[#FFF] text-center lg:text-[0.9rem] text-[0.5rem] '> Co founder , WEB FLOW</h3>
                    </div><div className='lg:w-[16.08581rem] md:w-[10.08581rem] sm:w-[5.08581rem] lg:h-[23.1rem] md:h-[17.1rem] sm:h-[12.1rem] hover:text-[#FF2525] grayscale hover:grayscale-0 transition-all duration-300 ease-in-out text-[#FFF]'>
                        <span className="hover:text-[#FF2525] "><Image
                            src={jud}
                            className='w-full h-[80%] '
                        />
                        </span>
                        <h3 className='font-Syoog font-ligh leading-normal   lg:text-[1.6rem] text-[0.9rem]  text-center'>Lorem, ipsum.</h3>
                        <h3 className='text-[#FFF] text-center lg:text-[0.9rem] text-[0.5rem] '> Co founder , WEB FLOW</h3>
                    </div>

                </div>
                <Title title={"Events"} className={"px-5 sm:px-10 py-5"}></Title>
                <div className="line">
                    <Image src={line} alt="Image" className="img2"></Image>
                </div>

                <div id="events" className='sm:grid-cols-2 grid gap-7 grid-cols-1 py-[8rem] w-[80%] mx-auto'>
                    <Image
                        src={event}
                        alt="Event"
                        className=' lg:w-[28rem] md:w-[20rem] sm:w-[15rem]lg:h-[32rem] md:h-[24rem] sm:h-[19rem] hover:scale-105 transition ease-in-out duration-300 hover:border-[#f669b9ca] hover:border-[4px] border-[4px] border-black'
                    >
                    </Image>
                    <Image
                        src={event}
                        alt="Event"
                        className=' lg:w-[28rem] md:w-[20rem] sm:w-[15rem]lg:h-[32rem] md:h-[24rem] sm:h-[19rem] hover:scale-105 transition ease-in-out duration-300 hover:border-[#f669b9ca] hover:border-[4px] border-[4px] border-black'
                    >
                    </Image>
                </div>


            </div>
        </>
    )
}

export default Judges;


