import React from 'react'
import image1 from "./Assets/1.png"
import image2 from "./Assets/2.png"
import image3 from "./Assets/3.png"
import image4 from "./Assets/4.png"
import image5 from "./Assets/5.png"
import image6 from "./Assets/6.png"
import "./style.css"
import Image from 'next/image'
const SponsorCompany = () => {
  const images = [image1, image2, image3]
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
