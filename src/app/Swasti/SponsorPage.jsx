import React from 'react'
import SponsorCompany from './SponsorCompany'
import Text from './Text'
import "./Sponsor.css"
import Image from 'next/image';
import photo from "./Assets/Group 143.svg"
const SponsorPage = () => {
  return (
    <>
      <section className='main-sponsor'>
        <section className='first mt-5 pt-32'>
          <section className='mb-40 '>
            <div className='flex flex-col md:flex-row md:justify-between'>
              <div className='md:mt-80 md:-ml-96 mb-20'>
                <Text cat="SILVER" />
              </div>
              <div>
                <Image src={photo} alt="" className=' hidden md:flex' />
              </div>
              <div className="md:mr-16">
                <SponsorCompany />
                
              </div>
            </div>
          </section>
        </section>
        <section className='md:hidden'>
          <div className='flex flex-col md:flex-row md:justify-between'>
            <div className='md:mt-80 md:-ml-4 mb-20 '>
              <Text cat="BRONZE" />
            </div>
            <div className="md:-ml-96">
              <SponsorCompany />
            </div>
          </div>
        </section>
        <section className='second mt-5 pt-32'>
        <section className='hidden md:flex'>
          <div className='flex flex-col md:flex-row md:justify-between'>
            <div className="md:ml-16">
              <SponsorCompany />
            </div>
            <div className=''>
            <Image src={photo} alt="" className='rotate-180' />

            </div>
            <div className='md:mt-80 md:ml-4 mb-20'>
              <Text cat="BRONZE" />
            </div>
          </div>
        </section>
        </section>
      </section>
    </>
  )
}
export default SponsorPage;
