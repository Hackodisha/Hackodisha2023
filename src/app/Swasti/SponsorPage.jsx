import React from 'react'
import SponsorCompany from './SponsorCompany'
import "./Sponsor.css"
import Silver from "./Assets/silver.svg"
import Bronze from "./Assets/bronze.svg"
import photo from "./Assets/Group 143.svg"
const SponsorPage = () => {
  return (
    <>
      <section className='overflow-hidden main-sponsor'>
        <div className='sm:hidden md:hidden xl:hidden 2xl:hidden flex text-[#CA40CD] justify-center font pt-4'>
          SILVER SPONSORS
        </div>
        <section className='flex flex-row md:flex-row md:justify-between h-max first md:mt-3 md:mr-2'>
          <div className=''>
            <div className='md:h-max md:w-max md:flex md:ml-10 hidden md:mt-28'>
              <img src={Silver.src} alt="silver" />
            </div>
          </div>
          <div className='pic md:ml-24 md:mt-28 '>
            <img src={photo.src} alt="" className='hidde/n md:flex h-[35rem] md:h-max ' />
          </div>
          <div className='mt-8 md:mt-20'>
            <SponsorCompany />
          </div>
        </section>
        <div className='sm:hidden md:hidden flex text-[#CA40CD] justify-center font pt-4'>
          BRONZE SPONSORS
        </div>
        <section className='flex flex-row md:flex-row md:justify-between h-max first md:mt-32 md:mr-2 second'>
          <div className='mt-3 mr-4 md:mt-20'>
            <SponsorCompany />
          </div>
          <div className='pic md:mr-14 md:mt-20 -mt-8 md:rotate-180 rotate-180'>
            <img src={photo.src} alt="" className='hidde/n md:flex h-[35rem] md:h-max' />
          </div>
          <div className=''>
            <div className='hidden md:flex md:mr-10 md:mt-32 '>
              <img src={Bronze.src} alt="silver" />
            </div>
          </div>

        </section>
      </section>
    </>
  )
}
export default SponsorPage;