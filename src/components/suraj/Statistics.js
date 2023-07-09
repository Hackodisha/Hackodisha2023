import React from 'react'
import './statisticsStyle.css'


const Statistics = () => {
  return (
    <div className=" container  text-secondary w-screen" >
      <div className=" lg:text-[20px] md:text-[18px] font-semibold w-screen " >

        <h1 className="mt-[2.5rem] md:mt-[2rem] lg:mt-[2.5rem] xl:mt-[3rem] 2xl:mt-[3rem] -mb-1 sm:-mb-4 md:-mb-8 lg:-mb-12 xl:-mb-16 2xl:-mb-16 underline underline-offset-[7px] mx-6 smallmobile:mx-2 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-16  text-3xl sm:text-2xl md:text-2xl lg:text-3xl xl:3xl 2xl:text-4xl smallmobile:text-lg font-normal 2xl:m-auto 2xl:w-[90%] ">Statistics</h1>
        <div className='upperline 2xl:m-auto 2xl:w-[90%]'></div>
        <div className=" grid grid-cols-2 w-full mt-4 smallmobile:grid-cols-1 place-items-center md:grid-cols-4 lg:grid-cols-4 "  >

          <div className="card md:h-[20rem] xl:h-[25rem] 2xl:h-[25rem] h-64 md:pb-[5rem] xl:pb-[5rem] 2xl:pb-[5rem] w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none" >
            <div className='frame h-full w-full '>
              <h3 className="p-8 text-3xl sm:text-2xl md:text-3xl 2xl:text-4xl ">1600+</h3>
            </div>
            <div className='base w-full lg:w-10/12 xl:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32'>
              <p className=" smallmobile:text-xs text-sm sm:text-lg md:text-base 2xl:text-lg ">Registrations</p>
            </div>
          </div>
          <div className="card md:h-[20rem] xl:h-[25rem] 2xl:h-[25rem] md:pt-[5rem] xl:pt-[5rem] 2xl:pt-[5rem] h-64 w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none" >
            <div className='frame h-full w-full '>
              <h3 className="p-8 text-3xl sm:text-2xl md:text-3xl 2xl:text-4xl ">1600+</h3>
            </div>
            <div className='base w-full lg:w-10/12 xl:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32'>
              <p className=" smallmobile:text-xs text-sm sm:text-lg md:text-base 2xl:text-lg ">Registrations</p>
            </div>
          </div>
          <div className="card md:h-[20rem] xl:h-[25rem] 2xl:h-[25rem] h-64 md:pb-[5rem] xl:pb-[5rem] 2xl:pb-[5rem] w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none" >
            <div className='frame h-full w-full '>
              <h3 className="p-8 text-3xl sm:text-2xl md:text-3xl 2xl:text-4xl ">1600+</h3>
            </div>
            <div className='base w-full lg:w-10/12 xl:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32'>
              <p className=" smallmobile:text-xs text-sm sm:text-lg md:text-base 2xl:text-lg ">Registrations</p>
            </div>
          </div>
          <div className="card md:h-[20rem] xl:h-[25rem] 2xl:h-[25rem] md:pt-[5rem] xl:pt-[5rem] 2xl:pt-[5rem] h-64 w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none" >
            <div className='frame h-full w-full '>
              <h3 className="p-8 text-3xl sm:text-2xl md:text-3xl 2xl:text-4xl ">1600+</h3>
            </div>
            <div className='base w-full lg:w-10/12 xl:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32'>
              <p className=" smallmobile:text-xs text-sm sm:text-lg md:text-base 2xl:text-lg ">Registrations</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-16 py-8">
          <a href="https://deploy-preview-78--hackodisha2022.netlify.app/" rel="noreferrer" target="_blank">
            <i className="text-xs sm:text-base md:text-lg lg:text-xl 2xl:text-2xl">
              <u>Go to HackOdisha 2.0&gt;</u>
            </i>
          </a>
        </div>

      </div>

    </div>

  )
}

export default Statistics