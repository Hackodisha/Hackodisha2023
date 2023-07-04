import React from 'react'
import "./Sponser.css"
import image1 from "./Assets/1.png"
import image2 from "./Assets/2.png"
import image3 from "./Assets/3.png"
import image4 from "./Assets/4.png"
import image5 from "./Assets/5.png"
import image6 from "./Assets/6.png"
import Image from 'next/image'
import SponsorCompany from './SponsorCompany'
import Text from './Text'

const Sponsor = () => {
    const images = [image1, image2, image3, image4, image5, image6]
    return (
        <>
        <section className='Sponsor-page'>
            <section className='Main-section md:flex grid md:justify-between section1 '>
               <div className='md:mt-80'>
               <Text cat="SILVER"/>
               </div>
               <div className='flex flex-col'>
                <SponsorCompany/>
                <SponsorCompany/>
                <SponsorCompany/>
               </div>     
            </section>
            <section className='Main-section md:flex grid md:justify-between md:mt-40 section2 '>
               <div className=''>
                <SponsorCompany/>
                <SponsorCompany/>
                <SponsorCompany/>
               </div>   
               <div className='md:mt-96'>
               <Text cat="BRONZE"/>
               </div>
            </section>
            </section>
        </>
    )
}

export default Sponsor
