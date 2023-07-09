import React from 'react'
import image1 from "./Assets/1.svg"
import image2 from "./Assets/2.svg"
import image3 from "./Assets/3.svg"
import "../globals.css"
import "./Sponsor.css"
import Image from 'next/image'
const SponsorCompany = () => {
  const images = [image1, image2, image3, image1, image2, image3, image1, image2, image3]
  return (
    <>
      <section className='main-section overflow-hidden grid grid-cols-3 md:min-h-full'>
        {
          images.map((image, index) => {
            return (
              <div className='Big-dot flex justify-center w-24 h-24 m-4 sm:w-36 sm:h-36 sm:m-10 md:w-56 md:h-56 md:m-14 xl:h-60 xl:w-60' key={index}>
                <div className='Mid-dot flex justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40'>
                  <div className='Small-dot flex justify-center w-24 h-24 '>
                    <div className='container flex w-16 h-16 justify-center md:w-32 md:h-32'>
                      <div className="item w-10 h-10 flex justify-center md:w-16 md:h-14 sm:w-10 sm:h-10">
                        <Image src={image} alt="xyz" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </section>

    </>
  )
}

export default SponsorCompany
