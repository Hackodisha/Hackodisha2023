import React from 'react'
import image1 from "./Assets/1.svg"
import image2 from "./Assets/2.svg"
import image3 from "./Assets/3.svg"
import "../globals.css"
import "./Sponsor.css"
import Image from 'next/image'
const SponsorCompany = ({ image, key }) => {
  return (
    <>
      <div className='Big-dot flex justify-center w-24 h-24  m-3 sm:w-36 sm:h-36 sm:m-10 md:w-30 md:h-30 md:m-14 xl:h-60 xl:w-60 max-[786px]:overflow:hidden' key={key}>
        <div className='Mid-dot flex justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-40 lg:h-40'>
          <div className='Small-dot flex justify-center w-24 h-24 md:w-24 md:h-24 lg:h-24 lg:w-24'>
            <div className='container flex w-16 h-16 justify-center lg:w-32 lg:h-32'>
              <div className="item w-10 h-10 flex justify-center lg:w-16 lg:h-14  sm:w-10 sm:h-10">
                <Image src={image} alt="xyz" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default SponsorCompany
