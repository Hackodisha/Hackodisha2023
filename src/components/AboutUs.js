import React from 'react';
import Image from "next/image";
import './styles/aboutus.styles.css'
import Logo from './Images/HackLogo.svg';
import Title from './CommonComponent/Title/Title';

export const AboutUs = () => {
  return (
    <section className='about-section  bg-black'>
    <div className='header-sec '>
      <Title title={"About Us"} className={"px-10 py-5"}></Title>
      <hr className='line'/>
    </div>
    <div className='aboutus flex flex-col md:flex-row px-10 py-20	text-justify justify-between items-center	 '>
        <div className='logo-container w-[219px] md:w-[524px]'>
            <Image src={Logo} className='hacklogo' alt='hackodisha-logo'/>
        </div>
        <div className='para-container w-[333px] sm:w-[841px] px-8 '>
          <p className='paras'> HackOdisha- a thrilling <span className='pink-span'>36-hour online hackathon</span> organized by <span className='pink-span'>Webwiz, Nit Rourkela</span>— an event dedicated to fostering community collaboration. With an impressive turnout of over 1600 participants across India, this hackathon promises to be a platform where innovation knows no bounds. </p> 

          <p className='paras'> Here, we witness groundbreaking projects spanning many fields, including healthcare, education, environment, women&apos;s security, and much more. Our participants bring their unique perspectives and expertise to address real-world challenges in these critical areas. </p> 

          <p className='paras'> We celebrate the power of technology and the indomitable spirit of our participants. Together, we&apos;re shaping a brighter future through innovation and collaboration. </p> 

        </div>
    </div>
    </section>
  )
}
