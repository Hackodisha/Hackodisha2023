import React from 'react'
import image1 from "./Assets/1.svg"
import image2 from "./Assets/2.svg"
import image3 from "./Assets/3.svg"

import "./SponsorCompany.css"
import Image from 'next/image'
const SponsorCompany = () => {
  const images = [image1, image2, image3,image1, image2, image3,image1, image2, image3 ]
  return (
    <>
    <section className='main-section'>
    
    {
      images.map((image, index) => {
        return (
          <div className='Big-dot' key={index}>
            <div className='Mid-dot'>
              <div className='Small-dot'>
                <div className='container'>
                  <div className="item">
                    <Image src={image} alt="" />
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
