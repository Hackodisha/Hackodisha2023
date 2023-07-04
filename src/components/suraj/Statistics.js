import React from 'react'
import './statisticsStyle.css'


const Statistics = () => {
  return (
    <div className=" container p-3 textcolor justify-center" >
      <div className=" lg:text-[20px] md:text-[18px] font-semibold " >
        <h1 className="mt-[1.5rem] md:mt-[2rem] lg:mt-[2.5rem] xl:mt-[3rem] 2xl:mt-[3rem] md:mb-[0rem] lg:mb-[-1rem] xl:mb-[-1rem] 2xl:mb-[-2rem] underline underline-offset-[7px] mx-6 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-16  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:3xl 2xl:text-4xl font-normal ">Statistics</h1>
        <div className='upperline'></div>
        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 m-4 flex justify-items-center"  >

          <div className="card lg:h-[20rem] xl:h-[25rem] 2xl:h-[25rem]] lg:pb-[5rem] xl:pb-[5rem] 2xl:pb-[5rem] w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none" >
            <div className='frame h-full w-full'>
              <h3 className="p-8 text-base sm:text-xl md:text-2xl lg:text-2xl 2xl:text-2xl ">1600+</h3>
            </div>
            <div className='base w-full lg:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32'>
              <p className=" text-xs sm:text-lg md:text-base lg:text-lg 2xl:text-xl ">Registrations</p>
            </div>
          </div>
          <div className="card lg:h-[20rem] xl:h-[25rem] 2xl:h-[25rem]] lg:pt-[5rem] xl:pt-[5rem] 2xl:pt-[5rem] w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none" >
            <div className='frame h-full w-full'>
              <h3 className="p-8 text-base sm:text-xl md:text-2xl lg:text-2xl 2xl:text-2xl ">1600+</h3>
            </div>
            <div className='base w-full lg:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32'>
              <p className=" text-xs sm:text-lg md:text-base lg:text-lg 2xl:text-xl ">Registrations</p>
            </div>
          </div>
          <div className="card lg:h-[20rem] xl:h-[25rem] 2xl:h-[25rem]] lg:pb-[5rem] xl:pb-[5rem] 2xl:pb-[5rem] w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none" >
            <div className='frame h-full w-full'>
              <h3 className="p-8 text-base sm:text-xl md:text-2xl lg:text-2xl 2xl:text-2xl ">1600+</h3>
            </div>
            <div className='base w-full lg:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32'>
              <p className=" text-xs sm:text-lg md:text-base lg:text-lg 2xl:text-xl ">Registrations</p>
            </div>
          </div>
          <div className="card lg:h-[20rem] xl:h-[25rem] 2xl:h-[25rem]] lg:pt-[5rem] xl:pt-[5rem] 2xl:pt-[5rem] w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none" >
            <div className='frame h-full w-full'>
              <h3 className="p-8 text-base sm:text-xl md:text-2xl lg:text-2xl 2xl:text-2xl ">1600+</h3>
            </div>
            <div className='base w-full lg:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32'>
              <p className=" text-xs sm:text-lg md:text-base lg:text-lg 2xl:text-xl ">Registrations</p>
            </div>
          </div>
          {/* <div className="card lg:h-[20rem] xl:h-[25rem] 2xl:h-[25rem]] w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none" >
            <div className='frame h-full w-full'>
              <h3 className="p-8 text-base sm:text-xl md:text-2xl lg:text-2xl 2xl:text-2xl ">1600+</h3>
            </div>
            <div className='base w-full lg:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32'>
              <p className=" text-xs sm:text-lg md:text-base lg:text-lg 2xl:text-xl ">Registrations</p>
            </div>
          </div>
          <div className="card lg:h-[20rem] xl:h-[25rem] 2xl:h-[25rem]] w-full m-4 mt-3  p-3 mb-5 rounded flex flex-col items-center bg-none" >
            <div className='frame h-full w-full'>
              <h3 className="p-8 text-base sm:text-xl md:text-2xl lg:text-2xl 2xl:text-2xl ">1600+</h3>
            </div>
            <div className='base w-full lg:w-8/12  h-16 sm:h-24 md:h-28 lg:h-32'>
              <p className=" text-xs sm:text-lg md:text-base lg:text-lg 2xl:text-xl ">Registrations</p>
            </div>
          </div> */}

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