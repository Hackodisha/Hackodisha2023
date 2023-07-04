import React from 'react'
import Logo from "./Assets/1.png"
import SponsorCompany from './SponsorCompany'
const Trial = () => {
  
  return (
    <div>
      <img src={Logo} alt="" className=' text-white' />
      <div className='Big-dot'>
          <div className='Mid-dot'>
            <div className='Small-dot'>
              <div className='container'>
                <div className="item">
                  <Image src={image1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='Big-dot'>
          <div className='Mid-dot'>
            <div className='Small-dot'>
              <div className='container'>
                <div className="item">
                  <Image src={image2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='Big-dot'>
        <div className='Mid-dot'>
          <div className='Small-dot'>
            <div className='container'>
              <div className="item">
                <Image src={image3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Trial
